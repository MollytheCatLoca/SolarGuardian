// app/(root)/dashboard/[plantId]/tokens/page.tsx
import { redirect } from 'next/navigation';
import TokensPage from '@/components/solar/token/TokensPage';
import { getPlantById } from '@/lib/services/plantService';
import { getLoggedInUser } from '@/lib/actions/user.actions';

// Server component for the tokens route
export default async function SolarTokenRoute({ params }) {
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
  return <TokensPage />;
}