import React from "react";
import * as S from "./FooterStyled";
import { SocialShareButtons } from "../SocialShareButtons";
import { Logo } from "../../elements";
import { Supporters } from "../Supporters";

const Footer = () => (
  <S.FooterContainer>
    <Supporters />
    <Logo />
    <SocialShareButtons />
  </S.FooterContainer>
);

export default Footer;
