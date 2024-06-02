import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
// Supports weights 100-900
import '@fontsource-variable/onest';


export const metadata: Metadata = {
  title: "Shamvita",
  description: " Shamvita es una plataforma de comunicación de talentos en Venezuela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="dark">
      <body className="">
        <video src="/bg-sd-ultra.mp4" autoPlay muted loop className="absolute -z-10 inset-0 w-full h-full object-cover blur-2xl brightness-[0.4]" >
      
        </video>
        
        {children}

        <Toaster />
        <footer className="mt-24 flex flex-col gap-4 self-center justify-center items-center p-4 text-center text-sm text-gray-500">
          <p className="text-center text-sm text-gray-500">
            Hecho con ❤️ por <a href="https://www.instagram.com/maikol_aguilar__/" target="_blank" rel="noopener noreferrer" className="underline">Maikol Aguilar</a>
          </p>
          
        </footer>
        </body>
    </html>
  );
}
