/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MenuIcon } from "lucide-react";

const menuLinks = [
  { path: "/", label: "Start" },
  { path: "/artists", label: "Artister" },
  { path: "/events", label: "Events" },
  { path: "/om-oss", label: "Om oss" },
  { path: "/kontakt", label: "Kontakt" },
];




const Menu: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    const body = document.body;
  };


  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  

  return (
    <div className="menu-container relative z-50" ref={container}> 
  <div className="menu-bar border-4 border-black bg-white dark:border-white dark:bg-black ">
    <div className="menu-logo">
      <a href="/" aria-label="Go to homepage"  title="Homepage">
      <img className="mix-blend-difference"          
      alt="K&K Records Logo" 
      src="https://kulturradet.imagevault.app/publishedmedia/0jk0k9lcfm3pecwkbw1p/kulturradet_logo.png"
      style={{ 
        color: 'white', 
        mixBlendMode: 'difference' 
      }} > 
      </img>
      </a>
    </div>
    <div className="menu-open border-l-4 h-full" onClick={toggleMenu}>    
    <button data-cursor="true">Meny</button>    </div>
  </div>

<div className="menu-overlay w-screen h-screen bg-white dark:bg-black border-4 border-black dark:border-white flex flex-col">
  <div className="menu-overlay-bar flex justify-between items-center border-b-4 border-black dark:border-white mb-8">
    <div className="menu-logo">
      <img className="mix-blend-difference" 
      alt="K&K Records Logo"
      src="https://www.rcarecords.com/wp-content/themes/rca-v2/static/svg/rca-logo.svg?fb53291584b0de3dbf11c01a58da20de"
      style={{ 
        color: 'white', 
        mixBlendMode: 'difference' 
      }} 
      ></img>
    </div>
    <div className="menu-close cursor-pointer">
      <p onClick={toggleMenu} className="text-4xl">X</p>
    </div>
  </div>
  <div className="menu-copy">

  <div className="grid grid-cols-1 gap-4 mb-4">
    {menuLinks.map((link, index) => (
      <div key={index} className="menu-link-item hover:underline">
        <div className="menu-link-item-holder cursor-pointer">
          <Link className="menu-link" href={link.path}>
            {link.label}
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
</div>
  );
};

export default Menu;