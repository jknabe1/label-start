import CarouselPlugin from "@/components/landing/indexCarousel"; 
import NewsComp from "@/components/News/NewsComp";
import Marquee from "react-fast-marquee";
import IgFeed from "@/components/socials/igFeed";
import IgCarousel from "@/components/socials/IgCarousel";
import ArtistComp from "@/components/artists/ArtistComp";
import EventComp from "@/components/eventGrid/EventComp";
import About from "@/components/landing/about";


export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="hidden">
        <div className="text-small border-y-2 border-black bg-orange dark:border-white">
          <div className="p-[10px] accordion-body gap-[10px] flex-col large ">
            <span></span> 
            <Marquee>
            <h1 className="text-8xl dark:text-black">  /  K&K RECORDS  / K&K RECORDS  </h1>
            </Marquee>
          </div>
        </div>
      </div>
      <CarouselPlugin />
      <ArtistComp/>
      <NewsComp />
      <About/>
     <IgCarousel />
      <IgFeed />
    </main>
  );
}