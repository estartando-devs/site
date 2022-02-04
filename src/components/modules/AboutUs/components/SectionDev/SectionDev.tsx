import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as S from "./SectionDevStyled";

const SectionDev: React.FC<{ setView: Function }> = ({ setView }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    setView(inView);
  }, [inView, setView]);

  return (
    <S.SectionDev ref={ref}>
      <S.TextContentWrapper>
        <S.SectionTitle>Desenvolvimento Web</S.SectionTitle>

        <S.SectionDescription>
          Sabe aquele aplicativo que você usa todos os dias? Aqui você vai
          aprender o que está por trás dele. Entramos no mundo do
          densenvolvimento de aplicações mobile e web, utilizando JavaScript com
          React (tecnologia criada pelo Facebook).
        </S.SectionDescription>
      </S.TextContentWrapper>

      <S.ImageWrapper rightPosition>
      </S.ImageWrapper>
    </S.SectionDev>
  );
};

export default SectionDev;
