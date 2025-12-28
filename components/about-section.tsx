import { Target, Users, Award, Clock } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Goal-Oriented Training",
    description: "Personalized programs designed to help you achieve your specific fitness goals.",
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Join a supportive community of fitness enthusiasts and professional trainers.",
  },
  {
    icon: Award,
    title: "Premium Equipment",
    description: "State-of-the-art facilities with top-tier equipment from leading brands.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule with round-the-clock access to all facilities.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-gold font-bold tracking-widest text-sm">ABOUT US</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6">
              MORE THAN JUST A <span className="text-gold">GYM</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              At Vetrik Fitness, we believe fitness is a journey, not a destination. Founded in 2010, we&apos;ve helped
              thousands of members transform their lives through expert guidance, world-class facilities, and an
              unwavering commitment to excellence.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Our philosophy centers on holistic wellness - combining physical training with nutrition guidance and
              mental conditioning to create the strongest version of you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-gold/50 transition-colors"
              >
                <feature.icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
