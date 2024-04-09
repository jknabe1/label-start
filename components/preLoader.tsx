"use client"

import { gsap } from 'gsap';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [currentCounterValue, setCurrentCounterValue] = useState(0);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const updateCounter = () => {
      if (currentCounterValue === 100) return;
      setCurrentCounterValue(prevValue => {
        let newValue = prevValue + Math.floor(Math.random() * 10) + 1;
        if (newValue > 100) newValue = 100;
        return newValue;
      });

      const delay = Math.floor(Math.random() * 200) + 50;
      timeoutId = setTimeout(updateCounter, delay);
    };

    updateCounter();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentCounterValue]);

  useEffect(() => {
    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    gsap.from(".counter", 1.5, {
      delay: 4,
      y: 700,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div>
      <h1 className="counter">{currentCounterValue}</h1>
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}