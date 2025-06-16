"use client";
import React, { useEffect, useState } from "react";

interface Props {
  initialTime: number; // بر حسب ثانیه
}

function CountdownTimer({ initialTime }: Props) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-row-reverse items-center h-6  mt-2 justify-center">
      {[formatTime(hours), formatTime(minutes), formatTime(seconds)].map(
        (unit, index, array) => (
          <React.Fragment key={index}>
            <div className="bg-white text-[#3f4064] text-sm font-bold w-[26px] h-[26px] flex items-center justify-center rounded-md">
              {unit}
            </div>
            {index < array.length - 1 && (
              <span className="text-white mx-1 font-bold text-lg">:</span>
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default CountdownTimer;
