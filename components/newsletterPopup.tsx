"use client"

import React, { useEffect, useState } from 'react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted='));
    const cookiesDeclined = document.cookie.split('; ').find(row => row.startsWith('cookiesDeclined='));
    if (cookiesAccepted || cookiesDeclined) {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bottom-0 right-0">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Subscribe to our newsletter</h2>
        <form className="flex">
          <input type="email" placeholder="Your email" required className="mr-2 flex-grow rounded p-2 border" />
          <button type="submit" className="bg-blue-500 text-white rounded p-2">Subscribe</button>
        </form>
        <button onClick={closePopup} className="absolute top-0 right-0 m-2">X</button>
      </div>
    </div>
  );
};

export default NewsletterPopup;