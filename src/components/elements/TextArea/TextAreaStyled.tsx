import styled from "styled-components";
import { Field } from "formik";

const TextArea = styled(Field)`
  background-color: ${(props) => props.theme.palette.background.paper};
  padding: 9px 8px;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  min-width: ${(props) => props.width || "254px"};
  min-height: ${(props) => props.width || "220px"};
  max-width: 380px;
  max-height: 250px;
  color: ${(props) => props.theme.palette.text.primary};
  border-color: ${(props) => (props.error
    ? props.theme.palette.error.main
    : props.theme.palette.background.paper
  )};
  ::placeholder {
    color: ${(props) => props.theme.palette.grey[400]};
    text-transform: capitalize;
  }
  :focus {
    border-color: ${(props) => props.theme.palette.primary.main};
    outline: none;
  }
`;

export { TextArea };
