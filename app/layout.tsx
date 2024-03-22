import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CookieNotice from "@/components/cookieNotice";
import Loading from "@/components/preLoader";
import { Suspense } from "react";
import Cursor from "@/components/cursor";

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
    <html lang="sv"  >
      <body className={ibm.className}>
      <Suspense fallback={<Loading/>}>
        <CookieNotice />
        <Header/>
        {children}
        <Cursor />
        <Footer/>
        </Suspense>
        </body>
    </html>
  );
}
