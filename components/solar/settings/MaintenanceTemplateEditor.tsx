// components/solar/settings/MaintenanceTemplateEditor.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MaintenanceTemplate } from '@/lib/services/settingsService';

interface MaintenanceTemplateEditorProps {
  template: MaintenanceTemplate | null;
  isNew: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (template: MaintenanceTemplate) => void;
}

export default function MaintenanceTemplateEditor({
  template,
  isNew,
  open,
  onOpenChange,
  onSave
}: MaintenanceTemplateEditorProps) {
  const [editedTemplate, setEditedTemplate] = useState<MaintenanceTemplate | null>(null);
  const [saving, setSaving] = useState(false);
  
  // Initialize form when template changes
  useEffect(() => {
    if (template) {
      setEditedTemplate({ ...template });
    } else if (isNew) {
      // Create a new template with default values
      setEditedTemplate({
        id: `mt-${Date.now()}`,
        name: '',
        frequency: 'monthly',
        description: '',
        estimatedDuration: 120, // 2 hours default
        priority: 'medium',
        assignedRole: 'technician',
        enabled: true,
        nextScheduledDate: ''
      });
    } else {
      setEditedTemplate(null);
    }
  }, [template, isNew]);
  
  const handleSave = () => {
    if (!editedTemplate) return;
    
    setSaving(true);
    // Simulate API delay
    setTimeout(() => {
      onSave(editedTemplate);
      setSaving(false);
      onOpenChange(false);
    }, 500);
  };
  
  // If no template data, don't render the dialog content
  if (!editedTemplate) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-[#1f2937] border-[#374151] text-white">
          <DialogHeader>
            <DialogTitle>Loading...</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1f2937] border-[#374151] text-white">
        <DialogHeader>
          <DialogTitle>{isNew ? 'Create New Maintenance Template' : 'Edit Maintenance Template'}</DialogTitle>
          <DialogDescription className="text-gray-400">
            Define standard maintenance tasks for scheduling
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Basic Details */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="templateName">Template Name</Label>
              <Input
                id="templateName"
                value={editedTemplate.name}
                onChange={(e) => setEditedTemplate({ ...editedTemplate, name: e.target.value })}
                className="bg-[#111928] border-[#374151] text-white"
                placeholder="e.g. Panel Cleaning"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="templateDescription">Description</Label>
              <Textarea
                id="templateDescription"
                value={editedTemplate.description}
                onChange={(e) => setEditedTemplate({ ...editedTemplate, description: e.target.value })}
                className="bg-[#111928] border-[#374151] text-white"
                placeholder="Describe the maintenance task and its requirements"
                rows={3}
              />
            </div>
          </div>
          
          {/* Schedule and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="templateFrequency">Frequency</Label>
              <Select
                value={editedTemplate.frequency}
                onValueChange={(value: any) => setEditedTemplate({ ...editedTemplate, frequency: value })}
              >
                <SelectTrigger 
                  id="templateFrequency"
                  className="bg-[#111928] border-[#374151] text-white"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#111928] border-[#374151] text-white">
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="semi-annual">Semi-Annual</SelectItem>
                  <SelectItem value="annual">Annual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="templatePriority">Priority</Label>
              <Select
                value={editedTemplate.priority}
                onValueChange={(value: any) => setEditedTemplate({ ...editedTemplate, priority: value })}
              >
                <SelectTrigger 
                  id="templatePriority"
                  className="bg-[#111928] border-[#374151] text-white"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#111928] border-[#374151] text-white">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="templateDuration">Estimated Duration (minutes)</Label>
              <Input
                id="templateDuration"
                type="number"
                value={editedTemplate.estimatedDuration}
                onChange={(e) => setEditedTemplate({ ...editedTemplate, estimatedDuration: Number(e.target.value) })}
                className="bg-[#111928] border-[#374151] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="templateAssignedRole">Assigned Role</Label>
              <Select
                value={editedTemplate.assignedRole}
                onValueChange={(value) => setEditedTemplate({ ...editedTemplate, assignedRole: value })}
              >
                <SelectTrigger 
                  id="templateAssignedRole"
                  className="bg-[#111928] border-[#374151] text-white"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#111928] border-[#374151] text-white">
                  <SelectItem value="technician">Technician</SelectItem>
                  <SelectItem value="maintenance">Maintenance Staff</SelectItem>
                  <SelectItem value="operator">Operator</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
            onClick={handleSave} 
            disabled={saving || !editedTemplate.name}
            className="bg-[#4a4ae2] hover:bg-[#3b3be0] text-white"
          >
            {saving ? 'Saving...' : 'Save Template'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}