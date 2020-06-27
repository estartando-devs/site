import styled from "styled-components";
import { ErrorMessage, Field, FieldProps } from "formik";

const InputContainer = styled.div<{ width: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  padding: 10px 25px;
  position: relative;
`;

const Input = styled(Field)<FieldProps>`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 9px 8px;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  width: 100%;
  height: 44px;
  color: ${(props) => props.theme.palette.text.primary};
  border-color: ${(props) =>
    props.error
      ? props.theme.palette.error.main
      : props.theme.palette.background.paper};
  :focus {
    border-color: ${(props) => props.theme.palette.primary.main};
    outline: none;
  }
`;

const Label = styled.label<{ error?: boolean }>`
  margin: 3px 10px;
  font-size: 14px;
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) =>
    props.error
      ? props.theme.palette.error.main
      : props.theme.palette.text.secondary};
  margin-bottom: 8px;
`;

const HintLabel = styled.span`
  margin: 3px 0;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.text.primary};
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  bottom: -6px;
  left: 34px;
  color: ${(props) => props.theme.palette.error.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-size: 10px;
`;

export { InputContainer, Input, Label, HintLabel, ErrorMessageStyled };
