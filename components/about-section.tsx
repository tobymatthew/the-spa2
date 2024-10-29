'use client'

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export function AboutSectionComponent() {

 const  headingColor = "text-muted-gold"
 const bulletColor = "text-light-taupe"

  return (
    <section className="bg-soft-pink-beige py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" /> SHARE
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className={`${headingColor} text-2xl font-bold mb-4`}>SPA & FITNESS</h2>
            <p className={`mb-4 text-muted-foreground`}>
              Guests of Serenity Spa enjoy an invitation to temporary Membership of our facilities for the duration of their stay.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className={`${headingColor}`}>•</span> Sense-stirring saunas, aromatic steam rooms and snow shower</li>
              <li><span className={`${headingColor}`}>•</span> A 22m modern lap pool</li>
              <li><span className={`${headingColor}`}>•</span> Comprehensive treatment rooms</li>
              <li><span className={`${headingColor}`}>•</span> Dedicated fitness studio from sculpting pioneer Tracy Anderson</li>
              <li><span className={`${headingColor}`}>•</span> A cardio and functional gym with state-of-the-art equipment</li>
              <li><span className={`${headingColor}`}>•</span> Multi-functional studio offering a variety of classes</li>
              <li><span className={`${headingColor}`}>•</span> Serenity Café with a menu curated by nutritionist Rose Ferguson</li>
            </ul>
          </div>
          <div>
            <div className="mb-8">
              <h3 className={` ${headingColor} text-xl font-semibold mb-2 `}>OPENING HOURS</h3>
              <p className="text-muted-foreground mb-2">9am - 8pm</p>
              <p className="text-sm text-muted-foreground">
                Please arrive at least 15 minutes before your treatment is due to start. 
                This will give you plenty of time to change and relax.
              </p>
            </div>
            <div>
              <h3 className={` ${headingColor} text-xl font-semibold mb-2 `}>CONTACT US</h3>
              <p className="text-muted-foreground mb-1">Call: +44 (0)20 7862 5387</p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:reservations@serenityspa.com" className="underline">reservations@serenityspa.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}