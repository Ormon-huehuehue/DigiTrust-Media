import "./globals.css"
import { Inter } from "next/font/google"
import { Anton } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"
// import ContactForm from "@/components/ContactForm"
import BookMeeting from "@/components/BookMeeting"

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
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}
          <section id="contact-form" 
            className='flex bg-gradient-to-br from-background via-white/70 to-background rounded-3xl shadow-lg mx-2 md:mx-[4rem] lg:mx-[10rem] my-20 justify-center py-10'>
            <BookMeeting/>
          </section>
          </main>
             {/* contact form section */}
        
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}