"use client"

import React, { useEffect } from 'react';
import '@/app/globals.css';

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      cursor?.setAttribute('style', `top: ${y}px; left: ${x}px;`);
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;