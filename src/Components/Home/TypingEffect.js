import React, { useState, useEffect } from "react";
import "../Styling/Intro.css";

const TypingEffect = ({ className, text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div id="typing">
      <h2 className={className}>{displayedText}</h2>
      {/* <span className="typing-cursor"></span> Blinking cursor */}
    </div>
  );
};

export default TypingEffect;
