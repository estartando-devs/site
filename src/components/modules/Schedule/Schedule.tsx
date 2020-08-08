import React, { useState, useEffect, useRef } from "react";
import * as S from "./ScheduleStyled";
import BoxCalendarSteps from "./components/BoxCalendarSteps";
import { Modal } from "../Modal";

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => {
  const [openModal, setOpenModal] = useState(false);
  const ContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (openModal) {
        body.style.overflow = "hidden";
        ContainerRef.current?.scrollIntoView();
      } else {
        body.style.overflow = "initial";
      }
    }
  }, [openModal]);

  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      <Modal open={openModal} onClose={onCloseModal}>
        <S.ModalText>
          A pandemia trouxe desafios. E para nossa equipe, desafios são para nos
          fazer evoluir. Com objetivo de reduzir os impactos da pandemia,
          desenvolvemos uma nova modalidade para a nossa formação. Aulas online,
          conteúdo mais objetivo e duração express.
        </S.ModalText>

        <S.ModalText>Vem fazer parte dessa história.</S.ModalText>
      </Modal>
      <S.ScheduleContainer blur={openModal} ref={ContainerRef}>
        <BoxCalendarSteps />
      </S.ScheduleContainer>
    </>
  );
};

export default Schedule;
