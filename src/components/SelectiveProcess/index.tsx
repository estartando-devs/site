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
  dataAos,
  schedule,
  description,
  dataAosEasing,
  dataAosAnchorPlacement,
}: ScheduleSectionProps) => (
  <S.Section>
    <S.Title
      variant="h2"
      data-aos={dataAos}
      data-aos-easing={dataAosEasing}
      dangerouslySetInnerHTML={{ __html: title }}
      data-aos-anchor-placement={dataAosAnchorPlacement}
    />
    <S.Text
      data-aos={dataAos}
      data-aos-easing={dataAosEasing}
      data-aos-anchor-placement={dataAosAnchorPlacement}
      variant="body2"
      dangerouslySetInnerHTML={{ __html: description }}
    />
    <S.ScheduleWrapper>
      <S.ScheduleDotsWrapper
        data-aos={dataAos}
        data-aos-easing={dataAosEasing}
        data-aos-anchor-placement={dataAosAnchorPlacement}
      >
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
            data-aos={dataAos}
            data-aos-easing={dataAosEasing}
            data-aos-anchor-placement={dataAosAnchorPlacement}
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
