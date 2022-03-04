import React from 'react';
import { StudentCharacteristicsCard } from '..';
import { listTextHowWeDo, characteristicsList } from '../../mocks';
import * as S from './styles';

export const HowWeDo = () => {
  return (
    <S.HowWeDoContainer>
      <S.ExplainingHowWeDo>
        <S.TitleHowWeDo>Como nós</S.TitleHowWeDo>
        <S.SubTitleHowWeDo>Fazemos</S.SubTitleHowWeDo>
        <S.ContentHowWeDo>
          {listTextHowWeDo.map((item) => (
            <S.TextHowWeDo
              key={item}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </S.ContentHowWeDo>
      </S.ExplainingHowWeDo>
      <S.CardListContainer>
        {characteristicsList.map(({ ...allProps }, index) => {
          if (index % 2 === 0) {
            return (
              <StudentCharacteristicsCard
                key={index}
                variation="right"
                {...allProps}
              />
            );
          }
          return (
            <StudentCharacteristicsCard
              key={index}
              variation="left"
              {...allProps}
            />
          );
        })}
      </S.CardListContainer>
    </S.HowWeDoContainer>
  );
};
