import React from "react";
import { Link } from "react-router-dom";
import * as S from "./LogoStyled";
import LogoImage from "./assets/logo.png";

interface LogoProps {
  width: string;
  height: string;
  padding: string;
  margin: string;
}

const LogoDefaultProps: LogoProps = {
  width: "150px",
  height: "auto",
  padding: "0",
  margin: "0",
};

const Logo = ({
  width,
  height,
  padding,
  margin,
}: LogoProps) => (
    <Link to="/">
      <S.LogoContainer
        src={LogoImage}
        width={width}
        height={height}
        padding={padding}
        margin={margin}
      />
    </Link>
  );

Logo.defaultProps = LogoDefaultProps;

export default Logo;
