/* eslint-disable @next/next/no-img-element */
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
      <div className="menu-bar border-4 border-black bg-white">
        <div className="menu-logo">
          <img className="mix-blend-difference"
          alt="K&K Records Logo" 
          src="https://www.rcarecords.com/wp-content/themes/rca-v2/static/svg/rca-logo.svg?fb53291584b0de3dbf11c01a58da20de"></img>
        </div>
        <div className="menu-open hover:cursor-pointer" onClick={toggleMenu}>
        <img 
        alt="Menu Logo" 
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NSIgaGVpZ2h0PSIzMyIgdmlld0JveD0iMCAwIDg1IDMzIj4KICA8ZyBpZD0iR3JvdXBfODMiIGRhdGEtbmFtZT0iR3JvdXAgODMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjM3OSAtMC4zOTUpIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMzIxIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAzMjEiIHdpZHRoPSI4NSIgaGVpZ2h0PSIxMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zNzggMC4zOTUpIi8+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzMyMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMzIyIiB3aWR0aD0iODUiIGhlaWdodD0iMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzc4IDIyLjM5NSkiLz4KICA8L2c+Cjwvc3ZnPgo="
         /> 
    
        </div>
      </div>

      <div className="menu-overlay border-4 border-black">
        <div className="menu-overlay-bar">
        <div className="menu-logo">
          <img className="mix-blend-difference" 
          alt="K&K Records Logo"
          src="https://www.rcarecords.com/wp-content/themes/rca-v2/static/svg/rca-logo.svg?fb53291584b0de3dbf11c01a58da20de"></img>
        </div>
          <div className="menu-close">
            <p onClick={toggleMenu}>X</p>
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