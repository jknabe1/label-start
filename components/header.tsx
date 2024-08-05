/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import '@/components/styles/menu.css';
import Footer from "./footer";

const menuLinks = [
  { path: "/", label: "Start" },
  { path: "/artists", label: "Artister" },
  {path: "/stod", label: "Stöd & bidrag"},
  { path: "/events", label: "Events" },
  { path: "/nyheter", label: "Nyheter" },
  { path: "/shop", label: "Shop" },
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

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
  <div className="menu-container relative z-50 " ref={container}> 
    <div className="menu-bar z-40 top-0 divide-x w-full  divide-black flex bg-white border-y-2 border-black dark:bg-black dark:border-white dark:divide-white uppercase">
    <div className="menu-logo">
          <Link href="/" aria-label="Gå till startsidan"  title="Start">
          <h1 className="text-3xl">
            K&K RECORDS
          </h1>
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>    
        <p>
          Meny</p>    
        </div>
      </div>

      <div className="menu-overlay bg-white dark:bg-black border-4 border-black dark:border-white text-black dark:text-white">
            <div className="menu-overlay-bar border-b-4 border-black dark:border-white box-border">
              <div className="menu-logo">
                <Link href="/">
                <h1 className="text-3xl">
                  K&K RECORDS
                </h1>
                </Link>
              </div>
              <div className="menu-close cursor-pointer">
                <img
                    alt="Close menu"
                    onClick={toggleMenu}
                    src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath d='M28.77 27.36L17.41 16 28.77 4.64l-1.41-1.41L16 14.59 4.64 3.23 3.23 4.64 14.59 16 3.23 27.36l1.41 1.41L16 17.41l11.36 11.36z' fill='%23000'/%3E%3C/svg%3E"
                  >
                </img>
              </div>
            </div>
            <div className="menu-copy">
            <div className="menu-links text-3xl md:grid md:grid-cols-2 md:gap-4 md:items-center md:justify-center flex flex-col justify-center items-center h-screen">
              {menuLinks.map((link, index) => (
                <div key={index} className="menu-link-item mb-4">
                  <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <Link className="menu-link" href={link.path}>
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
              <div className="menu-info">
                <Footer />
              </div>
            </div>
        </div>
  </div>
  );
};

export default Menu;