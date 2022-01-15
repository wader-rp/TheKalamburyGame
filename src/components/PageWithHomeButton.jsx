import React from "react";
import HomeButton from "./HomeButton";

const PageWithHomeButton = ({ children }) => {
  return (
    <div className={"game-container"}>
      {children}
      <HomeButton />
    </div>
  );
};

export default PageWithHomeButton;
