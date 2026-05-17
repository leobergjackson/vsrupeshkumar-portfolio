'use client';

import { useState, useEffect, useRef } from 'react';

interface UseTypingEffectOptions {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingEffect({
  strings,
  typingSpeed = 40,
  deletingSpeed = 20,
  pauseDuration = 1800,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const phaseRef = useRef<'typing' | 'holding' | 'deleting'>('typing');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const tick = () => {
      const currentString = strings[indexRef.current];

      if (phaseRef.current === 'typing') {
        charRef.current++;
        setDisplayText(currentString.slice(0, charRef.current));
        setIsTyping(true);

        if (charRef.current >= currentString.length) {
          phaseRef.current = 'holding';
          timeoutRef.current = setTimeout(tick, pauseDuration);
          return;
        }

        timeoutRef.current = setTimeout(tick, typingSpeed + Math.random() * 20);
      } else if (phaseRef.current === 'holding') {
        phaseRef.current = 'deleting';
        timeoutRef.current = setTimeout(tick, 30);
      } else {
        charRef.current--;
        setDisplayText(currentString.slice(0, charRef.current));
        setIsTyping(false);

        if (charRef.current <= 0) {
          indexRef.current = (indexRef.current + 1) % strings.length;
          phaseRef.current = 'typing';
          timeoutRef.current = setTimeout(tick, 200);
        } else {
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 600);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [strings, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isTyping };
}
