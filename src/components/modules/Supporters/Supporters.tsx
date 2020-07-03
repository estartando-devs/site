import React from "react";
import * as S from "./SupportersStyled";
import { SupportersBrands } from "./assets";

interface ISupporterShare {
  icon: any;
  name: string;
  url: string;
}

const LinkToSupporter = ({ icon, name, url }: ISupporterShare) => (
  <a href={url} target="_blank" rel="noreferrer">
    <S.SupporterBrandLogo src={icon} alt={name} />
  </a>
);

const Supporters = () => (
  <S.SupporterShareContainer>
    <S.Title>
      Apoio:
    </S.Title>
    <S.SupporterButtons>
      {SupportersBrands.map((socialIcon) => (
        <LinkToSupporter key={socialIcon.name} {...socialIcon} />
      ))}
    </S.SupporterButtons>
  </S.SupporterShareContainer>
);

export default Supporters;
