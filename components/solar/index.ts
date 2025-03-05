// Importamos todos los componentes que hemos creado
import SolarDashboard from './SolarDashboard';
import { DashboardHeader } from './DashboardHeader';
import { MetricCards } from './MetricCards';
import { OverviewTab } from './tabs/OverviewTab';
import { GenerationTab } from './tabs/GenerationTab';
import { AlarmsTab } from './tabs/AlarmsTab';
import { MaintenanceTab } from './tabs/MaintenanceTab';

// Reexportamos todos los componentes
export {
  SolarDashboard,
  DashboardHeader,
  MetricCards,
  OverviewTab,
  GenerationTab,
  AlarmsTab,
  MaintenanceTab
};

// También exportamos el componente principal como default
export default SolarDashboard;