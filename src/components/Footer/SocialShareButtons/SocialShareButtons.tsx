import React from 'react';
import { socialLinks } from './_mock';
import * as S from './SocialShareButtonsStyled';

export const SocialShareButtons = () => (
  <S.SocialShareContainer>
    {socialLinks.map(({ title }) => (
      <S.SocialShareContent key={title} title={title}>
        {title}
      </S.SocialShareContent>
    ))}
  </S.SocialShareContainer>
);
