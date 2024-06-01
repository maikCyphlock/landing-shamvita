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
      <body >
        <video src="/bg-sd.mp4" autoPlay muted loop className="absolute inset-0 w-full h-full object-cover blur-2xl brightness-[0.4]" >
      
        </video>
        
        {children}

        <Toaster />
        </body>
    </html>
  );
}
