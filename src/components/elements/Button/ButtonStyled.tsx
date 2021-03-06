import styled, { css } from "styled-components";
import { shade } from "polished";
import { IButton } from "../../../models";

const SIZE = {
  small: css`
    width: 136px;
  `,
  medium: css`
    width: 200px;
  `,
  large: css`
    width: 70%;
  `,
  huge: css`
    width: 100%;
  `,
};

const VARIANT = {
  default: css`
    background-color: ${(props) => props.theme.palette.primary.main};
    border-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
    &:hover {
      background-color: ${(props) =>
        shade(0.15, props.theme.palette.primary.main)};
      border-color: ${(props) => shade(0.15, props.theme.palette.primary.main)};
    }
    &:active {
      background-color: ${(props) => props.theme.palette.primary.main};
      border-color: ${(props) => props.theme.palette.primary.main};
    }
  `,
  outlined: css`
    background-color: transparent;
    border-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.main};
    &:hover {
      border-color: ${(props) => shade(0.15, props.theme.palette.primary.main)};
      color: ${(props) => shade(0.15, props.theme.palette.primary.main)};
    }
    &:active {
      border-color: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.primary.main};
    }
  `,
  secondary: css`
    background-color: #fff;
    border-color: #fff;
    color: ${(props) => props.theme.palette.primary.main};

    &:hover {
      border-color: shade(0.15, "#fff");
      color: ${(props) => shade(0.15, props.theme.palette.primary.main)};
    }
    &:active {
      border-color: #fff;
      color: ${(props) => props.theme.palette.primary.main};
    }
  `,
  design: css`
    background-color: ${(props) => props.theme.palette?.design?.main || "#FFF"};
    border-color: ${(props) => props.theme.palette?.design?.main || "#FFF"};
    color: ${(props) => props.theme.palette?.design?.contrastText};

    &:hover {
      border-color: ${(props) =>
        shade(0.15, props.theme.palette?.design?.main || "#FFF")};
      color: ${(props) =>
        shade(0.15, props.theme.palette?.design?.contrastText || "#FFF")};
    }
    &:active {
      border-color: ${(props) => props.theme.palette?.design?.main};
      color: ${(props) => props.theme.palette?.design?.contrastText};
    }
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background-color: ${(props) => props.theme.palette.grey[500]};
  border-color: ${(props) => props.theme.palette.grey[500]};
  color: ${(props) => props.theme.palette.grey[400]};
  &:hover {
    background-color: ${(props) => props.theme.palette.grey[500]};
    border-color: ${(props) => props.theme.palette.grey[500]};
  }
`;

const ButtonContainer = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: solid 2px;
  height: 48px;
  transition-property: background-color, border-color;
  transition: 0.1s;
  cursor: ${(props) => (props.isLoading ? "wait" : "pointer")};
  box-shadow: ${(props) => props.theme.shadows[0]};
  padding: ${(props) => props.theme.shape?.padding.small};
  border-radius: ${(props) => props.theme.shape?.borderRadius};
  font-family: Ubuntu;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: 20px;
  ${(props) => props.variant && VARIANT[props.variant]};
  ${(props) => props.disabled && DISABLED};
  ${(props) => props.size && SIZE[props.size]}
`;

export { ButtonContainer };
