import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BigFooter } from "@/components/layout/BigFooter";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romapix Construction | Building Legacies",
  description: "Premium residential and commercial construction services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground`}
      >
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <BigFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
