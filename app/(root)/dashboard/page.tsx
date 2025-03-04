// app/(root)/dashboard/page.tsx
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getUserPlants } from "@/lib/services/plantService";
import { redirect } from "next/navigation";

export default async function DashboardRedirect() {
  const user = await getLoggedInUser();
  
  if (!user) {
    redirect('/sign-in');
  }
  
  const plants = await getUserPlants(user.clientId || 0);
  
  if (plants.length > 0) {
    // Redirigir a la primera planta
    redirect(`/dashboard/${plants[0].id}`);
  } else {
    // Si no hay plantas, mostrar una página especial
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">No hay plantas disponibles</h1>
        <p>No tienes plantas asignadas. Contacta al administrador para solicitar acceso.</p>
      </div>
    );
  }
}