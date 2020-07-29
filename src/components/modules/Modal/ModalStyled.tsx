import styled, { keyframes } from "styled-components";

interface IModalContainer {
  show: boolean;
}

const FadeInAnimation = keyframes`
  from { opacity: 0; transform: translate(20px)}
  to { opacity: 1; transform: translate(0px)}
`;

export const ModalContainer = styled.div<IModalContainer>`
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
`;

export const ModalContent = styled.div`
  width: 80%;
  max-width: 300px;
  min-height: 200px;
  background-color: ${(props) => props.theme.palette.background.paper};
  position: relative;
  border-radius: 5px;
  padding: 25px 20px;
  animation-duration: 0.5s;
  animation-name: ${FadeInAnimation};
`;

export const CloseButton = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  /* background-color: ${(props) => props.theme.palette.primary.main}; */
  position: absolute;
  top: 20px;
  right: 20px;
`;
