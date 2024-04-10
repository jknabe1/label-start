import type { Metadata } from "next";
import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CookieNotice from "@/components/cookieNotice";
import Loading from "@/components/preLoader";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-providers";
import Screensaver from "@/components/screensaver";
import Loglib from "@loglib/tracker/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const ibm = IBM_Plex_Mono ({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "K&K RECORDS",
  description: "",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning >
        <body className={`${ibm.className} bg-white text-black dark:bg-black dark:text-white dark:border-x-white`}>
              
        <Loglib
                config={{
                    id: "kkrecords",
                }}
            />
        <div className="min-h-screen border-x-4 border-black dark:border-white">    
        <ThemeProvider
            attribute="class" 
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Suspense fallback={<Loading/>}>
        <CookieNotice />
        <Header/>
        <Screensaver/>
        {children}
        <Footer/>
        <Analytics />
        <SpeedInsights/>
        </Suspense>
        </ThemeProvider>
        </div>
        </body>
    </html>
  );
}
