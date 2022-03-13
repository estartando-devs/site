import React from 'react';
import { HowWeDoSectionProps } from '../../mocks';
import { StudentCharacteristicsCard } from '..';
import * as S from './styles';

export const HowWeDo = ({
  title,
  dataAos,
  description,
  dataAosEasing,
  characteristicsList,
  dataAosAnchorPlacement,
}: HowWeDoSectionProps) => {
  return (
    <S.HowWeDoContainer>
      <S.ExplainingHowWeDo
        data-aos={dataAos}
        data-aos-easing={dataAosEasing}
        data-aos-anchor-placement={dataAosAnchorPlacement}
      >
        <S.TitleHowWeDo dangerouslySetInnerHTML={{ __html: title }} />
        <S.ContentHowWeDo>
          <S.TextHowWeDo dangerouslySetInnerHTML={{ __html: description }} />
        </S.ContentHowWeDo>
      </S.ExplainingHowWeDo>
      <S.CardListContainer
        data-aos={dataAos}
        data-aos-easing={dataAosEasing}
        data-aos-anchor-placement={dataAosAnchorPlacement}
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
