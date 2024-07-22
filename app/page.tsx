import CarouselPlugin from "@/components/landing/indexCarousel"; 
import NewsLetterComp from "@/components/NewsLetter/NewsLetterComp";

export default function Home() {
  return (
    <main style={{ overflowY: 'hidden' }}>
      <CarouselPlugin />
      <NewsLetterComp/>
    </main>
  );
}