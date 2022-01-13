import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className={"backhome-button-pos"}>
      <Link to={"/"}>
        <button className={"backhome-button"}>HOME</button>
      </Link>
    </div>
  );
};

export default HomeButton;
