"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion, useScroll, useTransform } from "framer-motion"

const links = [
  {
    name: "SERVICES",
    url: "services"
  },
  {
    name: "ABOUT",
    url: "about"
  },
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme, setTheme } = useTheme()

  // Scroll progress for header behavior
  const { scrollY } = useScroll()
  
  // Transform scroll Y to header visibility
  const headerY = useTransform(scrollY, [0, 100], [0, -100])

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not at the top
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-blueish/80 backdrop-blur-md"
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      initial={{ y: 0 }}
    >
      <nav className="flex w-screen items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Digitrust Media</span>
            <Image
              className="h-12 w-auto"
              src="/Logo.png"
              alt=""
              width = {0}
              height = {0}
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              className="rounded-md p-2 bg-primary/10 text-muted-foreground font-bold hover:scale-105 text-sm px-5 transition-all"
            >
            CONTACT US
            </button>
          )}
        </div>
  
      </nav>
    </motion.header>
  )
}
