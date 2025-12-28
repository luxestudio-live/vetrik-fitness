import { Flame, Heart, Zap, Dumbbell, Users, Timer } from "lucide-react"
import { MembershipSection } from "./membership-section"

const services = [
  {
    icon: Dumbbell,
    title: "Kalaripayattu Training",
    description: "Learn the ancient Indian martial art to build strength and agility.",
    price: "₹2,500/mo",
  },
  {
    icon: Flame,
    title: "Bollywood Dance Fitness",
    description: "Fun, energetic dance workouts inspired by Bollywood music and moves.",
    price: "₹1,800/mo",
  },
  {
    icon: Heart,
    title: "Yoga & Meditation",
    description: "Traditional yoga and meditation sessions for holistic wellness.",
    price: "₹1,200/mo",
  },
  {
    icon: Zap,
    title: "Cricket Fitness",
    description: "Specialized fitness routines for aspiring cricketers and sports enthusiasts.",
    price: "₹2,000/mo",
  },
  {
    icon: Users,
    title: "Personal Training with Rohan",
    description: "One-on-one sessions with Rohan, a certified Indian fitness trainer.",
    price: "₹700/session",
  },
  {
    icon: Timer,
    title: "Boxing & Kushti",
    description: "Train in boxing and traditional Indian wrestling (Kushti) for full-body fitness.",
    price: "₹1,500/mo",
  },
]

export function ServicesSection() {
  return (
    <>
      <section id="services" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest text-sm">OUR PROGRAMS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2">
              SERVICES THAT <span className="text-gold">DELIVER</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-gold transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gold/10 p-3 rounded-lg group-hover:bg-gold/20 transition-colors">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <span className="text-gold font-bold text-lg">{service.price}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MembershipSection />
    </>
  )
}
