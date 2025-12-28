import { useState } from "react"

const membershipOptions = [
  {
    name: "Gym Only",
    prices: {
      monthly: 1200,
      quarterly: 3300,
      halfYearly: 6000,
      yearly: 11000,
    },
  },
  {
    name: "Gym + Cardio",
    prices: {
      monthly: 1800,
      quarterly: 5000,
      halfYearly: 9500,
      yearly: 18000,
    },
  },
  {
    name: "Gym + Cardio + CrossFit",
    prices: {
      monthly: 2500,
      quarterly: 7000,
      halfYearly: 13500,
      yearly: 25000,
    },
  },
]

export function MembershipSection() {
  const [selected, setSelected] = useState(0)
  const option = membershipOptions[selected]

  return (
    <section id="membership" className="py-16 md:py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-gold font-bold tracking-widest text-sm">MEMBERSHIP PLANS</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
            FLEXIBLE <span className="text-gold">GYM MEMBERSHIPS</span>
          </h2>
        </div>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {membershipOptions.map((opt, idx) => (
            <button
              key={opt.name}
              className={`px-6 py-2 rounded-full font-bold border transition-colors ${selected === idx ? "bg-gold text-black border-gold" : "bg-neutral-900 text-gold border-neutral-800"}`}
              onClick={() => setSelected(idx)}
            >
              {opt.name}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
            <h3 className="text-gold font-bold text-xl mb-2">Monthly</h3>
            <p className="text-white text-2xl font-black mb-2">₹{option.prices.monthly}</p>
            <span className="text-neutral-400">Per Month</span>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
            <h3 className="text-gold font-bold text-xl mb-2">Quarterly</h3>
            <p className="text-white text-2xl font-black mb-2">₹{option.prices.quarterly}</p>
            <span className="text-neutral-400">Per 3 Months</span>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
            <h3 className="text-gold font-bold text-xl mb-2">Half-Yearly</h3>
            <p className="text-white text-2xl font-black mb-2">₹{option.prices.halfYearly}</p>
            <span className="text-neutral-400">Per 6 Months</span>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
            <h3 className="text-gold font-bold text-xl mb-2">Yearly</h3>
            <p className="text-white text-2xl font-black mb-2">₹{option.prices.yearly}</p>
            <span className="text-neutral-400">Per Year</span>
          </div>
        </div>
      </div>
    </section>
  )
}
