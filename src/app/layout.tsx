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
      <body >{children}
        <Toaster />
        </body>
    </html>
  );
}
