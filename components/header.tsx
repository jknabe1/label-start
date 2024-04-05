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
      <img className=""          
      alt="K&K Records Logo" 
      src="data:image/svg+xml;charset=utf-8,%3Csvg width='228' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)' fill='%23000'%3E%3Cpath d='M6.937.188c3.405 0 5.82 2.148 6.064 5.4h-2.616C10.161 3.73 8.87 2.647 6.904 2.647c-2.564 0-4.228 2.135-4.228 5.438s1.651 5.36 4.247 5.36c2.19 0 3.39-1.237 3.518-3.6l2.564.037c.047.82-.075 1.64-.36 2.405a5.76 5.76 0 01-1.292 2.035c-1.047 1.066-2.527 1.627-4.456 1.664C2.807 15.98 0 12.768 0 8.086 0 3.401 2.844.166 6.937.187zM25.042 13.444c2.788 0 4.509-2.049 4.509-5.359S27.81 2.62 25.042 2.62c-2.768 0-4.473 2.09-4.473 5.465 0 3.31 1.722 5.36 4.473 5.36zm0-13.277c4.294 0 7.224 3.231 7.224 7.915 0 4.683-2.973 7.914-7.224 7.914s-7.151-3.228-7.151-7.911S20.774.167 25.042.167zM37.617.479v15.21h9.844v-2.613h-7.205V.48h-2.639zM58.37 13.444c2.789 0 4.51-2.049 4.51-5.359S61.139 2.62 58.37 2.62c-2.767 0-4.472 2.09-4.472 5.465 0 3.31 1.721 5.36 4.473 5.36zm0-13.277c4.295 0 7.225 3.231 7.225 7.915 0 4.683-2.973 7.914-7.224 7.914s-7.148-3.231-7.148-7.914c0-4.684 2.883-7.915 7.148-7.915zM77.179 7.29c1.652 0 2.487-.735 2.487-2.149 0-1.547-.71-2.206-2.394-2.206h-3.684V7.29h3.594-.003zM70.949.479H77.8c2.712 0 4.565 1.78 4.565 4.372a4.813 4.813 0 01-.67 2.547 4.593 4.593 0 01-1.893 1.77l3.2 6.521H80.16l-2.92-6.056h-3.634v6.056h-2.643V.48h-.013zM89.826 10.272c.093 2.186 1.368 3.31 3.8 3.31 1.832 0 2.863-.793 2.863-2.187 0-1.584-1.321-1.974-3.762-2.534-2.508-.543-4.886-1.366-4.886-4.393 0-2.593 2.042-4.256 5.166-4.256 3.426 0 5.54 1.858 5.708 5.052h-2.563c-.132-1.78-1.235-2.733-3.125-2.733-1.684 0-2.642.683-2.642 1.859 0 1.298 1.179 1.663 3.276 2.11 2.696.56 5.484 1.336 5.484 4.837 0 2.825-2.21 4.663-5.576 4.663-3.799 0-6.306-2.265-6.362-5.708h2.62v-.02zM123.282 10.272c.092 2.186 1.367 3.31 3.798 3.31 1.833 0 2.864-.793 2.864-2.187 0-1.584-1.321-1.974-3.762-2.534-2.507-.543-4.886-1.366-4.886-4.393 0-2.593 2.042-4.256 5.167-4.256 3.425 0 5.539 1.858 5.707 5.052h-2.563c-.132-1.78-1.235-2.733-3.125-2.733-1.684 0-2.642.683-2.642 1.859 0 1.298 1.179 1.663 3.277 2.11 2.695.56 5.483 1.336 5.483 4.837 0 2.825-2.21 4.663-5.576 4.663-3.799 0-6.306-2.265-6.362-5.708h2.62v-.02zM136.383.479v2.497h4.846v12.713h2.659V2.976h4.865V.479h-12.37zM153.562.479h2.643v9.947c0 2.05 1.011 2.982 3.277 2.982s3.257-.95 3.257-2.982V.479h2.642v10.11c0 3.369-2.17 5.302-5.945 5.302-3.776 0-5.874-1.865-5.874-5.302V.48zM176.695 13.155c2.731 0 4.099-1.664 4.099-5.011 0-3.484-1.321-5.186-3.987-5.186h-3.105v10.197h2.993zM171.043.479h5.857c4.135 0 6.606 2.862 6.606 7.665 0 4.72-2.527 7.549-6.739 7.549h-5.724V.479zM191.536.479h-2.64v15.21h2.64V.48zM204.091 13.444c2.788 0 4.509-2.049 4.509-5.359s-1.74-5.465-4.509-5.465c-2.768 0-4.472 2.09-4.472 5.465 0 3.31 1.721 5.36 4.472 5.36zm0-13.277c4.295 0 7.225 3.231 7.225 7.915 0 4.683-2.973 7.914-7.225 7.914-4.251 0-7.148-3.231-7.148-7.914 0-4.684 2.884-7.915 7.148-7.915zM218.371 10.272c.093 2.186 1.368 3.31 3.799 3.31 1.833 0 2.864-.793 2.864-2.187 0-1.584-1.321-1.974-3.762-2.534-2.508-.543-4.886-1.366-4.886-4.393 0-2.593 2.042-4.256 5.166-4.256 3.426-.003 5.54 1.838 5.708 5.045h-2.563c-.132-1.78-1.235-2.733-3.125-2.733-1.684 0-2.642.684-2.642 1.859 0 1.298 1.179 1.663 3.276 2.11 2.696.56 5.484 1.336 5.484 4.838 0 2.825-2.21 4.662-5.576 4.662-3.799 0-6.306-2.264-6.362-5.708h2.619v-.013zM110.164 3.088l-2.547-.694-.32 1.274 2.547.69-.694 2.74 1.278.348.697-2.743 2.547.694.32-1.27-2.546-.694.69-2.726-1.278-.349-.694 2.73z'/%3E%3Cpath d='M111.064.72l.726.199-.69 2.733 2.547.683-.179.683-2.546-.683-.694 2.732-.727-.198.694-2.732-2.547-.684.179-.7 2.546.683.691-2.715zm-.407-.72l-.693 2.733-2.547-.683-.466 1.84 2.547.684-.697 2.733 1.833.495.694-2.733 2.547.683.469-1.84-2.547-.684.69-2.733-1.83-.495z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h227.692v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
      > 
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
    <img
        onClick={toggleMenu}
        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath d='M28.77 27.36L17.41 16 28.77 4.64l-1.41-1.41L16 14.59 4.64 3.23 3.23 4.64 14.59 16 3.23 27.36l1.41 1.41L16 17.41l11.36 11.36z' fill='%23000'/%3E%3C/svg%3E"
      ></img>
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