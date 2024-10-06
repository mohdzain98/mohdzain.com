import React, { useEffect, useState, useRef } from 'react';

const SegmentedProgressBar = ({ steps = 5, targetSteps = 3, barWidth = '100%', barHeight = '30px', activeColor = '#76c7c0', inactiveColor = '#e0e0e0' }) => {
  const [completedSteps, setCompletedSteps] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let currentStep = 0;
          const interval = setInterval(() => {
            if (currentStep < targetSteps) {
              currentStep++;
              setCompletedSteps(currentStep);
            } else {
              clearInterval(interval);
              setHasAnimated(true); // Mark animation as completed
            }
          }, 200); // Adjust time between each step
        }
      },
      { threshold: 0.7 } // Trigger when 50% of the component is visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      observer.disconnect(); // Clean up observer
    };
  }, [hasAnimated, targetSteps]);

  return (
    <div
      ref={progressRef}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: barWidth,
        height: barHeight,
      }}
    >
      {[...Array(steps)].map((_, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: index < completedSteps ? activeColor : inactiveColor,
            marginRight: index < steps - 1 ? '4px' : '0', // Add space between segments
            transition: 'background-color 0.3s ease-in-out', // Smooth transition for the animation
          }}
        />
      ))}
    </div>
  );
};

export default SegmentedProgressBar;
