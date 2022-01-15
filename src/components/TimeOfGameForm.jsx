import React from "react";
import { Link } from "react-router-dom";

const TimeOfGameForm = ({ setTime, setPrevTime }, event) => {
  const handleValueChange = (event) => {
    setTime(event.target.value);
    setPrevTime(event.target.value);
  };
  return (
    <div className={"time-sel-cnt"}>
      <h3>Wybierz czas rundy</h3>
      <br />

      <div onChange={handleValueChange} className={"time-form"}>
        <input name={"radiocheckbox"} type={"radio"} value={3} />
        1 min
        <input name={"radiocheckbox"} type={"radio"} value={4} />
        2 min
        <input name={"radiocheckbox"} type={"radio"} value={5} />3 min
      </div>
      <div className={"btn-cnt"}>
        <Link to={"/gamecontainer"}>
          <button className={"start-button"}>START!</button>
        </Link>
      </div>
    </div>
  );
};

export default TimeOfGameForm;
