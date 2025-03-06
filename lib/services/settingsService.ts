// lib/services/settingsService.ts
import { 
    UnifiedDevice, 
    convertFromLegacyFormat, 
    convertFromSolarFormat 
  } from '@/types/unifiedDeviceTypes';
  
  import { devices } from '@/data/mock/devices';
  import { dummyDevices } from '@/lib/solar/dummyData';
  import { maintenances } from '@/data/mock/maintenance';
  
  // Interfaces for settings
  
  export interface GeneralSettings {
    name: string;
    description: string;
    location: string;
    notificationsEnabled: boolean;
    emailAlerts: boolean;
    smsAlerts: boolean;
    publicDashboard: boolean;
    maintenanceReminders: boolean;
    dataRefreshInterval: string; // minutes
    timezone: string;
    language: string;
  }
  
  export interface MaintenanceTemplate {
    id: string;
    name: string;
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'semi-annual' | 'annual';
    description: string;
    estimatedDuration: number; // minutes
    priority: 'low' | 'medium' | 'high';
    assignedRole: string;
    enabled: boolean;
    nextScheduledDate: string;
  }
  
  export interface UserRole {
    id: string;
    name: string;
    description: string;
    permissions: {
      [key: string]: boolean;
    };
  }
  
  export interface PlantSettings {
    general: GeneralSettings;
    devices: UnifiedDevice[];
    maintenanceTemplates: MaintenanceTemplate[];
    userRoles: UserRole[];
  }
  
  // localStorage key for plant settings
  const PLANT_SETTINGS_KEY = 'solarguardian_plant_settings';
  
  /**
   * Settings Service - Handles plant configuration
   */
  class SettingsService {
    private static instance: SettingsService | null = null;
    
    // In-memory cache of settings
    private plantSettingsCache: Map<number, PlantSettings> = new Map();
    
    private constructor() {
      // Load any saved settings from localStorage (in browser environments)
      this.loadFromStorage();
    }
    
    /**
     * Get the singleton instance of SettingsService
     */
    public static getInstance(): SettingsService {
      if (!SettingsService.instance) {
        SettingsService.instance = new SettingsService();
      }
      return SettingsService.instance;
    }
    
    /**
     * Load settings from localStorage if available
     */
    private loadFromStorage(): void {
      if (typeof window !== 'undefined') {
        try {
          const savedSettings = localStorage.getItem(PLANT_SETTINGS_KEY);
          if (savedSettings) {
            const parsedSettings = JSON.parse(savedSettings);
            
            // Convert plain objects back to Map
            Object.entries(parsedSettings).forEach(([plantId, settings]) => {
              this.plantSettingsCache.set(Number(plantId), settings as PlantSettings);
            });
          }
        } catch (error) {
          console.error('Error loading settings from storage:', error);
        }
      }
    }
    
    /**
     * Save current settings to localStorage
     */
    private saveToStorage(): void {
      if (typeof window !== 'undefined') {
        try {
          // Convert Map to plain object for storage
          const settingsObject = Object.fromEntries(this.plantSettingsCache.entries());
          localStorage.setItem(PLANT_SETTINGS_KEY, JSON.stringify(settingsObject));
        } catch (error) {
          console.error('Error saving settings to storage:', error);
        }
      }
    }
    
    /**
     * Initialize default settings for a plant
     */
    private initializeDefaultSettings(plantId: number): PlantSettings {
      return {
        general: {
          name: '',
          description: '',
          location: '',
          notificationsEnabled: true,
          emailAlerts: true,
          smsAlerts: false,
          publicDashboard: false,
          maintenanceReminders: true,
          dataRefreshInterval: '15', // 15 minutes
          timezone: 'UTC-3',
          language: 'es',
        },
        devices: [],
        maintenanceTemplates: [
          {
            id: 'mt-1',
            name: 'Panel Cleaning',
            frequency: 'monthly',
            description: 'Regular cleaning of solar panels to maintain optimal efficiency',
            estimatedDuration: 240, // 4 hours
            priority: 'medium',
            assignedRole: 'technician',
            enabled: true,
            nextScheduledDate: ''
          },
          {
            id: 'mt-2',
            name: 'Inverter Inspection',
            frequency: 'quarterly',
            description: 'Detailed inspection of all inverters and connection points',
            estimatedDuration: 180, // 3 hours
            priority: 'high',
            assignedRole: 'technician',
            enabled: true,
            nextScheduledDate: ''
          }
        ],
        userRoles: [
          {
            id: 'role-1',
            name: 'Admin',
            description: 'Full access to all system functions',
            permissions: {
              viewDashboard: true,
              configureSettings: true,
              manageUsers: true,
              acknowledgeAlerts: true,
              createReports: true,
              manageMaintenance: true
            }
          },
          {
            id: 'role-2',
            name: 'Technician',
            description: 'Can view data and manage maintenance tasks',
            permissions: {
              viewDashboard: true,
              configureSettings: false,
              manageUsers: false,
              acknowledgeAlerts: true,
              createReports: true,
              manageMaintenance: true
            }
          },
          {
            id: 'role-3',
            name: 'Viewer',
            description: 'Read-only access to dashboards and reports',
            permissions: {
              viewDashboard: true,
              configureSettings: false,
              manageUsers: false,
              acknowledgeAlerts: false,
              createReports: true,
              manageMaintenance: false
            }
          }
        ]
      };
    }
    
    /**
     * Get settings for a specific plant
     */
    public async getPlantSettings(plantId: number): Promise<PlantSettings> {
      // Check if settings exist in cache
      if (!this.plantSettingsCache.has(plantId)) {
        // Initialize default settings if none exist
        this.plantSettingsCache.set(plantId, this.initializeDefaultSettings(plantId));
      }
      
      return this.plantSettingsCache.get(plantId)!;
    }
    
    /**
     * Get general settings for a plant
     */
    public async getGeneralSettings(plantId: number): Promise<GeneralSettings> {
      const settings = await this.getPlantSettings(plantId);
      return settings.general;
    }
    
    /**
     * Save general settings for a plant
     */
    public async saveGeneralSettings(plantId: number, generalSettings: GeneralSettings): Promise<void> {
      // Get current settings
      const settings = await this.getPlantSettings(plantId);
      
      // Update general settings
      settings.general = generalSettings;
      
      // Update cache
      this.plantSettingsCache.set(plantId, settings);
      
      // Save to storage
      this.saveToStorage();
    }
    
    /**
     * Get device settings for a plant
     */
    public async getDeviceSettings(plantId: number): Promise<UnifiedDevice[]> {
      const settings = await this.getPlantSettings(plantId);
      
      // If no devices have been saved yet, load default from mock data
      if (settings.devices.length === 0) {
        // In a real application, we would fetch this from an API or database
        // For now, we'll use the mock devices data
        
        // Merge devices from multiple sources
        let allDevices: UnifiedDevice[] = [];
        
        // Process devices from devices.ts
        const legacyDevices = devices.filter(device => device.plantId === plantId)
          .map(convertFromLegacyFormat);
        
        allDevices = [...allDevices, ...legacyDevices];
        
        // Process devices from dummyDevices
        // Assuming plantId is between 1-5, we map to dummyDevices (which might use device.plantId)
        const mockPlantId = (plantId % 5) + 1; // Maps to a value of 1-5
        
        const solarDevices = dummyDevices
          .filter(device => device.plantId === mockPlantId)
          .map(convertFromSolarFormat);
        
        allDevices = [...allDevices, ...solarDevices];
        
        // Update the settings
        settings.devices = allDevices;
        this.plantSettingsCache.set(plantId, settings);
        this.saveToStorage();
      }
      
      return settings.devices;
    }
    
    /**
     * Save device settings for a plant
     */
    public async saveDeviceSettings(plantId: number, deviceSettings: UnifiedDevice[]): Promise<void> {
      // Get current settings
      const settings = await this.getPlantSettings(plantId);
      
      // Update device settings
      settings.devices = deviceSettings;
      
      // Update cache
      this.plantSettingsCache.set(plantId, settings);
      
      // Save to storage
      this.saveToStorage();
    }
    
    /**
     * Get maintenance templates for a plant
     */
    public async getMaintenanceTemplates(plantId: number): Promise<MaintenanceTemplate[]> {
      const settings = await this.getPlantSettings(plantId);
      return settings.maintenanceTemplates;
    }
    
    /**
     * Save maintenance templates for a plant
     */
    public async saveMaintenanceTemplates(plantId: number, templates: MaintenanceTemplate[]): Promise<void> {
      // Get current settings
      const settings = await this.getPlantSettings(plantId);
      
      // Update maintenance templates
      settings.maintenanceTemplates = templates;
      
      // Update cache
      this.plantSettingsCache.set(plantId, settings);
      
      // Save to storage
      this.saveToStorage();
    }
    
    /**
     * Schedule a maintenance task based on a template
     */
    public async scheduleMaintenanceTask(plantId: number, templateId: string, scheduledDate: string): Promise<void> {
      // Get current templates
      const settings = await this.getPlantSettings(plantId);
      
      // Update the next scheduled date for the template
      settings.maintenanceTemplates = settings.maintenanceTemplates.map(template => {
        if (template.id === templateId) {
          return { ...template, nextScheduledDate: scheduledDate };
        }
        return template;
      });
      
      // Update cache
      this.plantSettingsCache.set(plantId, settings);
      this.saveToStorage();
      
      // In a real implementation, we would also create an actual maintenance task
      // in the maintenance collection/table
    }
    
    /**
     * Get user roles for a plant
     */
    public async getUserRoles(plantId: number): Promise<UserRole[]> {
      const settings = await this.getPlantSettings(plantId);
      return settings.userRoles;
    }
    
    /**
     * Save user roles for a plant
     */
    public async saveUserRoles(plantId: number, roles: UserRole[]): Promise<void> {
      // Get current settings
      const settings = await this.getPlantSettings(plantId);
      
      // Update user roles
      settings.userRoles = roles;
      
      // Update cache
      this.plantSettingsCache.set(plantId, settings);
      
      // Save to storage
      this.saveToStorage();
    }
    
    /**
     * Generate maintenance schedules based on templates
     * This would create actual maintenance tasks in a real system
     */
    public async generateMaintenanceSchedule(plantId: number): Promise<void> {
      // Get enabled templates
      const settings = await this.getPlantSettings(plantId);
      const enabledTemplates = settings.maintenanceTemplates.filter(t => t.enabled);
      
      // For each template, calculate next date based on frequency
      const today = new Date();
      
      for (const template of enabledTemplates) {
        let nextDate = new Date(today);
        
        // Calculate next date based on frequency
        switch (template.frequency) {
          case 'daily':
            nextDate.setDate(nextDate.getDate() + 1);
            break;
          case 'weekly':
            nextDate.setDate(nextDate.getDate() + 7);
            break;
          case 'monthly':
            nextDate.setMonth(nextDate.getMonth() + 1);
            break;
          case 'quarterly':
            nextDate.setMonth(nextDate.getMonth() + 3);
            break;
          case 'semi-annual':
            nextDate.setMonth(nextDate.getMonth() + 6);
            break;
          case 'annual':
            nextDate.setFullYear(nextDate.getFullYear() + 1);
            break;
        }
        
        // Update template next scheduled date
        await this.scheduleMaintenanceTask(
          plantId, 
          template.id, 
          nextDate.toISOString()
        );
        
        // In a real implementation, we would also create a maintenance task
        // in the system based on this template
      }
    }
  }
  
  // Export a singleton instance
  export const settingsService = SettingsService.getInstance();