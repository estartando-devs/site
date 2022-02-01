import React from "react";
import * as S from "./LogoStyled";
// import LogoImage from "../../../../public/img";

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
  ...rest
}: LogoProps) => (
    <S.LogoContainer
      src="https://picsum.photos/id/237/200/300"
      // src={LogoImage}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      {...rest}
    />
);

Logo.defaultProps = LogoDefaultProps;

export default Logo;
