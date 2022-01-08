import { Route, Routes } from "react-router-dom";
import TeamNamesForm from "./components/TeamNamesForm";
import GameContainer from "./components/GameContainer";
import HomeStart from "./components/HomeStart";
import React from "react";
import { useState } from "react";
import TimeOfGameForm from "./components/TimeOfGameForm";

const App = () => {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [time, setTime] = useState("");
  const [prevTimeState, setPrevTimeState] = useState("");

  return (
    <div>
      <header>KALAMBURY</header>
      <div>
        <Routes>
          <Route path="/" element={<HomeStart />} />
          <Route
            path="teamnamesform"
            element={
              <TeamNamesForm
                teamA={teamA}
                teamB={teamB}
                setTeamA={setTeamA}
                setTeamB={setTeamB}
              />
            }
          />
          <Route
            path={"durationselect"}
            element={
              <TimeOfGameForm
                setTime={setTime}
                setPrevTime={setPrevTimeState}
              />
            }
          />
          <Route
            path="gamecontainer"
            element={
              <GameContainer
                teamA={teamA}
                teamB={teamB}
                setTeamA={setTeamA}
                setTeamB={setTeamB}
                time={time}
                setTime={setTime}
                prevTime={prevTimeState}
                setPrevTime={setPrevTimeState}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
