import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Amit Verma",
    role: "Lost 22kg in 6 months",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/happy-male-gym-member-testimonial-portrait.jpg`,
    text: "Vetrik Fitness transformed my health. The trainers motivated me every step. I feel energetic and confident.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Half Marathon Finisher",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/female-runner-athlete-testimonial-portrait.jpg`,
    text: "The customized training helped me finish my first half marathon. The gym and trainers are excellent.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Business Owner",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/professional-man-gym-member-testimonial-portrait.jpg`,
    text: "As a business owner, I value flexible timings and effective workouts. Vetrik Fitness is the best investment for my health.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest text-sm">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2">
            REAL <span className="text-gold">RESULTS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-gold/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/placeholder.svg`}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
