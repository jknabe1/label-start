import React from 'react'
import Marquee from "react-fast-marquee";

const NewsMarquee = () => {
  return (
    <div>
      <div className="text-small border-y-2 border-black bg-orange dark:border-white dark:text-black">
        <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-hidden gap-[10px] flex-col large ">
          <span></span> 
          <Marquee direction='right'>
          <h1 className='text-3xl dark:text-black'> DET SENASTE / DET SENASTE / DET SENASTE /  </h1>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default NewsMarquee