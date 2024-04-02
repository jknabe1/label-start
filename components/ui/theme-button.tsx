import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 cursor-pointer border-4 border-black dark:border-white" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
        {resolvedTheme === "dark" ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12l-4 4m0 0l-4-4m4 4V3m0 13a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 110 10 5 5 0 010-10zm7-7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-9-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm.354 13.354a1.5 1.5 0 11-2.121-2.121 1.5 1.5 0 012.121 2.121zm11.292-11.292a1.5 1.5 0 11-2.121-2.121 1.5 1.5 0 012.121 2.121z"></path>
          </svg>
        )}
      </label>
    </div>
  );
}