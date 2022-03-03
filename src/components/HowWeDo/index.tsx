import React from 'react';
import { StudentCharacteristicsCard } from '..';
import { characteristicsList } from '../../mocks/studentCharacteristics';
import * as S from './styles';

export const HowWeDo = () => {
  return (
    <S.HowWeDoContainer>
      <S.ExplainingHowWeDo>
        <S.TitleHowWeDo>Como nós</S.TitleHowWeDo>
        <S.SubTitleHowWeDo>Fazemos</S.SubTitleHowWeDo>
        <S.ContentHowWeDo>
          <S.TextHowWeDo>
            Nossa proposta de ensino coloca o aluno como protagonista.
            Incentivamos a <S.TextBold>autonomia</S.TextBold> e
            <S.TextBold> dedicação</S.TextBold>
            <S.TextBold> pessoal</S.TextBold> para o avanço no curso.
          </S.TextHowWeDo>
          <S.TextHowWeDo>
            Nossas aulas, com conteúdos práticos e bem
            <S.TextBold> hands-on</S.TextBold>, preparam os alunos para a
            realidade do mercado de trabalho.
          </S.TextHowWeDo>
          <S.TextHowWeDo>
            Além dos conteúdos específicos de cada curso, apresentamos as
            principais ferramentas Open Source exigidas pelo mercado e
            trabalhamos no desenvolvimento das softs-skills mais desejadas pelo
            mercado da tecnologia: <S.TextBold> colaboração </S.TextBold>,
            <S.TextBold> comunicação</S.TextBold>,
            <S.TextBold> criatividade </S.TextBold> e
            <S.TextBold> flexibilidade</S.TextBold>.
          </S.TextHowWeDo>
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
