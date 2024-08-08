/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import '@/components/styles/menu.css';
import Image from "next/image";

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
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);


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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


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
    <div ref={container} className={`menu-container relative z-50 ${isVisible ? 'visible' : 'hidden'}`}>
    <div className="menu-bar bg-white dark:bg-black text-black dark:text-white box-border overflow-y-auto ">        
        <div className="menu-logo ">
          <Link href="/">
              <p className="lg:text-3xl md:text-3xl sm:text-2xl text-black dark:text-white">K&K Media Group</p>
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>    
        <button data-cursor="true">
              <p className="lg:text-3xl md:text-3xl sm:text-2xl text-black dark:text-white">Meny</p>
          </button>    
        </div>
      </div>
      <div className="menu-overlay bg-white text-black dark:text-white">
            <div className="menu-overlay-bar border-b-2 border-black">
              <div className="menu-logo">
              <Link href="/">
                <p className="lg:text-3xl md:text-3xl sm:text-2xl text-black dark:text-white">K&K Media Group</p>
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
            <div className="grid md:grid-cols-3 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
        <>
        <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <Image src="" style={{ objectPosition: "center" }} alt="" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[60vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-3 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                      ARTISTER
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px] uppercase">
                  <span className="text-[#7f7f7f]">
                    <span className='uppercase'>
                    <Link href="">ARTISTER</Link>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <Image src="" style={{ objectPosition: "center" }} alt="" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px] uppercase">
                  <span className="text-[#7f7f7f]">
                    <span className='uppercase'>
                    <Link href="">Läs mer</Link>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <Image src="" style={{ objectPosition: "center" }} alt="" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px] uppercase">
                  <span className="text-[#7f7f7f]">
                    <span className='uppercase'>
                    <Link href="">Läs mer</Link>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <Image src="" style={{ objectPosition: "center" }} alt="" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px] uppercase">
                  <span className="text-[#7f7f7f]">
                    <span className='uppercase'>
                    <Link href="">Läs mer</Link>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <Image src="" style={{ objectPosition: "center" }} alt="" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px] uppercase">
                  <span className="text-[#7f7f7f]">
                    <span className='uppercase'>
                    <Link href="">Läs mer</Link>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <Image src="" style={{ objectPosition: "center" }} alt="" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[60vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px] uppercase">
                  <span className="text-[#7f7f7f]">
                    <span className='uppercase'>
                    <Link href="">Läs mer</Link>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>
                               
      </div>
            </div>
        </div>
  </div>
  );
};

export default Menu;