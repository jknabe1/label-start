"use client"

import React, { useEffect } from 'react';
import '@/app/globals.css';

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const cursorRadius = 10; // half the size of the cursor
    
      // Ensure the cursor stays within the viewport
      const safeX = Math.min(Math.max(x, cursorRadius), window.innerWidth - cursorRadius);
      const safeY = Math.min(Math.max(y, cursorRadius), window.innerHeight - cursorRadius);
    
      cursor?.setAttribute('style', `top: ${safeY}px; left: ${safeX}px;`);
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;