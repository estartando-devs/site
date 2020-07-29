import React from "react";
import * as S from "./ModalStyled";
import { getImage } from "../../../shared/img";

interface IModal {
  children: any;
  open: boolean;
  onClose: Function;
}

const Modal: React.FC<IModal> = ({
  children,
  open,
  onClose,
  ...otherStyles
}) => {
  const handleClick = () => {
    onClose();
  };
  return (
    <S.ModalContainer show={open}>
      <S.CloseButton onClick={handleClick} src={getImage("close")} />
      <S.ModalContent {...otherStyles}>{children}</S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
