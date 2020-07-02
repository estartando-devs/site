import React from "react";
import * as S from "./ScheduleStyled";
import BoxCalendarSteps from "./components/BoxCalendarSteps";
import { Button } from "../../elements";
import { getImage } from "../../../shared/img";
import config from "../../../config/constants";

interface ScheduleProps {}

const Schedule: React.FC<ScheduleProps> = () => (
  <S.ScheduleContainer>
    <S.ScheduleContainerHeader>
      <S.InformationAside>
        <S.ScheduleTitle>
          Inscrições
          <span> 2020</span>
        </S.ScheduleTitle>

        <S.ScheduleDescription>
          Um novo formato para um novo tempo.
        </S.ScheduleDescription>

        <S.InformationText>
          A pandemia trouxe desafios. E para nossa equipe, desafios são para nos
          fazer evoluir. Com objetivo de reduzir os impactos da pandemia,
          desenvolvemos uma nova modalidade para a nossa formação. Aulas online,
          conteúdo mais objetivo e duração express. Para você que precisa....
          Vem fazer parte dessa história.
        </S.InformationText>

        <S.SubscriptionLink>Saiba mais aqui.</S.SubscriptionLink>

        <a target="blank" href={config.INSCRICOES_URL}>
          <Button variant="outlined" onClick={() => {}} size="medium">
            Quero fazer parte
          </Button>
        </a>
      </S.InformationAside>

      <S.Image src={getImage("mockuops")} alt="mockuops" />
    </S.ScheduleContainerHeader>

    <a target="blank" href={config.INSCRICOES_URL}>
      <S.SubscriptionButton variant="outlined" onClick={() => {}} size="medium">
        Quero fazer parte
      </S.SubscriptionButton>
    </a>

    <BoxCalendarSteps />
  </S.ScheduleContainer>
);

export default Schedule;
