// components/solar/settings/SettingsPage.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, RefreshCw, Save, Settings, Users, Zap, Server, Wrench, Calendar, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
// Import our configuration service and components
import { settingsService, GeneralSettings, MaintenanceTemplate, UserRole } from '@/lib/services/settingsService';
import { getPlantById } from '@/lib/services/plantService';
import { Plant } from '@/types/plantTypes';
import { UnifiedDevice } from '@/types/unifiedDeviceTypes';

// Import the dialog components
import DeviceConfigModal from './DeviceConfigModal';
import MaintenanceTemplateEditor from './MaintenanceTemplateEditor';
import MaintenanceScheduleDialog from './MaintenanceScheduleDialog';

export default function SettingsPage({ params }: { params: { plantId: string } }) {
  const plantId = parseInt(params.plantId);
  const { toast } = useToast();
  
  // State variables
  const [activeTab, setActiveTab] = useState('general');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Plant data
  const [plant, setPlant] = useState<Plant | null>(null);
  
  // Configuration states
  const [generalSettings, setGeneralSettings] = useState<GeneralSettings>({
    name: '',
    description: '',
    location: '',
    notificationsEnabled: true,
    emailAlerts: true,
    smsAlerts: false,
    publicDashboard: false,
    maintenanceReminders: true,
    dataRefreshInterval: '15', // minutes
    timezone: 'UTC-3',
    language: 'es',
  });
  
  const [deviceSettings, setDeviceSettings] = useState<UnifiedDevice[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<UnifiedDevice[]>([]);
  const [selectedDeviceType, setSelectedDeviceType] = useState('all');
  
  // Maintenance templates
  const [maintenanceTemplates, setMaintenanceTemplates] = useState<MaintenanceTemplate[]>([]);
  
  // User roles
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  
  // Dialog states
  const [deviceConfigOpen, setDeviceConfigOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<UnifiedDevice | null>(null);
  
  const [templateEditorOpen, setTemplateEditorOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<MaintenanceTemplate | null>(null);
  const [isNewTemplate, setIsNewTemplate] = useState(false);
  
  const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);
  
  // Load data on component mount
  useEffect(() => {
    loadPlantData();
  }, [plantId]);
  
  // Filter devices when selection changes
  useEffect(() => {
    if (deviceSettings.length > 0) {
      if (selectedDeviceType === 'all') {
        setFilteredDevices(deviceSettings);
      } else {
        setFilteredDevices(deviceSettings.filter(
          device => device.type.toLowerCase() === selectedDeviceType.toLowerCase()
        ));
      }
    }
  }, [selectedDeviceType, deviceSettings]);
  
  const loadPlantData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Load plant data
      const plantData = await getPlantById(plantId);
      if (!plantData) {
        throw new Error(`Plant with ID ${plantId} not found`);
      }
      setPlant(plantData);
      
      // Load settings
      const settings = await settingsService.getPlantSettings(plantId);
      if (settings.general) {
        setGeneralSettings(settings.general);
      }
      
      // Load device settings
      const devices = await settingsService.getDeviceSettings(plantId);
      setDeviceSettings(devices);
      setFilteredDevices(devices);
      
      // Load maintenance templates
      const templates = await settingsService.getMaintenanceTemplates(plantId);
      if (templates.length > 0) {
        setMaintenanceTemplates(templates);
      }
      
      // Load user roles
      const roles = await settingsService.getUserRoles(plantId);
      if (roles.length > 0) {
        setUserRoles(roles);
      }
      
    } catch (err) {
      console.error('Error loading plant settings:', err);
      setError('Failed to load settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const saveSettings = async () => {
    try {
      setSaving(true);
      
      // Save general settings
      await settingsService.saveGeneralSettings(plantId, generalSettings);
      
      // Save device settings
      await settingsService.saveDeviceSettings(plantId, deviceSettings);
      
      // Save maintenance templates
      await settingsService.saveMaintenanceTemplates(plantId, maintenanceTemplates);
      
      // Save user roles
      await settingsService.saveUserRoles(plantId, userRoles);
      
      toast({
        title: "Settings saved",
        description: "Your configuration has been updated successfully.",
      });
    } catch (err) {
      console.error('Error saving settings:', err);
      setError('Failed to save settings. Please try again.');
      
      toast({
        title: "Error saving settings",
        description: "There was a problem saving your configuration.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };
  
  // Device management
  const handleConfigureDevice = (device: UnifiedDevice) => {
    setSelectedDevice(device);
    setDeviceConfigOpen(true);
  };
  
  const handleSaveDevice = (updatedDevice: UnifiedDevice) => {
    const updatedDevices = deviceSettings.map(device => 
      device.id === updatedDevice.id ? updatedDevice : device
    );
    
    setDeviceSettings(updatedDevices);
    
    toast({
      title: "Device updated",
      description: `Configuration for ${updatedDevice.name} has been updated.`,
    });
  };
  
  // Maintenance template management
  const handleEditTemplate = (template: MaintenanceTemplate) => {
    setSelectedTemplate(template);
    setIsNewTemplate(false);
    setTemplateEditorOpen(true);
  };
  
  const handleNewTemplate = () => {
    setSelectedTemplate(null);
    setIsNewTemplate(true);
    setTemplateEditorOpen(true);
  };
  
  const handleSaveTemplate = (template: MaintenanceTemplate) => {
    if (isNewTemplate) {
      // Add new template
      setMaintenanceTemplates(prev => [...prev, template]);
    } else {
      // Update existing template
      setMaintenanceTemplates(prev => 
        prev.map(t => t.id === template.id ? template : t)
      );
    }
    
    toast({
      title: isNewTemplate ? "Template created" : "Template updated",
      description: `Maintenance template '${template.name}' has been ${isNewTemplate ? 'created' : 'updated'}.`,
    });
  };
  
  const toggleMaintenanceTemplate = (id: string, enabled: boolean) => {
    const updatedTemplates = maintenanceTemplates.map(template => {
      if (template.id === id) {
        return { ...template, enabled };
      }
      return template;
    });
    
    setMaintenanceTemplates(updatedTemplates);
  };
  
  const handleDeleteTemplate = (id: string) => {
    setMaintenanceTemplates(prev => prev.filter(template => template.id !== id));
    
    toast({
      title: "Template deleted",
      description: "The maintenance template has been removed.",
    });
  };
  
  // User role management
  const updateRolePermission = (roleId: string, permission: string, value: boolean) => {
    const updatedRoles = userRoles.map(role => {
      if (role.id === roleId) {
        return {
          ...role,
          permissions: {
            ...role.permissions,
            [permission]: value
          }
        };
      }
      return role;
    });
    
    setUserRoles(updatedRoles);
  };
  
  // Handle maintenance schedule
  const handleMaintanenceScheduled = () => {
    // Reload templates to get updated nextScheduledDate
    loadPlantData();
    
    toast({
      title: "Maintenance tasks scheduled",
      description: "The selected maintenance tasks have been scheduled successfully.",
    });
  };
  
  // If loading, show loading state
  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center h-[70vh]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-400">Loading plant settings...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6 space-y-6">
      {/* Header with plant information */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Settings: {plant?.name}</h1>
          <p className="text-sm text-gray-400">Configure plant settings, devices, and maintenance tasks</p>
        </div>
        
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="bg-[#1f2937] border-[#374151] text-white hover:bg-[#374151]"
            onClick={loadPlantData}
            disabled={loading || saving}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Reload
          </Button>
          
          <Button
            className="bg-[#4a4ae2] hover:bg-[#3b3be0] text-white"
            onClick={saveSettings}
            disabled={loading || saving}
          >
            <Save className={`mr-2 h-4 w-4 ${saving ? 'animate-spin' : ''}`} />
            Save
          </Button>
        </div>
      </div>
      
      {/* Error message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg">
          <AlertTriangle className="inline-block mr-2 h-4 w-4" />
          {error}
        </div>
      )}
      
      {/* Settings tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-[#1f2937] border border-[#374151]">
          <TabsTrigger 
            value="general"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            <Settings className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger 
            value="devices"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            <Server className="mr-2 h-4 w-4" />
            Devices
          </TabsTrigger>
          <TabsTrigger 
            value="maintenance"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            <Wrench className="mr-2 h-4 w-4" />
            Maintenance
          </TabsTrigger>
          <TabsTrigger 
            value="users"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            <Users className="mr-2 h-4 w-4" />
            Users & Roles
          </TabsTrigger>
        </TabsList>
        
        {/* General Settings */}
        <TabsContent value="general" className="space-y-6 mt-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription className="text-gray-400">
                Configure basic information and system behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="plantName">Plant Name</Label>
                    <Input
                      id="plantName"
                      value={generalSettings.name || plant?.name || ''}
                      onChange={(e) => setGeneralSettings(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-[#111928] border-[#374151] text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="plantLocation">Location</Label>
                    <Input
                      id="plantLocation"
                      value={generalSettings.location || plant?.location || ''}
                      onChange={(e) => setGeneralSettings(prev => ({ ...prev, location: e.target.value }))}
                      className="bg-[#111928] border-[#374151] text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="plantDescription">Description</Label>
                    <Input
                      id="plantDescription"
                      value={generalSettings.description || ''}
                      onChange={(e) => setGeneralSettings(prev => ({ ...prev, description: e.target.value }))}
                      className="bg-[#111928] border-[#374151] text-white"
                    />
                  </div>
                </div>
                
                {/* Notification Settings */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-400">Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notificationsEnabled" className="flex-1">
                      Enable Notifications
                    </Label>
                    <Switch
                      id="notificationsEnabled"
                      checked={generalSettings.notificationsEnabled}
                      onCheckedChange={(checked) => 
                        setGeneralSettings(prev => ({ ...prev, notificationsEnabled: checked }))
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailAlerts" className="flex-1">
                      Email Alerts
                    </Label>
                    <Switch
                      id="emailAlerts"
                      checked={generalSettings.emailAlerts}
                      onCheckedChange={(checked) => 
                        setGeneralSettings(prev => ({ ...prev, emailAlerts: checked }))
                      }
                      disabled={!generalSettings.notificationsEnabled}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="smsAlerts" className="flex-1">
                      SMS Alerts
                    </Label>
                    <Switch
                      id="smsAlerts"
                      checked={generalSettings.smsAlerts}
                      onCheckedChange={(checked) => 
                        setGeneralSettings(prev => ({ ...prev, smsAlerts: checked }))
                      }
                      disabled={!generalSettings.notificationsEnabled}
                    />
                  </div>
                </div>
              </div>
              
              <Separator className="bg-[#374151]" />
              
              {/* System Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-400">System Settings</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="publicDashboard" className="flex-1">
                      Public Dashboard
                    </Label>
                    <Switch
                      id="publicDashboard"
                      checked={generalSettings.publicDashboard}
                      onCheckedChange={(checked) => 
                        setGeneralSettings(prev => ({ ...prev, publicDashboard: checked }))
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="maintenanceReminders" className="flex-1">
                      Maintenance Reminders
                    </Label>
                    <Switch
                      id="maintenanceReminders"
                      checked={generalSettings.maintenanceReminders}
                      onCheckedChange={(checked) => 
                        setGeneralSettings(prev => ({ ...prev, maintenanceReminders: checked }))
                      }
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dataRefresh">Data Refresh Interval (minutes)</Label>
                    <Select
                      value={generalSettings.dataRefreshInterval}
                      onValueChange={(value) => 
                        setGeneralSettings(prev => ({ ...prev, dataRefreshInterval: value }))
                      }
                    >
                      <SelectTrigger id="dataRefresh" className="bg-[#111928] border-[#374151] text-white">
                        <SelectValue placeholder="Select an interval" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#111928] border-[#374151] text-white">
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="10">10 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-400">Localization</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select
                      value={generalSettings.timezone}
                      onValueChange={(value) => 
                        setGeneralSettings(prev => ({ ...prev, timezone: value }))
                      }
                    >
                      <SelectTrigger id="timezone" className="bg-[#111928] border-[#374151] text-white">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#111928] border-[#374151] text-white">
                        <SelectItem value="UTC-3">Argentina (UTC-3)</SelectItem>
                        <SelectItem value="UTC-5">Eastern US (UTC-5)</SelectItem>
                        <SelectItem value="UTC-6">Central US (UTC-6)</SelectItem>
                        <SelectItem value="UTC-7">Mountain US (UTC-7)</SelectItem>
                        <SelectItem value="UTC-8">Pacific US (UTC-8)</SelectItem>
                        <SelectItem value="UTC+0">GMT (UTC+0)</SelectItem>
                        <SelectItem value="UTC+1">Central Europe (UTC+1)</SelectItem>
                        <SelectItem value="UTC+2">Eastern Europe (UTC+2)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select
                      value={generalSettings.language}
                      onValueChange={(value) => 
                        setGeneralSettings(prev => ({ ...prev, language: value }))
                      }
                    >
                      <SelectTrigger id="language" className="bg-[#111928] border-[#374151] text-white">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#111928] border-[#374151] text-white">
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="pt">Portuguese</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Devices Settings */}
        <TabsContent value="devices" className="space-y-6 mt-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Device Management</CardTitle>
              <CardDescription className="text-gray-400">
                Configure and monitor all connected devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Filter controls */}
              <div className="flex justify-between items-center mb-6">
                <div className="space-x-2">
                  <Select
                    value={selectedDeviceType}
                    onValueChange={setSelectedDeviceType}
                  >
                    <SelectTrigger className="bg-[#111928] border-[#374151] text-white w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111928] border-[#374151] text-white">
                      <SelectItem value="all">All Devices</SelectItem>
                      <SelectItem value="inversor">Inverters</SelectItem>
                      <SelectItem value="panel">Panels</SelectItem>
                      <SelectItem value="batería">Batteries</SelectItem>
                      <SelectItem value="smartlogger">SmartLoggers</SelectItem>
                      <SelectItem value="medidor">Meters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  variant="outline"
                  className="bg-[#111928] border-[#374151] text-white"
                >
                  Add Device
                </Button>
              </div>
              
              {/* Device list */}
              <div className="space-y-4">
                {filteredDevices.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    No devices found matching the selected criteria
                  </div>
                ) : (
                  filteredDevices.map((device) => (
                    <div 
                      key={device.id}
                      className="bg-[#111928] p-4 rounded-lg border border-[#374151]"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-medium">{device.name}</h3>
                          <p className="text-sm text-gray-400">
                            Type: {device.type} | Model: {device.model} | S/N: {device.serialNumber}
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center gap-4">
                          <div className="text-sm">
                            <span className="text-gray-400 mr-2">Status:</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              device.status === 'Activo' ? 'bg-green-500/20 text-green-400' :
                              device.status === 'Advertencia' ? 'bg-yellow-500/20 text-yellow-400' :
                              device.status === 'Falla' ? 'bg-red-500/20 text-red-400' :
                              device.status === 'Mantenimiento' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {device.status}
                            </span>
                          </div>
                          
                          <Button 
                            variant="outline"
                            size="sm"
                            className="bg-[#111928] border-[#374151] text-white"
                            onClick={() => handleConfigureDevice(device)}
                          >
                            Configure
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Maintenance Settings */}
        <TabsContent value="maintenance" className="space-y-6 mt-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Maintenance Templates</CardTitle>
              <CardDescription className="text-gray-400">
                Configure standard maintenance tasks for the plant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Controls */}
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    className="bg-[#111928] border-[#374151] text-white"
                    onClick={handleNewTemplate}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    New Template
                  </Button>
                  
                  <Button
                    className="bg-[#4a4ae2] hover:bg-[#3b3be0] text-white"
                    onClick={() => setScheduleDialogOpen(true)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Tasks
                  </Button>
                </div>
                
                {/* Templates list */}
                <div className="space-y-4">
                  {maintenanceTemplates.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      No maintenance templates defined yet. Create your first template.
                    </div>
                  ) : (
                    maintenanceTemplates.map((template) => (
                      <div 
                        key={template.id}
                        className="bg-[#111928] p-4 rounded-lg border border-[#374151]"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{template.name}</h3>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                template.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                                template.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-green-500/20 text-green-400'
                              }`}>
                                {template.priority.charAt(0).toUpperCase() + template.priority.slice(1)}
                              </span>
                              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                                {template.frequency}
                              </span>
                              <Switch
                                checked={template.enabled}
                                onCheckedChange={(checked) => toggleMaintenanceTemplate(template.id, checked)}
                              />
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-400">
                            {template.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Duration: </span>
                              {Math.floor(template.estimatedDuration / 60)}h {template.estimatedDuration % 60}min
                            </div>
                            <div>
                              <span className="text-gray-400">Assigned to: </span>
                              {template.assignedRole}
                            </div>
                            <div>
                              <span className="text-gray-400">Next scheduled: </span>
                              {template.nextScheduledDate ? new Date(template.nextScheduledDate).toLocaleDateString() : 'Not scheduled'}
                            </div>
                          </div>
                          
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline"
                              size="sm"
                              className="bg-[#111928] border-[#374151] text-white"
                              onClick={() => handleEditTemplate(template)}
                            >
                              Edit
                            </Button>
                            <Button 
                              variant="outline"
                              size="sm"
                              className="bg-[#111928] border-[#374151] text-red-400 hover:text-red-300"
                              onClick={() => handleDeleteTemplate(template.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Users & Roles Settings */}
        <TabsContent value="users" className="space-y-6 mt-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>User Roles & Permissions</CardTitle>
              <CardDescription className="text-gray-400">
                Configure access control for the plant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {userRoles.map((role) => (
                  <div 
                    key={role.id}
                    className="bg-[#111928] p-4 rounded-lg border border-[#374151]"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{role.name}</h3>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="bg-[#111928] border-[#374151] text-white"
                        >
                          Edit
                        </Button>
                      </div>
                      
                      <p className="text-sm text-gray-400">
                        {role.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Permissions</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                          {Object.entries(role.permissions).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between">
                              <Label htmlFor={`${role.id}-${key}`} className="flex-1 capitalize">
                                {key.replace(/([A-Z])/g, ' $1')}
                              </Label>
                              <Switch
                                id={`${role.id}-${key}`}
                                checked={value}
                                onCheckedChange={(checked) => 
                                  updateRolePermission(role.id, key, checked)
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Device Configuration Modal */}
      <DeviceConfigModal
        device={selectedDevice}
        open={deviceConfigOpen}
        onOpenChange={setDeviceConfigOpen}
        onSave={handleSaveDevice}
      />
      
      {/* Maintenance Template Editor */}
      <MaintenanceTemplateEditor
        template={selectedTemplate}
        isNew={isNewTemplate}
        open={templateEditorOpen}
        onOpenChange={setTemplateEditorOpen}
        onSave={handleSaveTemplate}
      />
      
      {/* Maintenance Schedule Dialog */}
      <MaintenanceScheduleDialog
        templates={maintenanceTemplates.filter(t => t.enabled)}
        plantId={plantId}
        open={scheduleDialogOpen}
        onOpenChange={setScheduleDialogOpen}
        onScheduled={handleMaintanenceScheduled}
      />
    </div>
  );
}