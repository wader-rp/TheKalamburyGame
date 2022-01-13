import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import TeamPoints from "./TeamPoints";
import PasswordDisplay from "./PasswordDisplay";
import Timer from "./Timer";

import { moveToNextTeam } from "./helpers/moveToNextTeam";
import HomeButton from "./HomeButton";

const GameContainer = ({
  time,
  setTime,
  prevTime,
  setPrevTime,
  activeTeam,
  setActiveTeam,
  setTeamsData,
  teamsData,
  home,
}) => {
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
        moveToNextTeam(teamsData, activeTeam, setActiveTeam);
      }
      return () => clearInterval(timerInterval);
    }
  }, [time, isTimeVisible]);
  console.log(time);

  const addPoint = () => {
    const newTeamsData = [...teamsData];
    newTeamsData[activeTeam].score = newTeamsData[activeTeam].score + 1;
    setTeamsData(newTeamsData);
    moveToNextTeam(teamsData, activeTeam, setActiveTeam);
  };

  return (
    <div>
      <h1>Gra drużyna {teamsData[activeTeam].name}</h1>
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
        addPoint={addPoint}
      />
      <TeamPoints teamsData={teamsData} />
    </div>
  );
};

export default GameContainer;
