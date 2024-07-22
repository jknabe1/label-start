import CarouselPlugin from "@/components/landing/indexCarousel"; 
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="">
        <div className="text-small border-y-2 border-black bg-orange">
          <div className="p-[10px] accordion-body gap-[10px] flex-col large ">
            <span></span> 
            <Marquee>
            <p className="text-8xl">  /  K&K RECORDS  / K&K RECORDS  </p>
            </Marquee>
          </div>
        </div>
      </div>
      <CarouselPlugin />
    </main>
  );
}