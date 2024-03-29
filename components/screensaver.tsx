"use client"

import React, { useEffect, useState } from 'react';

const Screensaver = () => {
  const [isInactive, setIsInactive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  let timer: string | number | NodeJS.Timeout | null | undefined = null;

const resetTimer = () => {
    clearTimeout(timer as NodeJS.Timeout);
    setIsInactive(false);
    timer = setTimeout(() => setIsInactive(true), 60000); // 60 seconds
};

  useEffect(() => {
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    resetTimer();

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!isInactive || isMobile) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,  backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999,  }}>
        <img src="https://daytona2020.sakura.ne.jp/freak/cms/wp-content/uploads/2022/07/logo.png" alt="Screensaver" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default Screensaver;