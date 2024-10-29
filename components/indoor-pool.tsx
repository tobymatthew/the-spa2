'use client'

import { useEffect, useState } from 'react'

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
      title: 'INDOOR POOL',
      description: `A serene and atmospheric space, illuminated by a skylight and
              its reflections from water to gold leaf ceiling. Come evening
              time, swim by candlelight, while underwater speakers
              soundtrack your strokes. Remi Tessier's cabanas offer poolside
              privacy.`,
      image: '/spa2.jpg',
      alt: 'Indoor Pool',
      reverse: false,
    },
    {
      title: 'Sun Deck',
      description: 'Enjoy the view from the sun deck, which is a unique feature of the indoor pool.',
      image: '/bgimage.jpg',
      alt: 'Sun Deck',
      reverse: true,
    },
    {
      title: 'Water Features',
      description: 'Enjoy the refreshing water features such as the hot tub, spa, and sauna.',
      image: '/spa2.jpg',
      alt: 'Water Features',
      reverse: false,
    },
    {
      title: 'Outdoor Pool',
      description: 'Enjoy the outdoor pool with its unique features such as the outdoor patio.',
      image: '/bgimage.jpg',
      alt: 'Outdoor Pool',
      reverse: true,
    },
  ]

  return (
    <>
      {services.map((service, index) => (
        <section 
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
            </div>
          </div>
          <div 
            className={`w-full md:w-1/2 h-full bg-cover bg-center ${
              isMobile ? 'h-1/2' : 'h-full'
            }`}
            style={{ backgroundImage: `url(${service.image})` }}
            role="img"
            aria-label={service.alt}
          />
        </section>
      ))}
    </>
  )
}