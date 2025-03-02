import { getLoggedInUser } from "@/lib/actions/user.actions";
import SolarSidebar from "@/components/solar/SolarSidebar";
import SolarHeader from "@/components/solar/SolarHeader";
import SolarMobileNav from "@/components/solar/SolarMobileNav";
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
            <SolarMobileNav user={loggedIn} />
          </div>
        </div>
        
        {/* Header para pantallas medianas y grandes */}
        <div className="hidden md:block">
          <SolarHeader />
        </div>
        
        {/* Contenido de la página */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </main>
  );
}