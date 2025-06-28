import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-border text-foreground pt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex justify-center space-x-8" aria-label="Footer">
          {["ABOUT", "WORK", "SERVICES", "CONTACT", "PRIVACY", "TERMS"].map((item) => (
            <Link
              key={item}
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <p className="mt-3 text-center text-xs text-muted-foreground font-haptik">
          © 2024 Digitrust Media
        </p>
      </div>
    </footer>
  )
}
