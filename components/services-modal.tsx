'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { reverse } from 'dns'
type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedService: string;
  setSelectedService: (service: string) => void;
}


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
      image: "/spa2.jpg",
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



function ServicesModal({ isOpen, setIsOpen, selectedService, setSelectedService }: Props) {

    

    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0
    
        for (let i = 0; i < fullStars; i++) {
          stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
        }
        if (hasHalfStar) {
          stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
        }
        return stars
      }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] p-0 max-h-[90vh] overflow-hidden">
      <DialogHeader className="p-4 border-b">
        <DialogTitle>Our Services</DialogTitle>
      </DialogHeader>

      <ScrollArea className="tab-scroll">
      <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
        {/* Service Tabs Slider */}
        <div className="border-b">
          <TabsList className="w-full h-auto p-0 bg-transparent">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView="auto"
              navigation
              className="services-tabs-slider py-2"
            >
              {services.map((service) => (
                <SwiperSlide key={service.title} className="!w-auto">
                  <TabsTrigger 
                    value={service.title} 
                    className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    {service.title}
                  </TabsTrigger>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabsList>
        </div>

        {/* Service Content */}
        <div className="flex-1 overflow-y-auto max-h-[calc(90vh-140px)]">
          {services.map((service) => (
            <TabsContent 
              key={service.title} 
              value={service.title} 
              className="m-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="p-4 space-y-6">
                {/* Image Section */}
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{service.fullDescription}</p>
                  
                  {/* Price and Duration */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold">Duration</p>
                      <p className="text-muted-foreground">{service.duration}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-semibold">Price</p>
                      <p className="text-muted-foreground">₦{service.price}</p>
                    </div>
                  </div>

                  <Button className={`w-full bg-muted-gold hover:bg-dark-muted-gold text-white`}>Book Now</Button>
                </div>

                {/* Reviews Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Reviews</h4>
                  <div className="grid gap-4">
                    {service.reviews.map((review, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="font-semibold text-sm">{review.author}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      </ScrollArea>
    </DialogContent>
  </Dialog>
  )
}

export default ServicesModal