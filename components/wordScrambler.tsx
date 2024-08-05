import React, { useEffect, useState } from 'react';

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('POWERED BY K&K MEDIA GROUP');
  const scrambleDuration = 2000; // Duration of the scrambling effect in milliseconds
  const scrambleInterval = 50; // Interval between each scramble in milliseconds

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    const startTime = Date.now();

    const scramble = () => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= scrambleDuration) {
        setDisplayText(text);
        clearInterval(intervalId);
        return;
      }

      const scrambledText = text
        .split('')
        .map((char) => (Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : char))
        .join('');

      setDisplayText(scrambledText);
    };

    intervalId = setInterval(scramble, scrambleInterval);
    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setDisplayText(text);
    }, scrambleDuration);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [text]);

  return <span className="scramble-text">{displayText}</span>;
};

export default ScrambleText;