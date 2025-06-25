"use client";

import { useEffect, useState } from "react";
import { addHours, differenceInSeconds } from "date-fns";

interface CountdownTimerProps {
  backendTime: string;
  className?: string;
}

export default function CountdownTimer({ backendTime, className }: CountdownTimerProps) {
  const startDate = new Date(backendTime);
  const endDate   = addHours(startDate, 24);

  const initialLeft = Math.max(differenceInSeconds(endDate, new Date()), 0);
  const [secondsLeft, setSecondsLeft] = useState(initialLeft);

  useEffect(() => {
    if (secondsLeft === 0) return;
    const id = setInterval(() => {
      setSecondsLeft(prev => {
        const next = prev - 1;
        return next < 0 ? 0 : next;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [secondsLeft]);

  // 4️⃣ Format hh:mm:ss
  const hours   = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const formatted =
    `${hours.toString().padStart(2, "0")}:` +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;

  return <span className={className}>{secondsLeft === 0 ? "Time's up!" : formatted}</span>;
}
