'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]
   const  headingColor = "text-muted-gold"
 const bulletColor = "text-light-taupe"

  return (
    <header className="relative">
      {/* Top banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm">
        <p>Special offer: Book a treatment package and get 20% off - <Link href="#" className="underline">Learn more</Link></p>
      </div>

      {/* Navigation */}
      <nav className={`bg-background shadow-md bg-soft-pink-beige font-bold ${headingColor}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open main menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link key={item.name} href={item.href} className="text-lg font-medium">
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  className="h-8 w-auto"
                  src="/bg.jpg"
                  alt="Serenity Spa"
                  width={120}
                  height={32}
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-base text-muted-gold hover:text-foreground">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <Button className='bg-muted-gold'>Book Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <Image
          src="/bgimage.jpg"
          alt="Spa atmosphere"
          layout="fill"
          objectFit="cover"
          
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${headingColor}`}>Welcome to Serenity Spa</h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-8">Experience tranquility and rejuvenation in our luxurious wellness sanctuary</p>
          <Button size="lg" className="bg-muted-gold">Explore Our Services</Button>
        </div>
      </div>
    </header>
  )
}