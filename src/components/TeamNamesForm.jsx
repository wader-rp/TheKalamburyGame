import React from "react";

import { Link } from "react-router-dom";

const TeamNamesForm = ({ teamA, teamB, setTeamA, setTeamB }) => {
  return (
    <div>
      Drużyna A
      <input
        value={teamA}
        name={teamA}
        onChange={(event) => setTeamA(event.target.value)}
      />
      Drużyna B
      <input
        value={teamB}
        name={teamB}
        onChange={(event) => setTeamB(event.target.value)}
      />
      <div>
        <Link to={"/durationselect"}>
          <button>DALEJ</button>
        </Link>
      </div>
    </div>
  );
};

export default TeamNamesForm;
