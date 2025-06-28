import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-border text-foreground">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {["About", "Work", "Services", "Contact", "Privacy", "Terms"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-muted hover:text-white"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-muted font-haptik">
        Copyright Digitrust Media
        </p>
      </div>
    </footer>
  )
}
