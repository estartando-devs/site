import React from "react";
import * as S from "./AboutUsStyled";
import SectionDev from "./components/SectionDev";
import SectionDesign from "./components/SectionDesign";

const AboutUs = () => (
  <S.AboutUsContainer>
    <S.BackgroundElementDecorListras />
    <span>
      <S.AboutUsTitle>
        O que
        <span> ensinamos</span>
      </S.AboutUsTitle>

      <S.InformationText>
        Acreditamos no poder de transformação social através da Tecnologia da Informação. Por isso,
        oferecemos uma formação objetiva e focada nas exigências do mercado de TI. Os dois cursos
        incluem ainda conhecimentos em métodos de gestão ágil de projetos utilizados no mercado para o
        desenvolvimento de trabalhos em equipe, além de assessoria no Linkedin e direcionamento de
        carreira.
      </S.InformationText>
    </span>

    <SectionDev />
    <SectionDesign />
  </S.AboutUsContainer>
);

export default AboutUs;
