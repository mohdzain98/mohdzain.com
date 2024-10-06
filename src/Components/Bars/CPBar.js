import React, { useEffect, useState, useRef } from 'react';


const CPBar = ({ targetProgress = 100, size = 150, strokeWidth = 10,fsize=20  }) => {
    const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has occurred
  const progressRef = useRef(null);

  // Intersection Observer to trigger animation once when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) { // Check if it hasn't animated yet
          let start = 0;
          const interval = setInterval(() => {
            if (start <= targetProgress) {
              setProgress(start);
              start += 1;
            } else {
              clearInterval(interval);
              setHasAnimated(true); // Set the flag to true after animation
            }
          }, 10);
        }
      },
      { threshold: 0.7 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [targetProgress, hasAnimated]);

  // Calculate circle stroke
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={progressRef} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#76c7c0"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.35s' }}
        />
        <text
          x={size / 2}
          y={size / 2}
          dy=".3em"
          textAnchor="middle"
          fontSize="20px"
          fill="#333"
          style={{fontSize:`${fsize}px`}}
        >
          {progress}%
        </text>
      </svg>
    </div>
    )
}

export default CPBar
