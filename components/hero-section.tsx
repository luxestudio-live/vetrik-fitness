"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/dark-gym-interior-with-dramatic-lighting-and-worko.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-4 tracking-tight">
          UNLEASH YOUR
          <br />
          <span className="text-gold">INNER POWER</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
          Transform your body and mind at Vetrik Fitness. Where champions are made and limits are broken.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="bg-gold hover:bg-gold-dark text-black font-bold text-lg px-8 py-6"
          >
            Start Your Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#about")}
            className="border-gold text-gold hover:bg-gold hover:text-black font-bold text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  )
}
