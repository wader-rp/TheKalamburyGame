import React, { useState } from "react";

const TeamPoints = ({ teamsData }) => {
  return (
    <div className={"points-boxes"}>
      {teamsData.map(({ name, score }, index) => (
        <div key={index} className={"points-box"}>
          Drużyna {name}
          <div className={"points-score"}>{score}</div>
        </div>
      ))}
    </div>
  );
};

export default TeamPoints;
