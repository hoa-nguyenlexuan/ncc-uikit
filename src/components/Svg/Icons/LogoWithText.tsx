import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <img src="https://i.imgur.com/TFCiyH4.png" className="desktop-icon" alt="tx8-logo" {...props} width="37px"/>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
