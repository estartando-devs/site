import React from "react";
import { Link } from "react-router-dom";
import * as S from "./LogoStyled";
import LogoImage from "./assets/logo.svg";

interface LogoProps {
  width: string;
  height: string;
  padding: string;
  margin: string;
  position: string;
  animation: any;
}

const LogoDefaultProps: LogoProps = {
  width: "150px",
  height: "auto",
  padding: "0",
  margin: "0",
  position: "relative",
  animation: S.rotateRule,
};

const Logo = ({
  width,
  height,
  padding,
  margin,
  position,
  animation,
}: LogoProps) => (
  <Link to="/">
    <S.LogoContainer
      src={LogoImage}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      position={position}
      animation={animation}
    />
  </Link>
);

Logo.defaultProps = LogoDefaultProps;

export default Logo;
