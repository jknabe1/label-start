"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000})
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative z-10" 
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-screen w-screen">
            <div className="h-full w-full relative">
              <Card className="h-full w-full absolute inset-0">
                <CardContent className="flex aspect-square items-center justify-center h-full w-full">
                  <Image src={"https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2023/02/RCA-Home-15-1-1024x593.jpg"} alt={""} width={1920} height={1080} loading="lazy"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}