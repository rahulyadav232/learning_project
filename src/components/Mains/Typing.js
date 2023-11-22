import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const strings = ["Professional Development", "Personal Development"];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState(
    strings[currentStringIndex]
  );
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < currentString.length) {
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentStringIndex(
            (prevIndex) => (prevIndex + 1) % strings.length
          );
          setCurrentString(strings[currentStringIndex]);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, currentString, currentStringIndex, strings]);

  return (
    <div
      style={{
        fontFamily: "Arial",
        fontSize: "24px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: "2px solid #000",
      }}
    >
      {currentString.substring(0, charIndex)}
    </div>
  );
};

export default TypingEffect;
