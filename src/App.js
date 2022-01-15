import { Route, Routes, useNavigate, Link } from "react-router-dom";
import TeamNamesForm from "./components/TeamNamesForm";
import GameContainer from "./components/GameContainer";
import HomeStart from "./components/HomeStart";
import React from "react";
import { useState } from "react";
import TimeOfGameForm from "./components/TimeOfGameForm";
import "./styling/kalamburyMC.css";
import PageWithHomeButton from "./components/PageWithHomeButton";

const App = () => {
  const navigate = useNavigate();

  const [teamsData, setTeamsData] = useState([
    { name: "", score: 0 },
    { name: "", score: 0 },
  ]);
  const [time, setTime] = useState("");
  const [prevTimeState, setPrevTimeState] = useState("");
  const [activeTeam, setActiveTeam] = useState(0);

  return (
    <div className={"bg-pat"}>
      <div className={"game-container"}>
        <div className={"title"}>
          <header className={"neonText"}>KALAMBURY</header>
          <p className={"rotateGAME"}>GAME</p>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomeStart />} />
            <Route
              path="/teamnamesform"
              element={
                <PageWithHomeButton
                  children={
                    <TeamNamesForm
                      teamsData={teamsData}
                      setTeamsData={setTeamsData}
                    />
                  }
                />
              }
            />
            <Route
              path={"/durationselect"}
              element={
                <PageWithHomeButton
                  children={
                    <TimeOfGameForm
                      setTime={setTime}
                      setPrevTime={setPrevTimeState}
                    />
                  }
                />
              }
            />
            <Route
              path="/gamecontainer"
              element={
                <PageWithHomeButton
                  children={
                    <GameContainer
                      time={time}
                      setTime={setTime}
                      prevTime={prevTimeState}
                      setPrevTime={setPrevTimeState}
                      teamsData={teamsData}
                      setTeamsData={setTeamsData}
                      activeTeam={activeTeam}
                      setActiveTeam={setActiveTeam}
                    />
                  }
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
