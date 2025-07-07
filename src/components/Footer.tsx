import Link from "next/link"

const footerItems=[
  {
    title : "ABOUT",
    link : "/about"
  },
  {
    title : "SERVICES",
    link : "/services"
  },
  {
    title : "CONTACT",
    link : "/"
  }
]

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-border text-foreground pt-4 max-w-screen overflow-clip">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex justify-center space-x-8" aria-label="Footer">
          {footerItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <p className="mt-3 pb-2 text-center text-xs text-muted-foreground font-haptik">
          © 2024 Digitrust Media
        </p>
      </div>
    </footer>
  )
}
