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
  title: {
    template: '%s | K&K Records',
    default: 'K&K Records', 
  },
  description: "",

  metadataBase: new URL('https://kkrecords.se'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'K&K Media Group',
    description: "",
    url: 'https://kkrecords.se',
    siteName: 'K&K Media Group',
    images: [
      {
        url: 'https://kkrecords.se/api', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'wwww.kkrecords.se',
    description: "",
    images: ['https://kkrecords.se/api'], // Must be an absolute URL
  },
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
