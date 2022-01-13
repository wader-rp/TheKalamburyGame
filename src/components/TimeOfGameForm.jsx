import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const TimeOfGameForm = ({ setTime, setPrevTime, home }, event) => {
  const handleValueChange = (event) => {
    setTime(event.target.value);
    setPrevTime(event.target.value);
  };
  return (
    <div>
      <div>Wybierz czas rundy</div>
      <div onChange={handleValueChange}>
        <input name={"radiocheckbox"} type={"radio"} value={3} />1 min
        <input name={"radiocheckbox"} type={"radio"} value={4} />
        2 min
        <input name={"radiocheckbox"} type={"radio"} value={5} />3 min
      </div>
      <Link to={"/gamecontainer"}>
        <button>START!</button>
      </Link>
    </div>
  );
};

export default TimeOfGameForm;
