import React, { useState } from "react";

import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const TeamNamesForm = ({ teamsData, setTeamsData, home }) => {
  const handleAddTeam = () => {
    setTeamsData([...teamsData, { name: "", score: 0 }]);
  };

  const handleDelete = (index) => {
    const newTeamsData = [...teamsData];
    newTeamsData.splice(index, 1);
    setTeamsData(newTeamsData);
  };

  const handleChange = (i, event) => {
    const newTeamsData = [...teamsData];
    newTeamsData[i].name = event.target.value;
    setTeamsData(newTeamsData);
  };

  return (
    <div>
      {teamsData.map((element, index) => (
        <div key={index}>
          <input
            value={element.name}
            name={"name"}
            onChange={(event) => handleChange(index, event)}
          />
          {index > 0 ? (
            <button onClick={() => handleDelete(index)}>Usuń</button>
          ) : null}
        </div>
      ))}
      <div>
        <button onClick={handleAddTeam}>DODAJ DRUŻYNĘ</button>
      </div>
      <div>
        <Link to={"/durationselect"}>
          <button>DALEJ</button>
        </Link>
      </div>
    </div>
  );
};

export default TeamNamesForm;
