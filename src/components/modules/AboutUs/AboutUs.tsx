import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import * as S from "./AboutUsStyled";
import SectionDev from "./components/SectionDev";
import SectionDesign from "./components/SectionDesign";

const AboutUs = () => {
  const [viewAbout, setViewAbout] = useState(false);
  const [viewCourses, setViewCourses] = useState(false);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    setViewAbout(inView);
  }, [inView]);

  const bgGreen = !viewAbout && viewCourses;

  const handleSetViewCourses = (_viewCourses: boolean) => {
    setViewCourses(_viewCourses);
  };

  return (
    <S.AboutUsContainer bgGreen={bgGreen}>
      <S.BackgroundElementDecorListras />
      <span>
        <S.AboutUsTitle ref={ref}>
          O que
          <span> ensinamos</span>
        </S.AboutUsTitle>

        <S.InformationText>
          Acreditamos no poder de transformação social através da Tecnologia da
          Informação. Por isso, oferecemos uma formação objetiva e focada nas
          exigências do mercado de TI. Os dois cursos incluem ainda
          conhecimentos em métodos de gestão ágil de projetos utilizados no
          mercado para o desenvolvimento de trabalhos em equipe, além de
          assessoria no Linkedin e direcionamento de carreira.
        </S.InformationText>
      </span>

      <SectionDev setView={handleSetViewCourses} />
      <SectionDesign />
    </S.AboutUsContainer>
  );
};

export default AboutUs;
