"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="dark:bg-black flex flex-col min-h-screen">
        <Providers>
          <Header sticky={false} />
          
          {/* Main content area grows to fill space */}
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
