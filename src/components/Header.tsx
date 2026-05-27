"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const links = [
  {
    name: "SERVICES",
    url: "/services"
  },
  {
    name: "ABOUT",
    url: "/about"
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-[top] duration-500 ease-in-out ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled
            ? "h-14 w-[calc(100%_-_16px)] max-w-[960px] rounded-full border border-black/[0.06] bg-white/65 px-3 pl-4 shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-150 sm:w-[calc(100%_-_32px)] sm:px-4 sm:pl-6"
            : "h-[68px] w-full max-w-7xl border border-transparent bg-transparent px-4 sm:px-8"
        }`}
        aria-label="Global"
      >
        <div className="flex min-w-0 flex-1 items-center">
          <Link href="/" className="flex min-w-0 items-center rounded-md p-1 transition-colors hover:bg-black/[0.04]">
            <span className="sr-only">Digitrust Media</span>
            <Image
              className={`w-auto transition-all duration-300 ${scrolled ? "h-7 sm:h-8" : "h-8 sm:h-11"}`}
              src="/Logo.webp"
              alt="DigiTrust Media logo"
              width = {200}
              height = {200}
            />
          </Link>
        </div>
        <div className="hidden items-center gap-1 rounded-full sm:flex">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="rounded-md px-3.5 py-2 text-sm font-medium leading-5 text-zinc-600 transition-all duration-150 hover:bg-black/[0.04] hover:text-zinc-950"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
          <div className="flex items-center gap-0.5 sm:hidden">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="rounded-md px-2 py-2 text-[11px] font-semibold leading-none text-zinc-600 transition-colors hover:bg-black/[0.04] hover:text-zinc-950"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="#contact-form"
            className="inline-flex h-9 shrink-0 items-center rounded-[7px] bg-zinc-950 px-3 text-[11px] font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 sm:h-10 sm:px-4 sm:text-xs"
          >
            CONTACT
        </Link>
        </div>
      </nav>
    </header>
  )
}
