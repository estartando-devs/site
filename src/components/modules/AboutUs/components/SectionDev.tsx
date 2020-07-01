import React from "react";
import * as S from "./SectionsStyled";
import { getImage } from "../../../../shared/img";

const SectionDev = () => (
  <S.SectionDev>
    <S.TextContentWrapper>
      <S.SectionTitle>
        Desenvolvimento Web
      </S.SectionTitle>

      <S.SectionDescription>
        Sabe aquele aplicativo que você usa todos os dias? Aqui você vai aprender o que está por
        trás dele. Entramos no mundo do densenvolvimento de aplicações mobile e web, utilizando
        JavaScript com React (tecnologia criada pelo Facebook).
      </S.SectionDescription>
    </S.TextContentWrapper>

    <S.ImageWrapper rightPosition>
      <S.Points src={getImage("Points")} />
      <S.DevImage src={getImage("imgDev")} alt="imagem desenvolvedor" />
      <S.Triangle src={getImage("triangle")} />
    </S.ImageWrapper>
  </S.SectionDev>
);

export default SectionDev;
