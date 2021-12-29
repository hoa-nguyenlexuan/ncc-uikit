import React from "react";
import { LogoProps } from "./LogoWithText";

const Icon: React.FC<LogoProps> = ({width,...props}) => {
  return (
    <img
        src="https://i.imgur.com/TFCiyH4.png"
        alt="tx8-logo"
        {...props}
        width={width ?? "37px"}
      />
  );
};

export default Icon;
