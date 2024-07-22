"use client"

import React, { useEffect, useState } from 'react';

const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted=')));
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'j') {
      acceptCookies();
    } else if (event.key === 'n') {
      declineCookies();
    }
  };

  const acceptCookies = () => {
    const date = new Date();
    date.setTime(date.getTime() + (90*24*60*60*1000)); 
    const expires = "; expires=" + date.toUTCString();
    document.cookie = "cookiesAccepted=true" + expires + "; path=/";
    setIsVisible(false);
  };
  
  const declineCookies = () => {
    const date = new Date();
    date.setTime(date.getTime() + (90*24*60*60*1000)); 
    const expires = "; expires=" + date.toUTCString();
    document.cookie = "cookiesDeclined=true" + expires + "; path=/";
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  

  return (
    <div>
    <div className="z-50 fixed w-[32rem] md:w-[32rem] bg-white flex items-center font-mono z-cookie bottom-0 left-0 dark:bg-black" style={{ opacity: 1, transform: "translate(0px, 0px)" }}>
        <div className="absolute w-[32rem] md:w-full bottom-full bg-white font-sans text-center text-14 overflow-hidden -z-10 dark:bg-black" style={{height: "auto"}}>
            <div className="border border-black border-b-0 p-[1rem] text-left leading-[17px] dark:border-white">Vi använder kakor för att göra denna sida bättre.</div>
        </div>
        <div className="border border-black w-full flex h-[2.5rem] dark:border-white">
            <button className="flex flex-1 px-3 items-center">
                <span className="flex items-center font-mono uppercase leading-[1.125] text-[1.2rem] tracking-[0.04em]">
                    <div className="w-[0.8em] h-[0.8em] bg-orange mt-[-0.1em] pointer-events-none transition-colors mr-[8px]"></div>Vi använder bara nödvändiga kakor</span>
            </button>
            <button className="expand-hitbox bg-orange text-black px-[1rem] hover:bg-black hover:text-white border-l border-black dark:border-white">
                <span onClick={acceptCookies} className="font-mono uppercase leading-[1.125] text-[1.2rem] tracking-[0.04em]">Okej</span>
            </button>
        </div>
    </div>
</div>
  );
};

export default CookieNotice;