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

  return (
    <div>
      <input
        type="checkbox"
        checked={isDark}
        onChange={handleToggle}
        className="toggle-checkbox"
        id="toggle-new"
      />
      <label className="toggle-label" htmlFor="toggle-new">
        <span className="toggle-text">{isDark ? 'Dark' : 'Light'}</span>
      </label>
    </div>
  );
}