"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Shop No. 3, Bhaichand Textile Mill Compound, Lal Bahadur Shastri Marg, near Jainam Hall, Bhandup (W, Sadan wadi, Bhandup West, Mumbai, Maharashtra 400078",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+919930106355",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@Vetrikfitness.com",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Open 24/7 - Always Ready",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest text-sm">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2">
            START YOUR <span className="text-gold">JOURNEY</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-neutral-400">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">Free Trial Available!</h4>
              <p className="text-neutral-400 text-sm">
                Not sure if Vetrik Fitness is right for you? Sign up for a free 3-day trial and experience our facilities
                firsthand.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Enquire Now</h3>

            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-6 text-center">
                <p className="text-green-400 font-medium">
                  Thank you for your enquiry! We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-neutral-300">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-1.5 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-gold focus:ring-gold"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-neutral-300">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="mt-1.5 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-gold focus:ring-gold"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-neutral-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="mt-1.5 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-gold focus:ring-gold"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-neutral-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness goals..."
                    rows={4}
                    className="mt-1.5 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-gold focus:ring-gold resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-black font-bold py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Enquiry
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
