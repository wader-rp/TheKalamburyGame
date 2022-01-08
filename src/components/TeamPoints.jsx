import React, { useState } from "react";

const TeamPoints = ({ teamA, teamB }) => {
  const [teamAPoints, setTeamAPoints] = useState(0);
  const [teamBPoints, setTeamBPoints] = useState(0);

  const handlePointsCount = () => {};
  return (
    <div>
      <div>
        <div>{`Drużyna ${teamA}`}</div>
        <div>{`Drużyna ${teamB}`}</div>
      </div>
    </div>
  );
};

export default TeamPoints;
