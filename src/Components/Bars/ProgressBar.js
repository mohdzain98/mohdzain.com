import React, { useEffect, useState, useRef } from 'react';
import './ProgressBar.css'; // You can add your CSS here

const ProgressBar = ({ targetProgress = 80, height = 20, width = '100%', backgroundColor = '#e0e0e0', progressColor = '#76c7c0' }) => {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has occurred
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const interval = setInterval(() => {
            if (start <= targetProgress) {
              setProgress(start);
              start += 1;
            } else {
              clearInterval(interval);
              setHasAnimated(true); // Ensure animation only runs once
            }
          }, 10); // You can adjust the speed of animation here
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [targetProgress, hasAnimated]);

  return (
    <div ref={progressRef} style={{ width, height, backgroundColor, borderRadius: '10px', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: progressColor,
          transition: 'width 0.35s ease-in-out',
        }}
      />
      {/* Display the progress value */}
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '10px',
        }}
      >
        {progress}%
      </span>
    </div>
  );
};

export default ProgressBar;
