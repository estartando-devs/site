import React from 'react';
import { useSocialButtons } from './useSocialButtons';
import * as S from './SocialShareButtonsStyled';
import Image from 'next/image';
import Link from 'next/link';

export const SocialShareButtons = () => {
  const { socialLinks } = useSocialButtons();

  return (
    <S.SocialShareContainer>
      {socialLinks.map(({ title, href, imageProps }) => (
        <Link key={title} href={href}>
          <a target="_blank">
            <S.SocialShareContent title={title}>
              <Image {...imageProps} />
            </S.SocialShareContent>
          </a>
        </Link>
      ))}
    </S.SocialShareContainer>
  );
};
