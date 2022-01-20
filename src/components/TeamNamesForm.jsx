import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const TeamNamesForm = ({ teamsData, setTeamsData }) => {
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
        <div key={index} className={"cnt-container"}>
          <input
            value={element.name}
            name={"name"}
            onChange={(event) => handleChange(index, event)}
            className={"input"}
          />
          {index > 1 ? (
            <div className={"del-btn-cnt"}>

              <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(index)} className={"del-btn"} />

            </div>
          ) : null}

        </div>
      ))}
      <div className={"btn-cnt"}>
        <button onClick={handleAddTeam} className={"add-team-btn"}>
          DODAJ DRUŻYNĘ
        </button>
      </div>
      <div className={"btn-cnt"}>
        <Link to={"/durationselect"}  className={"go-next-button"}>
          DALEJ
        </Link>
      </div>
    </div>
  );
};

export default TeamNamesForm;
