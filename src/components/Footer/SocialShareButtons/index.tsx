import React from 'react';
import Link from 'next/link';
import { useSocialButtons } from '../../../hooks/useSocialButtons';
import * as S from './styles';

export const SocialShareButtons = () => {
  const { socialLinks } = useSocialButtons();

  return (
    <S.SocialShareContainer>
      {socialLinks.map(({ title, href, iconProps, icon: Icon }) => (
        <Link key={title} href={href}>
          <a target="_blank">
            <S.SocialShareContent title={title}>
              <Icon {...iconProps} />
            </S.SocialShareContent>
          </a>
        </Link>
      ))}
    </S.SocialShareContainer>
  );
};
