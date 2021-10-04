import React, { useState, useEffect, useRef } from "react";
import * as S from "./ScheduleStyled";
// import BoxCalendarSteps from "./components/BoxCalendarSteps";
// import { Button } from "../../elements";
// import { getImage } from "../../../shared/img";
// import config from "../../../config/constants";
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
  // const handleOpenModal = () => {
  //   setOpenModal(true);
  // };
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
        {/* <S.ScheduleContainerHeader>
          <S.InformationAside>
            <S.ScheduleTitle>
              Inscrições
              <span> 2021</span>
            </S.ScheduleTitle>

            <S.ScheduleDescription>
              Um novo formato para um novo tempo.
            </S.ScheduleDescription>

            <S.InformationText>
              A pandemia trouxe desafios. E para nossa equipe, desafios são para
              nos fazer evoluir. Com objetivo de reduzir os impactos da
              pandemia, desenvolvemos uma nova modalidade para a nossa formação.
              Aulas online, conteúdo mais objetivo e duração express. Para você
            </S.InformationText>
            <S.InformationText>
              Vem fazer parte dessa história.
            </S.InformationText>

            <S.SubscriptionLink onClick={handleOpenModal}>
              Saiba mais aqui.
            </S.SubscriptionLink>

            <a target="blank" href={config.INSCRICOES_URL}>
              <Button variant="outlined" onClick={() => {}} size="medium">
                Quero fazer parte!
              </Button>
            </a>
          </S.InformationAside>

          <S.Image src={getImage("mockuops")} alt="mockuops" />
        </S.ScheduleContainerHeader>
        <a target="blank" href={config.INSCRICOES_URL}>
          <S.SubscriptionButton
            variant="outlined"
            onClick={() => {}}
            size="medium"
          >
            Quero fazer parte!
          </S.SubscriptionButton>
        </a> */}

        {/* <BoxCalendarSteps /> */}
      </S.ScheduleContainer>
    </>
  );
};

export default Schedule;
