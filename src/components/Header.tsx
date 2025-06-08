"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className=" flex w-screen items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Digitrust Media</span>
            <Image
              className="h-10 w-auto"
              src="/Logo.png"
              alt="Flowers & Saints Logo"
              width = {0}
              height = {0}
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
