import React from "react";
import { LogoIcon } from "..";
import { Flex } from "../../Box";
import { SvgProps } from "../types";

export interface LogoProps extends SvgProps {
  isDark?: boolean;
  width?: string;
}

const Logo: React.FC<LogoProps> = ({ isDark, width, ...props }) => {
  return (
    <Flex alignItems="center">
      <LogoIcon width={width} {...props}/>
      <span style={{ color: isDark? "white":"#280D5F", fontWeight: "bold", marginLeft: "5px" }}>TX8</span>
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
