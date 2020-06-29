import React from "react";
import * as S from "./ScheduleStyled";
import BoxCalendarSteps from "./components/BoxCalendarSteps";
import { Button } from "../../elements";
import { getImage } from "../../../shared/img";

interface ScheduleProps {

}

const Schedule: React.FC<ScheduleProps> = () => (
  <S.ScheduleContainer>

    <S.ScheduleContainerHeader>
      <S.InformationAside>
        <S.ScheduleTitle>
          Inscrições
          <br />
          <span>2020</span>
        </S.ScheduleTitle>

        <S.ScheduleDescription>
          Um novo formato para um novo tempo.
        </S.ScheduleDescription>

        <S.SubscriptionLink>
          Saiba mais aqui.
        </S.SubscriptionLink>
      </S.InformationAside>

      <S.Image src={getImage("mockuops")} alt="mockuops" />
    </S.ScheduleContainerHeader>


    <Button
      variant="outlined"
      onClick={() => {}}
      size="medium"
    >
      Quero fazer parte
    </Button>

    <BoxCalendarSteps />
  </S.ScheduleContainer>
);

export default Schedule;
