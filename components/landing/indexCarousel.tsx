"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "next-sanity/image";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const artist_QUERY = `*[_type == "artist" && defined(slug.current)]{name, image}`;

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000})
  )

  const [artists, setArtists] = React.useState<SanityDocument[]>([]);

  React.useEffect(() => {
    const fetchArtists = async () => {
      const data = await client.fetch<SanityDocument[]>(artist_QUERY);
      setArtists(data);
    };

    fetchArtists();
  }, []);


  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative z-10" 
    >
      <CarouselContent>
      {artists.map((artist, index) => (
          <CarouselItem key={artist._id || index} className="h-screen w-screen">
            <div className="h-full w-full relative ">
              <Card className="h-full w-full absolute inset-0">
                <CardContent className="flex aspect-square items-center justify-center h-full w-full relative">
                  <Image 
                  src={urlFor(artist.image).url()} 
                  alt={artist.name} 
                  sizes="100vw"
                  width={'1'}
                  height={'1'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                  }} 
                  priority 
                  className="absolute" /> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}