import React from "react";
import HomeButton from "./HomeButton";

const PageWithHomeButton = ({ children }) => {
  return (
    <div>
      {children}
      <HomeButton />
    </div>
  );
};

export default PageWithHomeButton;
