import "./globals.css"
import "lenis/dist/lenis.css"
import { Inter } from "next/font/google"
import { Anton } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"
import type { Metadata } from "next"
import RevealOnScroll from "./reveal-on-scroll"
import SmoothScroll from "./smooth-scroll"
// import ContactForm from "@/components/ContactForm"
import BookMeeting from "@/components/BookMeeting"
import { Analytics } from "@vercel/analytics/next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://digitrustmedia.com"

const inter = Inter({ subsets: ["latin"] })

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton"
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DigiTrust Media | Influencer Marketing Agency in Delhi",
    template: "%s | DigiTrust Media",
  },
  description:
    "DigiTrust Media is a Delhi-based influencer marketing agency helping brands grow through creator campaigns, celebrity partnerships, brand activations, and measurable digital strategy.",
  applicationName: "DigiTrust Media",
  keywords: [
    "influencer marketing agency in Delhi",
    "creator marketing agency India",
    "celebrity influencer partnerships",
    "influencer campaign management",
    "brand activation agency",
    "social media influencer marketing agency",
  ],
  authors: [{ name: "DigiTrust Media" }],
  creator: "DigiTrust Media",
  publisher: "DigiTrust Media",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "DigiTrust Media",
    title: "DigiTrust Media | Influencer Marketing Agency in Delhi",
    description:
      "Delhi-based influencer marketing agency for creator campaigns, celebrity partnerships, brand activations, and measurable digital growth.",
    images: [
      {
        url: "/Banner.webp",
        width: 1200,
        height: 630,
        alt: "DigiTrust Media influencer marketing campaign showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiTrust Media | Influencer Marketing Agency in Delhi",
    description:
      "Creator campaigns, celebrity partnerships, brand activations, and digital strategy for growth-focused brands.",
    images: ["/Banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DigiTrust Media",
  url: siteUrl,
  logo: `${siteUrl}/Logo.webp`,
  image: `${siteUrl}/Banner.webp`,
  description:
    "DigiTrust Media is a Delhi-based influencer marketing agency helping brands grow through creator-led campaigns, celebrity partnerships, and brand experiences.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  areaServed: ["Delhi", "India"],
  serviceType: [
    "Influencer marketing",
    "Creator campaign management",
    "Celebrity and influencer partnerships",
    "Brand activations",
    "Events and experiences",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${anton.variable} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <SmoothScroll>
            <RevealOnScroll />
            <Header />
            <main>{children}
            <Analytics/>
            <section id="contact-form" data-reveal
              className='flex bg-gradient-to-br from-background via-white/70 to-background rounded-3xl shadow-lg mx-2 md:mx-[4rem] lg:mx-[10rem] my-20 justify-center py-10'>
              <BookMeeting/>
            </section>
            </main>
             {/* contact form section */}
        
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
