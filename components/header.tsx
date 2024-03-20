"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
      <div className="menu-bar border-y-4 border-black bg-white">
        <div className="menu-logo">
          <Link href="/">K&K RECORDS</Link>
        </div>
        <div className="menu-open hover:cursor-pointer" onClick={toggleMenu}>
        <svg width="55" height="55" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>        
        </div>
      </div>

      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">Codegrid</Link>
          </div>
          <div className="menu-close">
            <p onClick={toggleMenu}>Close</p>
          </div>
        </div>

        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item hover:underline">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link className="menu-link" href={link.path}>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">X &#8599;</a>
              <a href="#">Instagram &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>info@codegrid.com</p>
              <p>0923 3984 23</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>View ShowReel</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;