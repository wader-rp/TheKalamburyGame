import React from "react";

const ActiveTeamDisplay = ({activeTeamText}) => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>{activeTeamText}</h1>
    </div>
  );
};

export default ActiveTeamDisplay;