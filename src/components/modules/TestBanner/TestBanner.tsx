import React, { useState } from "react";
import * as S from "./TestBannerStyled";
import { Button } from "../../elements";
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
          Olá candidato, a nossa prova é hoje dia 28/07. Você poderá acessar
          apartir de 19:30 e deverá entregar até 20:30
        </S.TestDescription>
        <a target="_blank" rel="noopener noreferrer" href={testUrl}>
          <Button onClick={() => {}} size="medium" variant="secondary">
            Fazer Prova!
          </Button>
        </a>
      </S.TestBannerFullContent>
    </S.TestBannerContainer>
  );
};

export default TestBanner;
