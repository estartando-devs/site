import Image, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';
import * as S from './styles';

type PropsCard = {
  imageProps: NextImageProps;
  description: string;
  variation: 'left' | 'right';
};

export const StudentCharacteristicsCard = ({
  imageProps,
  description,
  variation,
}: PropsCard) => {
  return (
    <S.CardContainer variation={variation}>
      <Image {...imageProps} />
      <S.Division />
      <S.TextCharacteristics>{description}</S.TextCharacteristics>
      {variation === 'left' ? (
        <S.FormatContainerLeft />
      ) : (
        <S.FormatContainerRight />
      )}
    </S.CardContainer>
  );
};
