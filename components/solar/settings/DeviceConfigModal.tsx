"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UnifiedDevice } from '@/types/unifiedDeviceTypes';

interface DeviceConfigModalProps {
  device: UnifiedDevice | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (device: UnifiedDevice) => void;
}

export default function DeviceConfigModal({
  device,
  open,
  onOpenChange,
  onSave
}: DeviceConfigModalProps) {
  const [editedDevice, setEditedDevice] = useState<UnifiedDevice | null>(null);
  const [saving, setSaving] = useState(false);
  
  // Initialize form when device changes
  useEffect(() => {
    if (device) {
      setEditedDevice({ ...device });
    } else {
      setEditedDevice(null);
    }
  }, [device]);
  
  const handleSave = () => {
    if (!editedDevice) return;
    
    setSaving(true);
    // Simulate API delay
    setTimeout(() => {
      onSave(editedDevice);
      setSaving(false);
      onOpenChange(false);
    }, 500);
  };
  
  // If no device data, don't render the dialog content
  if (!editedDevice) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-[#1f2937] border-[#374151] text-white">
          <DialogHeader>
            <DialogTitle>Loading device data...</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1f2937] border-[#374151] text-white">
        <DialogHeader>
          <DialogTitle>Configure Device</DialogTitle>
          <DialogDescription className="text-gray-400">
            Modify device settings and parameters
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Basic Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deviceName">Device Name</Label>
              <Input
                id="deviceName"
                value={editedDevice.name}
                onChange={(e) => setEditedDevice({ ...editedDevice, name: e.target.value })}
                className="bg-[#111928] border-[#374151] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deviceType">Type</Label>
              <Select
                value={editedDevice.type}
                onValueChange={(value) => setEditedDevice({ ...editedDevice, type: value })}
              >
                <SelectTrigger 
                  id="deviceType"
                  className="bg-[#111928] border-[#374151] text-white"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#111928] border-[#374151] text-white">
                  <SelectItem value="Inversor">Inverter</SelectItem>
                  <SelectItem value="Panel">Panel</SelectItem>
                  <SelectItem value="Batería">Battery</SelectItem>
                  <SelectItem value="SmartLogger">SmartLogger</SelectItem>
                  <SelectItem value="Medidor">Meter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deviceModel">Model</Label>
              <Input
                id="deviceModel"
                value={editedDevice.model}
                onChange={(e) => setEditedDevice({ ...editedDevice, model: e.target.value })}
                className="bg-[#111928] border-[#374151] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deviceSerial">Serial Number</Label>
              <Input
                id="deviceSerial"
                value={editedDevice.serialNumber}
                onChange={(e) => setEditedDevice({ ...editedDevice, serialNumber: e.target.value })}
                className="bg-[#111928] border-[#374151] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deviceLocation">Location</Label>
              <Input
                id="deviceLocation"
                value={editedDevice.physicalLocation}
                onChange={(e) => setEditedDevice({ ...editedDevice, physicalLocation: e.target.value })}
                className="bg-[#111928] border-[#374151] text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="deviceStatus">Status</Label>
              <Select
                value={editedDevice.status}
                onValueChange={(value) => setEditedDevice({ ...editedDevice, status: value })}
              >
                <SelectTrigger 
                  id="deviceStatus"
                  className="bg-[#111928] border-[#374151] text-white"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#111928] border-[#374151] text-white">
                  <SelectItem value="Activo">Active</SelectItem>
                  <SelectItem value="Advertencia">Warning</SelectItem>
                  <SelectItem value="Falla">Error</SelectItem>
                  <SelectItem value="Mantenimiento">Maintenance</SelectItem>
                  <SelectItem value="Inactivo">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Type-specific configuration */}
          {editedDevice.type === 'Inversor' && (
            <div className="space-y-4 border-t border-[#374151] pt-4">
              <h3 className="text-sm font-medium">Inverter Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxPower">Maximum Power (kW)</Label>
                  <Input
                    id="maxPower"
                    type="number"
                    value={editedDevice.inverterDetails?.maxPower || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      inverterDetails: {
                        ...(editedDevice.inverterDetails || {}),
                        maxPower: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="efficiency">Efficiency (%)</Label>
                  <Input
                    id="efficiency"
                    type="number"
                    value={editedDevice.inverterDetails?.efficiency || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      inverterDetails: {
                        ...(editedDevice.inverterDetails || {}),
                        efficiency: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inputVoltage">Input Voltage (V)</Label>
                  <Input
                    id="inputVoltage"
                    type="number"
                    value={editedDevice.inverterDetails?.inputVoltage || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      inverterDetails: {
                        ...(editedDevice.inverterDetails || {}),
                        inputVoltage: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="outputVoltage">Output Voltage (V)</Label>
                  <Input
                    id="outputVoltage"
                    type="number"
                    value={editedDevice.inverterDetails?.outputVoltage || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      inverterDetails: {
                        ...(editedDevice.inverterDetails || {}),
                        outputVoltage: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
              </div>
            </div>
          )}
          
          {editedDevice.type === 'Batería' && (
            <div className="space-y-4 border-t border-[#374151] pt-4">
              <h3 className="text-sm font-medium">Battery Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity (kWh)</Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={editedDevice.batteryDetails?.capacity || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      batteryDetails: {
                        ...(editedDevice.batteryDetails || {}),
                        capacity: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="stateOfCharge">Current Charge (%)</Label>
                  <Input
                    id="stateOfCharge"
                    type="number"
                    value={editedDevice.batteryDetails?.stateOfCharge || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      batteryDetails: {
                        ...(editedDevice.batteryDetails || {}),
                        stateOfCharge: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cycles">Charge Cycles</Label>
                  <Input
                    id="cycles"
                    type="number"
                    value={editedDevice.batteryDetails?.cycles || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      batteryDetails: {
                        ...(editedDevice.batteryDetails || {}),
                        cycles: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
              </div>
            </div>
          )}
          
          {editedDevice.type === 'Panel' && (
            <div className="space-y-4 border-t border-[#374151] pt-4">
              <h3 className="text-sm font-medium">Solar Panel Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="peakPower">Peak Power (Wp)</Label>
                  <Input
                    id="peakPower"
                    type="number"
                    value={editedDevice.panelDetails?.peakPower || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      panelDetails: {
                        ...(editedDevice.panelDetails || {}),
                        peakPower: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="panelEfficiency">Efficiency (%)</Label>
                  <Input
                    id="panelEfficiency"
                    type="number"
                    value={editedDevice.panelDetails?.efficiency || ''}
                    onChange={(e) => setEditedDevice({
                      ...editedDevice,
                      panelDetails: {
                        ...(editedDevice.panelDetails || {}),
                        efficiency: Number(e.target.value)
                      }
                    })}
                    className="bg-[#111928] border-[#374151] text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button 
            variant="outline"
            className="bg-[#111928] border-[#374151] text-white mr-2"
            onClick={() => onOpenChange(false)}
            disabled={saving}
          >
            Cancel
          </Button>
          <Button 
            className="bg-[#4a4ae2] hover:bg-[#3b3be0] text-white"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}