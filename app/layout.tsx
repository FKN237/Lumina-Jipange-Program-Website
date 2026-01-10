import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lumina Hub Africa | From Talent to Livelihood",
  description:
    "Lumina Jipange Program is a 12-week talent conversion and validation program that prepares unemployed and underemployed youth for employment and entrepreneurship through real-world projects, proof-of-work portfolios, and employer exposure.",
  generator: "v0.app",
  keywords: ["youth employment", "Kenya", "employability", "entrepreneurship", "skills training", "Kibera", "Africa"],
  openGraph: {
    title: "Lumina Hub Africa | From Talent to Livelihood",
    description: "Transform your potential into opportunity with our 12-week employability program.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
