import React, { useState } from "react";
import * as S from "./ApprovedListStyled";
import { getApprovedList } from "../../../_mocks/studentsApproved";

interface ICoursesName<T> {
  [key: string]: T;
}

const coursesName: ICoursesName<string> = {
  dev: "Desenvolvimento Web",
  design: "Design UI/UX",
};

export const getCourseName = (course: string) => coursesName[course];

const ApprovedList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [approvedList, setApprovedList] = useState<string[]>([]);
  const [courseName, setCourseName] = useState<string>("dev");

  const onCloseModal = () => setOpenModal(false);

  const handleOpenModal = async (course: string) => {
    await setCourseName(`${getCourseName(course)}`);
    await setApprovedList(getApprovedList(course).sort());
    setOpenModal(true);
  };

  return (
    <>
      <S.Modal open={openModal} onClose={onCloseModal}>
        <>
          <S.ListTitle course={courseName}>
            {courseName && `Aprovados ${courseName}`}
          </S.ListTitle>
          <S.ListContainer>
            {approvedList.map((student) => (
              <S.ApprovedItem key={student}>{student}</S.ApprovedItem>
            ))}
          </S.ListContainer>
        </>
      </S.Modal>
      <S.ApprovedListContainer id="Resultado">
        <S.ApprovedTitle>Lista de aprovados:</S.ApprovedTitle>
        <S.ButtonsContainer>
          <S.DevButton onClick={() => handleOpenModal("dev")}>
            Desenvolvimento Web
          </S.DevButton>
          <S.DesignButton onClick={() => handleOpenModal("design")}>
            Design UI/UX
          </S.DesignButton>
        </S.ButtonsContainer>
      </S.ApprovedListContainer>
    </>
  );
};

export default ApprovedList;
