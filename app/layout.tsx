import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import {ThemeProvider} from "@/components/theme-provider";
import {DockDemo} from "@/components/Dock";
import Head from "next/head";
import {getCurrentUser} from "@/lib/actions/users.actions";
import {redirect} from "next/navigation";

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
    metadataBase: new URL("https://souhaittraveladvisors.com"),
    openGraph: {
        title: "Souhait Travel Advisors - Visa & Job Consultation",
        description: "Apply for jobs and visas abroad with expert consultation. Avoid middlemen and high costs.",
        url: "https://souhaittraveladvisors.com",
        siteName: "Souhait Travel Advisors",
        images: [
            {
                url: "https://cloud.appwrite.io/v1/storage/buckets/678bc03400383f991b20/files/67be44850032778e6add/view?project=678a55860032471b2331",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
    <Head>
        <title>Souhait Travel Advisors - Visa & Job Consultation</title>
        <meta name="description" content="Get expert guidance for visas and job applications in the USA, Canada, and Europe. Save money by avoiding middlemen and secure your future." />
        <meta property="og:title" content="Souhait Travel Advisors - Visa & Job Consultation" />
        <meta property="og:description" content="Apply for jobs and visas abroad with expert consultation. Avoid middlemen and high costs." />
        <meta property="og:url" content="https://souhaittraveladvisors.com" />
        <meta property="og:site_name" content="Souhait Travel Advisors" />

        <meta name="robots" content="index, follow" />
    </Head>
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
