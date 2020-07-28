import styled from "styled-components";
import { Typography } from "../../elements";

const ApprovedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ApprovedTitle = styled(Typography).attrs({
  variant: "h2",
  weight: "bold",
})`
  text-decoration: underline;
  text-underline-position: under;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 60px;
`;

export { ApprovedListContainer, ApprovedTitle, ButtonsContainer };
