import React, { useState, useEffect } from 'react';
import { CommandInput, CommandEmpty, CommandShortcut, CommandItem, CommandGroup, CommandList, Command } from "@/components/ui/accessibility/accessibility-command"
import { JSX, SVGProps } from "react"
import { ModeToggle } from './ui/theme-button';
import { Accessibility } from 'lucide-react';

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeOnEscape = (event: { key: string; }) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);
  

  return (
    <div className="relative">
      <button className="fixed bottom-0 right-0 h-16 w-8" type="button" aria-label="Accessbility Button" onClick={toggleOpen}>
        <Accessibility/>
      </button>
      {isOpen && (
        <div className="fixed bottom-0 right-0 bg-white border-4 border-black dark:bg-black dark:border-white">
          <button className="absolute top-0 right-0 p-2" onClick={toggleOpen}>
            <p>Stäng</p>
          </button>
           <Command>
        <CommandInput aria-label="Sök efter kommando" placeholder="Sök..." />
        <CommandList aria-label="Command list">
          <CommandEmpty>Inget resultat. <br/> Vänligen testa igen.</CommandEmpty>
          <CommandGroup aria-label="Accessibility Helper" heading="Kommando">
            <CommandItem>
              <MicroscopeIcon className="mr-2 h-4 w-4" />
              <span>Zooma In</span>
              <CommandShortcut>Ctrl +</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <MinusIcon className="mr-2 h-4 w-4" />
              <span>Zooma Ut</span>
              <CommandShortcut>Ctrl -</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <RefreshCwIcon className="mr-2 h-4 w-4" />
              <span>Ladda Om</span>
              <CommandShortcut>Ctrl R</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CopyIcon className="mr-2 h-4 w-4" />
              <span>Kopiera</span>
              <CommandShortcut>Ctrl C</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandGroup aria-label="Växla tema" heading="Växla tema">
            <CommandItem>
              <MoonIcon className="mr-2 h-4 w-4" />
              <ModeToggle />
              <CommandShortcut>Shift D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    )
  }
  
  function MicroscopeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    )
  }
  
  
  function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
      </svg>
    )
  }
  
  
  function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    )
  }
  
  function RefreshCwIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </svg>
    )
  }

