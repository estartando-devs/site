/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps as NextImageProps } from 'next/legacy/image';
import * as S from './styles';

type PropsCard = {
  imageProps: NextImageProps;
  description: string;
};

export const StudentCharacteristicsCard = ({
  imageProps,
  description,
}: PropsCard) => (
  <S.CardContainer>
    <div className="curvature" />
    <Image {...imageProps} />
    <S.Division />
    <S.TextCharacteristics>{description}</S.TextCharacteristics>
  </S.CardContainer>
);
