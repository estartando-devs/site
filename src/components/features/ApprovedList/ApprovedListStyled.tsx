import styled from "styled-components";
import { Typography, Button } from "../../elements";
import media from "../../../styles/breakpoints";
import { Modal as ModalComponent } from "../../modules";

const Modal = styled(ModalComponent)`
  max-width: 500px;

  ${media.lessThan("medium")`
    max-width: 90vw;
  `}
`;

const ApprovedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0 20px;
`;

const ApprovedTitle = styled(Typography).attrs({
  variant: "h2",
  weight: "bold",
})`
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;

  ${media.lessThan("medium")`
    font-size: 1.2rem;
  `}
`;

const ButtonsContainer = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  justify-content: space-around;
  padding-top: 60px;

  ${media.lessThan("medium")`
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  `}
`;

const ListTitle = styled(Typography).attrs({
  variant: "h2",
})`
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #6c63ff;
  text-underline-position: under;
  padding-bottom: 15px;

  ${media.lessThan("medium")`
    font-size: 1.2rem;
  `}
`;

const ListContainer = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 10px;
`;

const ApprovedItem = styled(Typography)`
  padding: 10px;
  border: 1px solid #ffffff;
`;

const DevButton = styled(Button).attrs({
  size: "large",
})`
  margin: 20px;

  ${media.lessThan("medium")`
    margin: 10px;
  `}
`;

const DesignButton = styled(Button).attrs({
  size: "large",
  variant: "design",
})`
  margin: 20px;

  ${media.lessThan("medium")`
    margin: 10px;
  `}
`;

export {
  Modal,
  ApprovedListContainer,
  ApprovedTitle,
  ButtonsContainer,
  ListContainer,
  ListTitle,
  ApprovedItem,
  DevButton,
  DesignButton,
};
