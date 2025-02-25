import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import {ThemeProvider} from "@/components/theme-provider";
import {DockDemo} from "@/components/Dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Souhait Travel Advisors - Visa & Job Consultation",
    description: "Get expert guidance for visas and job applications in the USA, Canada, and Europe. Save money by avoiding middlemen and secure your future.",
    metadataBase: new URL("https://souhaittravel.com"),
    openGraph: {
        title: "Souhait Travel Advisors - Visa & Job Consultation",
        description: "Apply for jobs and visas abroad with expert consultation. Avoid middlemen and high costs.",
        url: "https://souhaittravel.com",
        siteName: "Souhait Travel Advisors",
        images: [
            {
                url: "https://souhaittravel.com/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Souhait Travel Advisors",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        site: "@souhaittravel",
        creator: "@souhaittravel",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}

      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <div className="relative flex flex-col h-screen">
            <main className="w-full    flex-grow ">
                {children}
            </main>
            <footer className={"fixed w-full z-1050 flex items-center justify-center py-3"}>
                <DockDemo/>
            </footer>
        </div>
      </ThemeProvider>

      </body>
    </html>
  );
}
