"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from './functions/check-is-public-route/index'

// Importar componentes
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  const isPublicPage = checkIsPublicRoute(pathname!);

  console.log(pathname)
  console.log(isPublicPage)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex grow flex-col min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

