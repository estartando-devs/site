import React, { useState } from "react";
import * as S from "./ApprovedListStyled";
import { Button } from "../../elements";
import { Modal } from "../../modules";
import { getApprovedList } from "../../../_mocks/studentsApproved";

const ApprovedList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [approvedList, setApprovedList] = useState<string[]>([]);

  const onCloseModal = () => setOpenModal(false);

  const handleOpenModal = (list: string) => {
    setApprovedList(getApprovedList(list));
    setOpenModal(true);
  };

  return (
    <>
      <Modal open={openModal} onClose={onCloseModal}>
        {approvedList.map((student) => (
          <p>{student}</p>
        ))}
      </Modal>
      <S.ApprovedListContainer>
        <S.ApprovedTitle>Lista de aprovados na primeira etapa:</S.ApprovedTitle>
        <S.ButtonsContainer>
          <Button size="large" onClick={() => handleOpenModal("dev")}>
            Desenvolvimento Web
          </Button>
          <Button size="large" onClick={() => handleOpenModal("design")}>
            Design UI/UX
          </Button>
        </S.ButtonsContainer>
      </S.ApprovedListContainer>
    </>
  );
};

export default ApprovedList;
