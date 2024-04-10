import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 20 || currentHour < 6) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [setTheme]);

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleKeyDown = (event: { shiftKey: any; key: string; }) => {
      if (event.shiftKey && event.key === 'D') {
        handleToggle();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, 
  [handleToggle]);

  return (
          <button onClick={handleToggle}>{isDark ? 'Ljust' : 'Mörkt'}</button>
  );
}