import { Dumbbell, Instagram, Facebook, Twitter, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-gold" />
            <span className="text-xl font-black text-white tracking-tight">
              VETRICK <span className="text-gold">FITNESS</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-neutral-900 p-3 rounded-full hover:bg-gold transition-colors group"
              >
                <social.icon className="h-5 w-5 text-neutral-400 group-hover:text-black" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Vetrik Fitness. All rights reserved.</p>
          <div className="mt-6 flex flex-col items-center">
            <span className="text-xs text-neutral-400 mb-1">Designed & Crafted with <span className="text-gold">passion</span> by</span>
            <a
              href="https://www.luxestudio.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-bold text-sm tracking-wide hover:bg-gold hover:text-black transition-colors shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              LuxeStudio
            </a>
            <span className="text-[10px] text-neutral-500 mt-1">www.luxestudio.live</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
