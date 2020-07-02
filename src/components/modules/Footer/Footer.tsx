import React from "react";
import * as S from "./FooterStyled";
import { SocialShareButtons } from "../SocialShareButtons";
import { Logo } from "../../elements";

const Footer = () => (
  <S.FooterContainer>
    <Logo />
    <SocialShareButtons />
  </S.FooterContainer>
);

export default Footer;
