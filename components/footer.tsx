"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

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
    <div>
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-4 border-black shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-black dark:border-white">
      <div className="flex justify-between items-center w-full">
      <span className='flex items-center'>Örebro - {currentTime.toLocaleTimeString('sv-SE', { timeZone: 'Europe/Stockholm' })}</span>
        <li className="flex items-center">
          <ul><Link href={'//shop.kkrecords.se'}>Merch</Link></ul>
        </li>
      </div>
    </footer>
  </div>
  )
}

export default Footer