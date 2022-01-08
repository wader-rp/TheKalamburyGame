import React, { useEffect, useState } from "react";
import { Passwords } from "../data/Passwords";

const PasswordDisplay = (props) => {
  const [randomPassword, setrandomPassword] = useState("");

  const generateRandomPassword = () => {
    let password = Passwords[Math.floor(Math.random() * Passwords.length)];
    setrandomPassword(password);
  };
  const handleDrawButtonClick = () => {
    generateRandomPassword();
    props.setIsPasswordVisible(true);
    props.setIsTimeVisible(true);
  };

  return (
    <div>
      <div>
        <div>{props.isTimeVisible ? <h1>{randomPassword}</h1> : null}</div>
      </div>
      <div>
        {props.isTimeVisible ? null : (
          <button onClick={handleDrawButtonClick}>WYLOSUJ HASŁO</button>
        )}
      </div>
    </div>
  );
};
export default PasswordDisplay;
