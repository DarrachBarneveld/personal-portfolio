import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darrach | Personal Portfolio",
  description: "Full stack developer with 2 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative min-h-screen bg-gray-50 pt-28 text-gray-950 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem]  sm:w-[68.75rem]" />
        <div className="] absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <ActiveSectionProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
