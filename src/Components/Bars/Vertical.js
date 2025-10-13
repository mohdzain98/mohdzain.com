import { useEffect, useState, useRef } from "react";

const Vertical = ({
  targetProgress = 80,
  height = 300,
  width = 40,
  backgroundColor = "#e0e0e0",
  progressColor = "#76c7c0",
}) => {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
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
              setHasAnimated(true);
            }
          }, 10);
        }
      },
      { threshold: 0.8 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    return () => observer.disconnect();
  }, [targetProgress, hasAnimated]);
  return (
    <div
      ref={progressRef}
      style={{
        height,
        width,
        backgroundColor,
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${progress}%`,
          backgroundColor: progressColor,
          transition: "height 0.35s ease-in-out",
        }}
      />
      {/* Display the progress value at the top */}
      <span
        style={{
          position: "absolute",
          bottom: `${progress}%`,
          left: "50%",
          transform: "translate(-50%, 0)",
          color: "#000",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        {progress}%
      </span>
    </div>
  );
};

export default Vertical;
