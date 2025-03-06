// components/solar/settings/MaintenanceScheduleDialog.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { addMonths, addWeeks, addDays, format, startOfDay } from 'date-fns';
import { Calendar as CalendarIcon, Check } from 'lucide-react';
import { MaintenanceTemplate } from '@/lib/services/settingsService';
import { settingsService } from '@/lib/services/settingsService';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface MaintenanceScheduleDialogProps {
  templates: MaintenanceTemplate[];
  plantId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onScheduled: () => void;
}

export default function MaintenanceScheduleDialog({
  templates,
  plantId,
  open,
  onOpenChange,
  onScheduled
}: MaintenanceScheduleDialogProps) {
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [scheduleDates, setScheduleDates] = useState<{[id: string]: Date}>({});
  const [processing, setProcessing] = useState(false);
  
  // Initialize selected templates when dialog opens
  useEffect(() => {
    if (open) {
      // Default all enabled templates to selected
      const enabledTemplateIds = templates
        .filter(t => t.enabled)
        .map(t => t.id);
      
      setSelectedTemplates(enabledTemplateIds);
      
      // Calculate default dates based on frequency
      const dates: {[id: string]: Date} = {};
      const today = startOfDay(new Date());
      
      templates.forEach(template => {
        let nextDate = new Date(today);
        
        switch(template.frequency) {
          case 'daily':
            nextDate = addDays(today, 1);
            break;
          case 'weekly':
            nextDate = addWeeks(today, 1);
            break;
          case 'monthly':
            nextDate = addMonths(today, 1);
            break;
          case 'quarterly':
            nextDate = addMonths(today, 3);
            break;
          case 'semi-annual':
            nextDate = addMonths(today, 6);
            break;
          case 'annual':
            nextDate = addMonths(today, 12);
            break;
        }
        
        dates[template.id] = nextDate;
      });
      
      setScheduleDates(dates);
    }
  }, [open, templates]);
  
  const toggleTemplateSelection = (templateId: string) => {
    setSelectedTemplates(prev => 
      prev.includes(templateId)
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };
  
  const handleDateChange = (templateId: string, date: Date) => {
    setScheduleDates(prev => ({
      ...prev,
      [templateId]: date
    }));
  };
  
  const handleScheduleAll = async () => {
    setProcessing(true);
    
    try {
      // Schedule each selected template
      for (const templateId of selectedTemplates) {
        const date = scheduleDates[templateId];
        if (date) {
          await settingsService.scheduleMaintenanceTask(
            plantId,
            templateId,
            date.toISOString()
          );
        }
      }
      
      onScheduled();
      onOpenChange(false);
    } catch (error) {
      console.error('Error scheduling maintenance tasks:', error);
    } finally {
      setProcessing(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1f2937] border-[#374151] text-white max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Schedule Maintenance Tasks</DialogTitle>
          <DialogDescription className="text-gray-400">
            Set dates for upcoming maintenance tasks based on templates
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="space-y-4">
            {templates.map(template => (
              <div 
                key={template.id}
                className={`bg-[#111928] p-4 rounded-lg border ${
                  selectedTemplates.includes(template.id) 
                    ? 'border-[#4a4ae2]' 
                    : 'border-[#374151]'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className={`w-5 h-5 rounded flex items-center justify-center cursor-pointer ${
                      selectedTemplates.includes(template.id)
                        ? 'bg-[#4a4ae2] text-white'
                        : 'border border-[#374151] text-transparent'
                    }`}
                    onClick={() => toggleTemplateSelection(template.id)}
                  >
                    <Check size={14} />
                  </div>
                  
                  <h3 className="font-medium">{template.name}</h3>
                  
                  <span className={`text-xs px-2 py-1 rounded-full ml-auto ${
                    template.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                    template.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {template.priority.charAt(0).toUpperCase() + template.priority.slice(1)}
                  </span>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">
                  {template.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-400">Frequency: </span>
                    {template.frequency}
                  </div>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                        variant="outline"
                        className="bg-[#111928] border-[#374151] text-white"
                        disabled={!selectedTemplates.includes(template.id)}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {scheduleDates[template.id] ? format(scheduleDates[template.id], 'PPP') : 'Select date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-[#111928] border-[#374151] text-white p-0">
                      <Calendar
                        mode="single"
                        selected={scheduleDates[template.id]}
                        onSelect={(date) => date && handleDateChange(template.id, date)}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)} 
            className="bg-[#111928] border-[#374151] text-white"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleScheduleAll} 
            disabled={processing || selectedTemplates.length === 0}
            className="bg-[#4a4ae2] hover:bg-[#3b3be0] text-white"
          >
            {processing ? 'Processing...' : 'Schedule Selected'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}