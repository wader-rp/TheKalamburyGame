import React, { useEffect } from "react";
import { useState } from "react";
import TeamPoints from "./TeamPoints";
import PasswordDisplay from "./PasswordDisplay";
import Timer from "./Timer";

const GameContainer = ({ time, setTime, teamB, teamA, prevTime }) => {
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (isTimeVisible) {
      const timerInterval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      if (time === 0) {
        setIsTimeVisible(false);
        setTime(prevTime);
      }
      return () => clearInterval(timerInterval);
    }
  }, [time, isTimeVisible]);
  console.log(time);

  return (
    <div>
      <PasswordDisplay
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
        setIsTimeVisible={setIsTimeVisible}
        isTimeVisible={isTimeVisible}
        time={time}
      />
      <Timer
        setIsTimeVisible={setIsTimeVisible}
        isTimeVisible={isTimeVisible}
        setTime={setTime}
        time={time}
        prevTime={prevTime}
      />
      <TeamPoints teamA={teamA} teamB={teamB} />
    </div>
  );
};

export default GameContainer;
