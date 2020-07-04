import React from "react";
import * as S from "./SocialShareButtonsStyled";
import { SocialShareIcons } from "./assets";

interface ISocialShare {
  icon: any;
  name: string;
  url: string;
}

const ShareBtn = ({ icon, name, url }: ISocialShare) => (
  <S.ShareLink href={url} target="_blank">
    <S.SocialIcon src={icon} alt={name} />
  </S.ShareLink>
);

const SocialShareButtons = () => (
  <S.SocialShareContainer>
    <S.SocialShareContent>
      <S.Title>Segue a gente</S.Title>
      <S.SocialButtons>
        {SocialShareIcons.map((socialIcon) => (
          <ShareBtn key={socialIcon.name} {...socialIcon} />
        ))}
      </S.SocialButtons>
    </S.SocialShareContent>
  </S.SocialShareContainer>
);

export default SocialShareButtons;
