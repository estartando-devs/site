import React from "react";
import * as S from "./MeetProjectStyled";
import { IItem } from "../../SlideItems";
import { nossaMetodologia } from "../../../../../../shared/img";
import { slideBtn } from "../../../assets";

const MeetProject = ({ onNext, position }: IItem) => (
  <S.MPContainer bgColor="#161616" position={position}>
    <S.MPTitle>Conheça o projeto e nossa metodologia</S.MPTitle>
    <S.MPImage src={nossaMetodologia} alt="Nossa Metodologia" />
    <S.MPButtonNext
      src={slideBtn}
      alt="Clique e conheça nosso metodo"
      onClick={onNext}
    />
  </S.MPContainer>
);

export default MeetProject;
