import React from "react";
import * as S from "./OurMethodStyled";
import { slideBtn2, iconBack } from "../../../assets";
import { IItem } from "../../SlideItems";
import { ButtonPrevious } from "../../SlideItemsStyled";

const OurMethod = ({ onPrevious, onNext, position }: IItem) => (
  <S.OMContainer bgColor="#00BFA6" position={position}>
    <ButtonPrevious src={iconBack} onClick={onPrevious} alt="Voltar" />
    <S.OMContent>
      <S.OMTitle>Nosso</S.OMTitle>
      <S.OMTitle isBold>MÉTODO</S.OMTitle>
      <S.OMText>
        Nossa proposta de ensino coloca o aluno como protagonista. Incentivamos
        a autonomia e dedicação pessoal para o avanço no curso.
      </S.OMText>
      <S.OMText>
        Nossas aulas, com conteúdos práticos e bem hands-on, preparam os alunos
        para a realidade do mercado de trabalho.
      </S.OMText>
      <S.OMText>
        Além dos conteúdos específicos de cada curso, apresentamos as principais
        ferramentas Open Source exigidas pelo mercado e trabalhamos no
        desenvolvimento das softs-skills mais desejadas pelo mercado da
        tecnologia:
      </S.OMText>
      <S.OMTagsContainer>
        <S.OMTagsBox>
          <S.OMTag>Colaboração</S.OMTag>
          <S.OMTag>Comunicação</S.OMTag>
        </S.OMTagsBox>
        <S.OMTagsBox justifyContent="space-around">
          <S.OMTag>Flexibilidade</S.OMTag>
          <S.OMTag>Criatividade</S.OMTag>
        </S.OMTagsBox>
      </S.OMTagsContainer>
    </S.OMContent>
    <S.OMButtonNext src={slideBtn2} alt="clique e conheça" onClick={onNext} />
  </S.OMContainer>
);

export default OurMethod;
