import Image, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';
import * as S from './styles';

type PropsCard = {
  imageProps: NextImageProps;
  description: string;
};

export const StudentCharacteristicsCard = ({
  imageProps,
  description,
}: PropsCard) => {
  return (
    <S.CardContainer>
      <div className="curvature" />
      <Image {...imageProps} />
      <S.Division />
      <S.TextCharacteristics>{description}</S.TextCharacteristics>
    </S.CardContainer>
  );
};
