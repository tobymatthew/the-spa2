'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import ServicesModal from './services-modal'
export function IndoorPoolComponent() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])


  
  const services = [
    {
      title: "Swedish Massage",
      description: "Relax and unwind with our classic Swedish massage technique.",
      image: "/bgimage.jpg",
      fullDescription: "Our Swedish massage is a gentle, relaxing treatment that uses long strokes, kneading, and circular movements to ease tension and promote relaxation. Perfect for first-time massage clients.",
      duration: "60 min",
      price: "45,000",
      reverse: false,
      reviews: [
        { author: "Sarah M.", rating: 5, comment: "Absolutely wonderful experience. The therapist was skilled and professional." },
        { author: "John D.", rating: 4.5, comment: "Very relaxing session, helped with my back pain." }
      ]
    },
    {
      title: "Hot Stone Therapy",
      description: "Experience deep relaxation with heated stones.",
      image: "/bgimage.jpg",
      fullDescription: "Hot stone massage therapy melts away tension, eases muscle stiffness, and increases circulation. Each session promotes deeper muscle relaxation through the placement of smooth, water-heated stones at key points on the body.",
      duration: "90 min",
      price: "35,000",
      reverse:true,
      reviews: [
        { author: "Michael R.", rating: 5, comment: "The hot stones were amazing for my sore muscles." },
        { author: "Emma L.", rating: 5, comment: "Best massage I've ever had. So relaxing!" }
      ]
    },
    {
      title: "Aromatherapy",
      description: "Indulge your senses with our custom essential oil blends.",
      image: "/bgimage.jpg",
      fullDescription: "Our aromatherapy massage combines the therapeutic benefits of massage with the healing properties of essential oils. Each session is customized with a unique blend of oils chosen to meet your specific needs.",
      duration: "75 min",
      price: "35,000",
      reverse:false,
      reviews: [
        { author: "Lisa K.", rating: 4.5, comment: "The essential oils were perfectly chosen for relaxation." },
        { author: "David P.", rating: 5, comment: "Wonderful aromatherapy experience, felt renewed after." }
      ]
    },
    {
      title: "Facial Treatment",
      description: "Rejuvenate your skin with our premium facial treatments.",
      image: "/bgimage.jpg",
      fullDescription: "Our luxury facial treatments are designed to rejuvenate and nourish your skin. Using premium products, we customize each facial to address your specific skin concerns and goals.",
      duration: "60 min",
      price: "60,000",
      reverse:true,
      reviews: [
        { author: "Rachel S.", rating: 5, comment: "My skin looks amazing after this facial!" },
        { author: "Tom B.", rating: 4.5, comment: "Very thorough and relaxing facial treatment." }
      ]
    },
    // ... other services
  ]

  const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(services[0].title);

  return (
    <>
      {services.map((service, index) => (
        <section 
         id='services'
          key={index} 
          className={`relative h-screen bg-warm-cream flex  ${
            isMobile ? 'flex-col' : (service.reverse ? 'flex-row-reverse' : 'flex-row')
          }`}
        >
          <div 
            className={`w-full md:w-1/2 h-full flex items-center justify-center ${
              isMobile ? 'h-1/2' : 'h-full'
            }`}
          >
            <div className="p-8 max-w-lg">
              <h2 className="text-4xl font-bold mb-6 text-muted-gold">{service.title}</h2>
              <p className="text-lg text-muted-foreground">{service.description}</p>
              <Button size="lg" className="bg-muted-gold hover:bg-dark-muted-gold mt-9"  onClick={() => {
                      setSelectedService(service.title)
                      setIsOpen(true)
                    }}>Book Now</Button>
            </div>
          </div>
          <div 
            className={`w-full md:w-1/2 h-full bg-cover bg-center ${
              isMobile ? 'h-1/2' : 'h-full'
            }`}
            style={{ backgroundImage: `url(${service.image})` }}
            role="img"
            aria-label={service.title}
          />

          <ServicesModal 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}  
            selectedService={selectedService} 
            setSelectedService={setSelectedService} 
          />
        </section>
      ))}
    </>
  )
}