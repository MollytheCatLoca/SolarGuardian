import Image from "next/image";
import "./cardGlobal.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter bg-white">
      {children}
      <div className="auth-asset">
        <div>
          <Image 
            src="/BISSignIn.jpg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}