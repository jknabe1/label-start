import React from 'react'
import Marquee from 'react-fast-marquee'


const ArtistMarquee = () => {
  return (
    <div>
        <div className="">
        <div className="text-small border-y-2 border-black bg-orange dark:border-white">
          <div className="p-[10px] accordion-body gap-[10px] flex-col large ">
            <span></span> 
            <Marquee>
            <p className="text-8xl dark:text-black">  /  K&K RECORDS  / K&K RECORDS  </p>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistMarquee