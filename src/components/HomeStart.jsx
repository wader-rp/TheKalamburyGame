import React from "react";
import { Link } from "react-router-dom";

const HomeStart = () => {
  return (
    <div className="btn-cnt">
      <Link to={"teamnamesform"}>
        <button className={"start-button"}>START!</button>
      </Link>
    </div>
  );
};

export default HomeStart;
