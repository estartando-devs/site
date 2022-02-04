import React from "react";
import * as S from "./ModalStyled";

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
      <S.ModalContent {...otherStyles}>{children}</S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
