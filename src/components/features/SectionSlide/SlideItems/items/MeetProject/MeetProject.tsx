import React from "react";
import * as S from "./MeetProjectStyled";
import { IItem } from "../../SlideItems";
import Image from "next/image";

const MeetProject = ({ position }: IItem) => (
  <S.MPContainer bgColor="#161616" position={position}>
    <S.MPTitle>Conheça o projeto e nossa metodologia</S.MPTitle>
    <Image src="nossa-metodologia" width={276} height={307} alt="Nossa Metodologia"  />
    {/* <S.MPButtonNext
      src={slideBtn}
      alt="Clique e conheça nosso metodo"
      onClick={onNext}
    /> */}
  </S.MPContainer>
);

export default MeetProject;
