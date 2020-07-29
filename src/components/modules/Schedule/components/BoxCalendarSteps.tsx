import React from "react";
import * as S from "./BoxCalendarStepsStyled";
import { scheduleMock, ISchedule } from "../../../../_mocks";
import { getImage } from "../../../../shared/img";

interface BoxCalendarStepsProps {}

const BoxCalendarSteps: React.FC<BoxCalendarStepsProps> = () => (
  <>
    <S.CalendarStepsTitle>fique atento ao calendário</S.CalendarStepsTitle>
    <S.CalendarStepsWrapper>
      {scheduleMock.map((schedule: ISchedule) => (
        <S.CalendarStep key={schedule.title} disabled={schedule.disable}>
          <S.CalendarStepImageWrapper>
            <S.CalendarStepImage
              src={getImage(schedule.image)}
              alt={`imagem ${schedule.title}`}
            />
          </S.CalendarStepImageWrapper>

          <S.CalendarStepDescription>
            <b>{`${schedule.title}: `}</b>
            {schedule.description}
          </S.CalendarStepDescription>
        </S.CalendarStep>
      ))}
    </S.CalendarStepsWrapper>
  </>
);

export default BoxCalendarSteps;
