'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterComponent() {
   const  headingColor = "text-muted-gold"
 const bulletColor = "text-light-taupe"
  return (
    <footer className="bg-light-taupe text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${headingColor}`}>Serenity Spa</h3>
            <p className="text-sm">Relax, Rejuvenate, Revive</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className={`text-lg font-semibold ${headingColor}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:underline">Our Services</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Book Appointment</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Gift Cards</Link></li>
              <li><Link href="#" className="text-sm hover:underline">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={`text-lg font-semibold ${headingColor}`}>Contact Us</h4>
            <address className="not-italic text-sm">
              123 Tranquility Lane<br />
              Serenity City, SC 12345<br />
              Phone: (555) 123-4567<br />
              Email: info@serenityspa.com
            </address>
          </div>
          <div>
            <h4 className={`text-lg font-semibold ${headingColor}`}>Newsletter</h4>
            <p className="text-sm mb-2">Stay updated with our latest offers and news</p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground text-primary"
              />
              <Button type="submit" variant="secondary" className="w-full bg-muted-gold text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Serenity Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}