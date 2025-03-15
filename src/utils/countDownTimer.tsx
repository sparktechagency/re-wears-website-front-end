"use client"

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  hours,
  minutes,
  seconds,
  className,
}) => {
  const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  const [timeLeft, setTimeLeft] = useState<number>(totalTimeInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop the countdown when time reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return <span className={className}>{formatTime(timeLeft)}</span>;
};

export default CountdownTimer;
