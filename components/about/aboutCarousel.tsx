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
    Autoplay(
      { delay: 5000}
    )
    
  )

  const [artists, setArtists] = React.useState<SanityDocument[]>([]);
  const [index, setIndex] = React.useState(0);

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
  {artists.map((artist, artistIndex) => (
      <CarouselItem key={artist._id || artistIndex} className="h-screen w-screen">
        <div className="h-full w-full relative  ">
          <Card className="h-full w-full absolute inset-0 ">
            <CardContent className="flex aspect-square items-center justify-center h-full w-full relative bg-orange ">
              <Image 
              src={urlFor(artist.image).url()} 
              alt={artist.name} 
              sizes="80wv"
              width={'1'}
              height={'1'}
              style={{
                width: '50%',
                height: '50%',
                objectFit: 'cover',
              }} 
              priority 
              className="absolute" 
              /> 

              <h1 className="lg:text-8xl md:text-4xl uppercase" style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                color: 'white', 
                mixBlendMode: 'difference' 
              }}>
                {artist.name}
              </h1>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
  )
}