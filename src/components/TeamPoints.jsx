import React, { useState } from "react";

const TeamPoints = ({ teamsData }) => {
  return (
    <div>
      {teamsData.map(({ name, score }, index) => (
        <div key={index}>
          Drużyna {name} : {score}
        </div>
      ))}
    </div>
  );
};

export default TeamPoints;
