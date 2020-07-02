import React from "react";
import * as S from "./StudentProfileStyled";
import { IItem } from "../../SlideItems";
import { ButtonPrevious, ButtonNext } from "../../SlideItemsStyled";
import { slideBtn3, iconBackWhite, studentImage } from "../../../assets";

const StudentProfile = ({ onPrevious, onNext, position }: IItem) => (
  <S.SPContainer bgColor="#161616" position={position}>
    <ButtonPrevious src={iconBackWhite} onClick={onPrevious} alt="Voltar" />
    <S.SPContent>
      <S.SPStudentImage src={studentImage} alt="Perfil do aluno" />
      <S.SPTitleBox>
        <S.SPTitle>PERFIL DO</S.SPTitle>
        <S.SPTitle isBold>ALUNO</S.SPTitle>
      </S.SPTitleBox>
      <S.SPText>
        Buscamos pessoas que gostem de desafios, sejam determinadas e
        responsáveis.
      </S.SPText>
      <S.SPText>
        Nossa formação é totalmente gratuita. A única coisa que cobramos é
        DEDICAÇÃO.
      </S.SPText>
      <S.SPText>
        Se você tem de 18 a 29 anos e mora no Rio de Janeiro, você pode se
        inscrever!
      </S.SPText>
      <S.SPText>
        É legal que você saiba usar mouse e teclado e pesquisar na internet, e
        tenha bastante disposição para estudar.
      </S.SPText>
      <S.SPText>
        Ah, é importante ter disponibilidade nas terças e quintas, de 19:30 às
        21:30, pois esse será o horário das aulas.
      </S.SPText>
    </S.SPContent>
    <ButtonNext src={slideBtn3} alt="clique e conheça" onClick={onNext} />
  </S.SPContainer>
);

export default StudentProfile;
