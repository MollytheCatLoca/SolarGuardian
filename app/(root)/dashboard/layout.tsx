// app/(root)/dashboard/layout.tsx
import { getLoggedInUser } from "@/lib/actions/user.actions";
import SolarSidebar from "@/components/solar/SolarSidebar";
import SolarHeader from "@/components/solar/SolarHeader";
import SolarMobileNav from "@/components/solar/SolarMobileNav";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import "./bankCSS.css";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Verificar autenticación
  const loggedIn = await getLoggedInUser();
  
  if (!loggedIn) redirect('/sign-in');
  
  const clientId = loggedIn.clientId || 0; // 0 para administradores
  
  return (
    <main className="flex h-screen w-full bg-[#0a0b14] text-white">
      {/* Sidebar para pantallas medianas y grandes */}
      <SolarSidebar user={loggedIn} />
      
      {/* Contenido principal */}
      <div className="flex size-full flex-col">
        {/* Header móvil con logo y menú */}
        <div className="root-layout md:hidden">
          <Image src="/BISLogo.svg" width={40} height={40} alt="SolarGuardian" />
          <div>
            <SolarMobileNav user={loggedIn} clientId={clientId} />
          </div>
        </div>
        
        {/* Header para pantallas medianas y grandes */}
        <div className="hidden md:block">
          <SolarHeader clientId={clientId} />
        </div>
        
        {/* Contenido de la página */}
        <div className="flex-1 overflow-auto">
          {children}
          <Analytics />
        </div>
      </div>
    </main>
  );
}