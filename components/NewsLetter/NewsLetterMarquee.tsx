import Marquee from "react-fast-marquee";
import '@/app/globals.css'

const NewsLetterMarquee = () => {
  return (
    <div className="">
        <div className="text-small border-y-2 border-black bg-orange overflow-hidden dark:border-white text-black text-4xl">
          <div className="p-[12px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden flex-col large ">
            <span></span> 
            <Marquee direction="left">
            <p>Nyhetsbrev</p>
            </Marquee>
          </div>
        </div>
      </div>
  )
}

export default NewsLetterMarquee