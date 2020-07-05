import React from "react";
import * as S from "./SectionDesignStyled";
import { getImage } from "../../../../../shared/img";

const SectionDesign = () => (
  <S.SectionDesign>
    <S.TextContentWrapper>
      <S.SectionTitle>Design UI/UX</S.SectionTitle>

      <S.SectionDescription>
        Nessa formação você vai conhecer os princípios e fundamentos de design,
        aprender a criar protótipos de sites e aplicativos com base na
        experiência do usuário, além de partcipar da criação de produtos
        digitais.
      </S.SectionDescription>
    </S.TextContentWrapper>

    <S.ImageWrapper leftPosition>
      <S.DesignImage src={getImage("imgDesign")} alt="imagem design" />
    </S.ImageWrapper>
  </S.SectionDesign>
);

export default SectionDesign;
