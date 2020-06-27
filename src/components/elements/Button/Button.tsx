import React from "react";
import ReactLoading from "react-loading";
import { IButton } from "../../../models";
import * as S from "./ButtonStyled";

const Button: React.FC<IButton> = ({
  onClick,
  variant = "default",
  size = "small",
  disabled,
  isLoading = false,
  children,
  ...rest
}) => (
  <S.ButtonContainer
    onClick={onClick}
    variant={variant}
    size={size}
    disabled={disabled}
    isLoading={isLoading}
    {...rest}
  >
    {
    isLoading
      ? (
        <ReactLoading
          type="spokes"
          height="20px"
          width="20px"
        />
      )
      : children
    }
  </S.ButtonContainer>
);

export default Button;
