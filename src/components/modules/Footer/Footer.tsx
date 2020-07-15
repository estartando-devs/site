import React from "react";
import * as S from "./FooterStyled";
import { SocialShareButtons } from "../SocialShareButtons";
import { Logo } from "../../elements";
import { Supporters } from "../Supporters";

const Footer = () => (
  <S.FooterContainer>
    <Supporters />
    <S.ContainerLogo>
      <Logo />
    </S.ContainerLogo>
    <SocialShareButtons />
  </S.FooterContainer>
);

export default Footer;
