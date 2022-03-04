import Image from 'next/image';
import React from 'react';
import * as S from './styles';

type PropsCard = {
  image: string;
  textCard: string;
  variation: 'left' | 'right';
};

const StudentCharacteristicsCard = ({
  image,
  textCard,
  variation,
}: PropsCard) => {
  return (
    <S.CardContainer>
      <Image
        src={image}
        width="46px"
        height="46px"
        alt="ícone referente as categorias do aluno"
      />
      <S.Division />
      <S.TextCharacteristics>{textCard}</S.TextCharacteristics>
      {variation === 'left' ? (
        <S.FormatContainerLeft />
      ) : (
        <S.FormatContainerRight />
      )}
    </S.CardContainer>
  );
};

export { StudentCharacteristicsCard };
