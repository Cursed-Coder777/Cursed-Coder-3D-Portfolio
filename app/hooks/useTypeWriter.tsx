"use client";

import { useState, useEffect } from "react";

interface UseTypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean; // 👈 NEW: loop control
}

export function useTypewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true, // default loop on
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false); // 👈 NEW

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing/deleting logic
  useEffect(() => {
    if (isComplete && !loop) return; // 👈 Stop if not looping

    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayText(currentText.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            if (!loop && textIndex === texts.length - 1) {
              // 👈 Last text typed, stop here
              setIsComplete(true);
              setDisplayText(currentText + "|"); // Show cursor permanently
              return;
            }
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentText.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration, loop, isComplete]);

  const displayTextWithCursor = isComplete ? displayText : displayText + (showCursor ? "|" : " ");

  return {
    displayText: displayTextWithCursor,
    isTyping: !isDeleting && charIndex < texts[textIndex].length,
    isComplete,
  };
}