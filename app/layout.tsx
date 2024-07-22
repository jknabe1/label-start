import type { Metadata } from "next";
import { IBM_Plex_Mono} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import CookieNotice from "@/components/cookieNotice";
import Loading from "@/components/preLoader";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-providers";
import Screensaver from "@/components/screensaver";
import Loglib from "@loglib/tracker/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import NewsLetterComp from "@/components/NewsLetter/NewsLetterComp";


const ibm = IBM_Plex_Mono ({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "K&K RECORDS",
  description: "",
  metadataBase: new URL('https://kkrecords.se', 'http://localhost:3000'),
  openGraph: {
    title: 'K&K RECORDS',
    description: '',
    url: 'https://kkrecords.se',
    siteName: 'K&K RECORDS',
    images: [
      {
        url: 'https://kkrecords.se/og.png', 
        width: 800,
        height: 600,
      },
      {
        url: 'https://kkrecords.se/og-alt.png', 
        width: 1800,
        height: 1600,
        alt: 'K&K RECORDS OG IMAGE',
      },
    ],
    locale: 'se_SV',
    type: 'website',
  },

  robots: {
    follow: true,
    index: true
  },
    twitter: {
      card: 'summary_large_image',
      title: 'K&K RECORDS',
      description: '',
      siteId: '',
      creator: '@kkrec',
      creatorId: '',
      images: ['https://kkrecords.se/og.png'], 
    },
}



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
            <div className="min-h-screen border-x-2 border-black dark:border-white border-solid  mr-auto ml-auto">    
              <ThemeProvider
                attribute="class" 
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Suspense fallback={<Loading/>}>
                    <CookieNotice />
                        <Screensaver/>
                          {children}
                        <NewsLetterComp />
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
