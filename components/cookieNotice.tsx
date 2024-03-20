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
    date.setTime(date.getTime() + (90*24*60*60*1000)); // 90 days
    const expires = "; expires=" + date.toUTCString();
    document.cookie = "cookiesAccepted=true" + expires + "; path=/";
    setIsVisible(false);
  };
  
  const declineCookies = () => {
    const date = new Date();
    date.setTime(date.getTime() + (90*24*60*60*1000)); // 90 days
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
    <div className="fixed bottom-0 right-0   z-50">
      <div className="bg-white border-4 border-black   p-6 shadow-md">
        <h2 className="text-lg font-bold mb-4">Din data...</h2>
        <p className="mb-4"> Vi använder kakor för att optimera våra sidor. <br/> Självklart frågar vi om samtycke innan...  Är det lugnt? <br/>Du kan läsa mer här: <a className="underline" href='/data'>Om din data</a></p>
        <div>
          <button onClick={acceptCookies} className="mr-2 px-4 py-2 bg-white border-4 border-black text-black hover:bg-black hover:text-white">(J)a</button>
          <button onClick={declineCookies} className="px-4 py-2 bg-white border-4 border-black text-black hover:bg-black hover:text-white">(N)ope</button>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;