import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import LoadingClient from "../components/layout/LoadingClient";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KimmyCode | Frontend Developer",
  description: "Profil & portofolio Muhammad Lukmanulhakim – frontend engineer spesialis ReactJS & Angular.",
  keywords: [
    "frontend engineer",
    "react js developer",
    "angular developer",
    "frontend developer",
    "web developer",
    "freelance programmer",
    "next js",
    "tailwind css",
    "programmer indonesia"
  ],
  openGraph: {
    title: "KimmyCode | Muhammad Lukmanulhakim | Frontend Developer",
    description:
      "Frontend engineer berpengalaman dengan Angular & ReactJS. Siap bantu proyek digital kamu.",
    url: "https://kimmycode.online",
    images: [
      {
        url: "/project-images/closeup-profile.png",
        width: 1200,
        height: 630,
        alt: "KimmyCode Preview Image",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/project-images/kimmy-code.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <LoadingClient />
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased !font-mono`} 
        > 
          <Navbar></Navbar>
          <Toaster position="top-right" reverseOrder={false} />
          {children}
        </body>
      </html>
    </>
  );
}
