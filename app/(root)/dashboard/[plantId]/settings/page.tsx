// app/(root)/dashboard/[plantId]/settings/page.tsx
import { redirect } from 'next/navigation';
import SettingsPage from '@/components/solar/settings/SettingsPage';
import { getPlantById } from '@/lib/services/plantService';
import { getLoggedInUser } from '@/lib/actions/user.actions';

// Server component for the settings route
export default async function SolarSettingsRoute({ params }) {
  // Verify authentication
  const user = await getLoggedInUser();
  
  if (!user) {
    redirect('/sign-in');
  }
  
  const plantId = parseInt(params.plantId);
  
  // Verify the plant exists
  const plant = await getPlantById(plantId);
  if (!plant) {
    redirect('/dashboard');
  }
  
  // Render the client component
  return <SettingsPage params={{ plantId: params.plantId }} />;
}