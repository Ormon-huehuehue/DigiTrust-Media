"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function RevealOnScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], .reveal"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add("in")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )

    elements.forEach((element) => {
      element.classList.add("reveal")

      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add("in")
        return
      }

      observer.observe(element)
    })

    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight) element.classList.add("in")
      })
    }, 1500)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [pathname])

  return null
}
