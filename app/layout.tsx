import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/motion-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | HEPHEX",
    default: "HEPHEX | Premium Custom Software & AI Consulting",
  },
  description: "Bespoke tools and prototypes for mid-market companies. Software that adapts to you.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "HEPHEX | Premium Custom Software & AI Consulting",
    description: "Bespoke tools and prototypes for mid-market companies. Software that adapts to you.",
    url: "https://hephex.com",
    siteName: "HEPHEX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-obsidian text-white min-h-screen flex flex-col bg-mesh">
        <MotionProvider>
          <Header />
          <main className="flex-grow flex flex-col pt-20">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
