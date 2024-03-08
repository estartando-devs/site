import { ScheduleSectionProps } from '../../mocks/Schedule.mock';
import * as S from './styles';

export const SelectiveProcess = ({
  title,
  stagesList,
}: ScheduleSectionProps) => (
  <S.Section>
    <S.Title
      variant="h2"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
      dangerouslySetInnerHTML={{ __html: title }}
    />

    {stagesList.map(({ key, stage }) => (
      <S.ContentStages
        key={key}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      >
        <S.StageTitle variant="h3">{stage.title}</S.StageTitle>
        <S.Text variant="body2">{stage.description}</S.Text>
      </S.ContentStages>
    ))}
  </S.Section>
);
