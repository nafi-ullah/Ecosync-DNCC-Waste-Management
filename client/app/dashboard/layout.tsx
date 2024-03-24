import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoSync",
  description: "EcoSync is a platform for managing waste in DNCC.",  
  icons: {
    icon: "/logo.png",
  }
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {    
  return (

    <html lang="en">
        
      <body className={inter.className}>{children}</body>
        
    </html>
  );
}
