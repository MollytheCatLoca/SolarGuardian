
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
      
        <div className= "admin-layout" >
        {/* Aquí puedes agregar elementos comunes de la interfaz de administración, como un sidebar o header */ }
        < main > { children } </main>
        </div>
       
  )
}