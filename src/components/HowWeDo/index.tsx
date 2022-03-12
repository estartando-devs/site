import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HowWeDoSectionProps } from '../../mocks';
import { StudentCharacteristicsCard } from '..';
import * as S from './styles';

export const HowWeDo = ({
  title,
  description,
  characteristicsList,
}: HowWeDoSectionProps) => {
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
    <S.HowWeDoContainer>
      <S.ExplainingHowWeDo
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      >
        <S.TitleHowWeDo dangerouslySetInnerHTML={{ __html: title }} />
        <S.ContentHowWeDo>
          <S.TextHowWeDo dangerouslySetInnerHTML={{ __html: description }} />
        </S.ContentHowWeDo>
      </S.ExplainingHowWeDo>
      <S.CardListContainer
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      >
        {characteristicsList.map(({ imageProps, description, key }) => (
          <StudentCharacteristicsCard
            key={key}
            imageProps={imageProps}
            description={description}
          />
        ))}
      </S.CardListContainer>
    </S.HowWeDoContainer>
  );
};
