import "./globals.css"
import { Inter } from "next/font/google"
import { Anton } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"
import ContactForm from "@/components/ContactForm"

const inter = Inter({ subsets: ["latin"] })

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton"
})

export const metadata = {
  title: "Digitrust Media"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${anton.variable} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}
          <section id="contact-form" className='flex justify-center py-20'>
            <ContactForm />
          </section>
          </main>
             {/* contact form section */}
        
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}