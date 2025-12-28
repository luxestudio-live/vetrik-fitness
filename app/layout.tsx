import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vetrik Fitness | Transform Your Body & Mind",
  description:
    "Vetrik Fitness is a premium fitness center offering 24/7 access, expert trainers, strength training, HIIT classes, CrossFit, and personalized programs to help you achieve your fitness goals.",
  keywords: ["gym", "fitness", "workout", "personal training", "strength training", "HIIT", "CrossFit", "Vetrik Fitness"],
  authors: [{ name: "Vetrik Fitness" }],
  openGraph: {
    title: "Vetrik Fitness | Transform Your Body & Mind",
    description: "Premium fitness center with 24/7 access, expert trainers, and world-class facilities.",
    type: "website",
    locale: "en_US",
    siteName: "Vetrik Fitness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vetrik Fitness | Transform Your Body & Mind",
    description: "Premium fitness center with 24/7 access, expert trainers, and world-class facilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
