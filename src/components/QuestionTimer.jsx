import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remaingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const Interval = setInterval(() => {
      setRemainingTime((PrevRemainingtime) => PrevRemainingtime - 100);
    }, 100);

    return () => {
      clearInterval(Interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remaingTime}
      className={mode}
    />
  );
}
