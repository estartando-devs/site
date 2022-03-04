import { Logo, Typography } from '..';
import * as S from './styles';
import { scheduleMock } from '../../mocks/Schedule.mock';
export type Question = {
  question: string;
  answer: string;
  key: string;
};

export const SelectiveProcess = () => (
  <S.Section>
    <S.Title variant="h2">
      Sobre o <br /> <span>processo seletivo </span>
    </S.Title>
    <S.Text variant="body2">
      Acreditamos no poder de <span>transformação social</span> através da
      Tecnologia da Informação. Por isso, oferecemos uma formação objetiva e
      focada nas exigências do mercado de TI. Os dois cursos incluem ainda
      conhecimentos em métodos de gestão ágil de projetos utilizados no mercado
      para o desenvolvimento de trabalhos em equipe, além de assessoria no
      Linkedin e direcionamento de carreira.
    </S.Text>
    <S.ScheduleWrapper>
      <S.ScheduleDotsWrapper>
        {scheduleMock.map((schedule, index) => {
          const isTheLast = index === scheduleMock.length - 1;
          return isTheLast ? (
            <>
              <S.ScheduleDot disabled={schedule.disable}></S.ScheduleDot>
            </>
          ) : (
            <>
              <S.ScheduleDot disabled={schedule.disable}></S.ScheduleDot>
              <S.ScheduleLittleDot></S.ScheduleLittleDot>
              <S.ScheduleLittleDot></S.ScheduleLittleDot>
              <S.ScheduleLittleDot></S.ScheduleLittleDot>
              <S.ScheduleLittleDot></S.ScheduleLittleDot>
            </>
          );
        })}
      </S.ScheduleDotsWrapper>

      <S.ScheduleContentWrapper>
        {scheduleMock.map((schedule) => (
          <S.ScheduleItem variant="h3" disabled={schedule.disable}>
            {schedule.title} - <span>{schedule.description}</span>
          </S.ScheduleItem>
        ))}
      </S.ScheduleContentWrapper>
    </S.ScheduleWrapper>
  </S.Section>
);
