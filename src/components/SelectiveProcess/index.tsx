import * as S from './styles';
import { ScheduleSectionProps } from '../../mocks/Schedule.mock';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
}: ScheduleSectionProps) => {
  useEffect(() => {
    Aos.init({
      delay: 50,
      offset: 200,
      once: false,
      mirror: true,
      duration: 1000,
    });
  }, []);

  return (
    <S.Section>
      <S.Title
        variant="h2"
        dangerouslySetInnerHTML={{ __html: title }}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      />
      <S.Text
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        variant="body2"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <S.ScheduleWrapper>
        <S.ScheduleDotsWrapper
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
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
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
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
};
