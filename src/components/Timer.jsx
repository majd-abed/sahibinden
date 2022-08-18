import React, { useEffect } from "react";
import { useGlobal } from "../context/context";

const Timer = () => {
  const { seconds, setSeconds, minutes, setMinutes } = useGlobal();
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (seconds + minutes > 0) {
        if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};
export default Timer;
