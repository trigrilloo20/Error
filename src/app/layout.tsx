import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Power by Satun Nodes",
  description: "Modern Next.js scaffold optimized for AI-powered development with Z.ai. Built with TypeScript, Tailwind CSS, and shadcn/ui.",
  keywords: ["Z.ai", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI development", "React"],
  authors: [{ name: "Z.ai Team" }],
  icons: {
    icon: "https://cdn.discordapp.com/attachments/1522976382496280576/1523680894769041538/Screenshot_20260706_072241_Chrome2.jpg?ex=6a4cfde9&is=6a4bac69&hm=5d1731c0665f8582763f0eb102a5e36a763a39e2d5f6a5c07317047b827c1292&",
  },
  openGraph: {
    title: "Power by Saturn nodes",
    description: "AI-powered development with modern React stack",
    url: "https://cdn.discordapp.com/attachments/1522976382496280576/1523680894769041538/Screenshot_20260706_072241_Chrome2.jpg?ex=6a4cfde9&is=6a4bac69&hm=5d1731c0665f8582763f0eb102a5e36a763a39e2d5f6a5c07317047b827c1292&",
    siteName: "Saturn Nodes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Z.ai Code Scaffold",
    description: "AI-powered development with modern React stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
