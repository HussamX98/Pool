
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationBar } from "./components/navigationBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pool",
  description: "Pool Up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{

  return (
    
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:"rgb(0 0 0)"}}>
        <NextUIProvider>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BackgroundBeamsWithCollision className="min-h-screen">
                {children}
            </BackgroundBeamsWithCollision>
            <NavigationBar/>
          </ThemeProvider>
          </NextUIProvider>
      </body>
    </html>
  );
}
