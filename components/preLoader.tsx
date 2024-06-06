"use client"

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  useEffect(() => {
    window.onload = () => {
      gsap.to('.text-fill', {
        clipPath: 'inset(0 0% 0 0)',
        duration: 2,
        ease: 'power2.out'
      });

      gsap.to('.text-container', {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: 'power1.inOut'
      });
    };
  }, []);

  return (
    <div className="preloader fixed inset-0 flex items-center justify-center">
      <div className="text-container relative text-6xl">
        <h1 className="text-stroke absolute top-0 left-0 text-transparent">Loading...</h1>
        <h1 className="text-fill absolute top-0 left-0 text-white">Loading...</h1>
      </div>
    </div>
  );
}