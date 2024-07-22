"use client"

import React, { useEffect, useState } from 'react'
import AccessibilityMenu from './accessibility';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="divide-x  divide-black flex bg-white border-y-2 border-black dark:bg-black dark:border-white dark:divide-white uppercase">
      <a href="/" className="p-[10px] w-1/2 flex bg-white dark:bg-black">
      <div className="my-auto divide-y divide">
        <span className='bold uppercase'>K&K RECORDS</span>
      </div>
      </a>
      <div className="w-1/6 md:flex">
      <span className='flex p-[10px]'>Örebro - {currentTime.toLocaleTimeString('sv-SE', { timeZone: 'Europe/Stockholm', timeStyle: 'short' })}</span>
        </div>
        <div className="md:hidden w-[10%] ">
          <button className="w-full bg-white h-full ">
            <div className="p-[10px] w-full h-full flex items-center justify-center gap-[5px] ">
              <span className="uppercase ">en</span> <span className="">v</span>
            </div>
          </button>
          </div>
              <button className="md:w-1/6 w-1/5 bg-white hover:bg-black hover:text-white dark:bg-black dark:hover:!bg-white dark:hover:text-black dark:hover:divide-black  ">
              <p className="uppercase ">Meny</p>
              </button>
              <button className="md:w-1/6 w-1/5 hover:!bg-black hover:text-white hover:divide-white dark:hover:!bg-white dark:hover:text-black dark:hover:divide-black ">
              <a href="https://www.tickster.com/se/sv/events/by/r5f11v6v5y148pl/kf-stationen" id="cart" className=" ">
                <span className='uppercase'>Boka artist</span>
              </a>
              </button>
            </div>
  )
}

export default Footer