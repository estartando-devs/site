import * as S from './styles';
import { ScheduleSectionProps } from '../../mocks/Schedule.mock';

const ScheduleDotGroup = ({ disabled }: { disabled?: boolean }) => (
  <>
    <S.ScheduleDot disabled={disabled}></S.ScheduleDot>
    <S.ScheduleLittleDot></S.ScheduleLittleDot>
    <S.ScheduleLittleDot></S.ScheduleLittleDot>
    <S.ScheduleLittleDot></S.ScheduleLittleDot>
    <S.ScheduleLittleDot></S.ScheduleLittleDot>
  </>
);

export const SelectiveProcess = ({
  title,
  description,
  schedule,
}: ScheduleSectionProps) => (
  <S.Section>
    <S.Title variant="h2" dangerouslySetInnerHTML={{ __html: title }} />
    <S.Text variant="body2" dangerouslySetInnerHTML={{ __html: description }} />
    <S.ScheduleWrapper>
      <S.ScheduleDotsWrapper>
        {schedule.map(({ key, disable }, index) => {
          const isTheLast = index === schedule.length - 1;
          return isTheLast ? (
            <S.ScheduleDot key={key} disabled={disable} />
          ) : (
            <ScheduleDotGroup key={key} disabled={disable} />
          );
        })}
      </S.ScheduleDotsWrapper>

      <S.ScheduleContentWrapper>
        {schedule.map(({ title, description, disable, key }) => (
          <S.ScheduleItem
            key={`${title}-${key}`}
            variant="h3"
            disabled={disable}
          >
            {title} - <span>{description}</span>
          </S.ScheduleItem>
        ))}
      </S.ScheduleContentWrapper>
    </S.ScheduleWrapper>
  </S.Section>
);
