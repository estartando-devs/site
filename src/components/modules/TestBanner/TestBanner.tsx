import React, { useState } from "react";
import * as S from "./TestBannerStyled";
import { testUrl } from "../../../config/constants";
import { getImage } from "../../../shared/img";

const TestBanner = () => {
  const [openFull, setOpenFull] = useState(false);

  const toggleAccordion = () => {
    setOpenFull(!openFull);
  };

  return (
    <S.TestBannerContainer open={openFull}>
      <S.BannerAccordion>
        <S.TesteBannerTitle variant="h2">Prova Online</S.TesteBannerTitle>
        <S.ArrowIcon
          src={getImage("iconArrow")}
          alt="Abrir/Fechar"
          onClick={() => toggleAccordion()}
          open={openFull}
        />
      </S.BannerAccordion>
      <S.TestBannerFullContent open={openFull}>
        <S.TestDescription variant="body1">
          Olá! A nossa prova é hoje, dia 02/03. Você poderá acessar a partir de
          19:30h, e deverá ser finalizada até 20:30h.
        </S.TestDescription>
        <a target="_blank" rel="noopener noreferrer" href={testUrl}>
          <S.Button onClick={() => {}} size="medium" variant="secondary">
            Fazer a prova!
          </S.Button>
        </a>
      </S.TestBannerFullContent>
    </S.TestBannerContainer>
  );
};

export default TestBanner;
