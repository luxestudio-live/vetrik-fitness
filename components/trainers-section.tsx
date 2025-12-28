import { Instagram, Twitter } from "lucide-react"

const trainers = [
  {
    name: "Rohan Sharma",
    role: "Head Strength Coach",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/muscular-male-fitness-trainer-professional-photo.jpg`,
    bio: "15+ years experience, Gold's Gym India certified",
  },
  {
    name: "Priya Singh",
    role: "Bollywood Dance & HIIT Specialist",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/female-fitness-trainer-professional-photo-athletic.jpg`,
    bio: "National dance champion, ACE certified",
  },
  {
    name: "Arjun Patel",
    role: "Cricket Fitness Coach",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/asian-male-crossfit-trainer-professional-photo.jpg`,
    bio: "Cricket fitness expert, 10 years experience",
  },
  {
    name: "Meera Nair",
    role: "Boxing & Kushti Coach",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/latina-female-boxing-trainer-professional-photo.jpg`,
    bio: "Kushti and boxing background, Indian Wrestling Federation certified",
  },
]

export function TrainersSection() {
  return (
    <section id="trainers" className="py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest text-sm">MEET THE TEAM</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2">
            EXPERT <span className="text-gold">TRAINERS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={trainer.image || `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/placeholder.svg`}
                  alt={trainer.name}
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl">{trainer.name}</h3>
                  <p className="text-gold font-medium">{trainer.role}</p>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="bg-black/50 p-2 rounded-full hover:bg-gold transition-colors">
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  <a href="#" className="bg-black/50 p-2 rounded-full hover:bg-gold transition-colors">
                    <Twitter className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
              <p className="text-neutral-400 text-sm">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
