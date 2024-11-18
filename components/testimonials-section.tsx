'use client'

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  title: string
  quote: string
  rating: number
  avatar: string
}

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emily Johnson",
      title: "Marketing Director, ABC Corp",
      quote: "The massage therapy I received was life-changing. I felt rejuvenated and pain-free!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Michael Smith",
      title: "CEO, XYZ Corp",
      quote: "The facial treatments are simply the best I've had. My skin has never looked better!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    // Add more testimonials as needed
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-24 bg-soft-pink-beige">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-muted-gold">
            Client Feedback
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Kellsy Spa transformed my wellness experience completely!
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 md:px-8"
                >
                  <div className="bg-background rounded-lg p-6 shadow-lg">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-500"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-muted-gold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}