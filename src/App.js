import { Route, Routes, useNavigate } from "react-router-dom";
import TeamNamesForm from "./components/TeamNamesForm";
import GameContainer from "./components/GameContainer";
import HomeStart from "./components/HomeStart";
import React from "react";
import { useState } from "react";
import TimeOfGameForm from "./components/TimeOfGameForm";

const App = () => {
  const navigate = useNavigate();

  const [teamsData, setTeamsData] = useState([{ name: "", score: 0 }]);
  const [time, setTime] = useState("");
  const [prevTimeState, setPrevTimeState] = useState("");
  const [activeTeam, setActiveTeam] = useState(0);
  // const addPointToTeam = (firstTeam) => {
  //   if (firstTeam){
  //     setTeamA({...teamA, score: teamA.score + 1})
  //   }
  // }

  return (
    <div>
      <header>KALAMBURY</header>
      <div>
        <Routes>
          <Route path="/" element={<HomeStart />} />
          <Route
            path="/teamnamesform"
            element={
              <TeamNamesForm
                teamsData={teamsData}
                setTeamsData={setTeamsData}
              />
            }
          />
          <Route
            path={"/durationselect"}
            element={
              <TimeOfGameForm
                setTime={setTime}
                setPrevTime={setPrevTimeState}
              />
            }
          />
          <Route
            path="/gamecontainer"
            element={
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
        </Routes>
        <div style={{ textAlign: "center" }}>
          <button onClick={() => navigate("/")}>back to home</button>
        </div>
      </div>
    </div>
  );
};

export default App;
