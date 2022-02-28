import { useMemo } from 'react';
import {
  DiscordAlt,
  InstagramAlt,
  LinkedinSquare,
} from '@styled-icons/boxicons-logos';
import { useTheme } from 'styled-components';

type SocialIconProps = {
  width: string | number;
  height: string | number;
  alt: string;
  color: string;
};

type SocialLink = {
  iconProps: SocialIconProps;
  title: string;
  href: string;
  icon?: any;
};

export const useSocialButtons = () => {
  const theme = useTheme();

  const socialLinks: Array<SocialLink> = useMemo(
    () => [
      {
        iconProps: {
          width: 24,
          height: 24,
          alt: 'Logo instagram',
          color: theme.palette.design.white,
        },
        title: 'Seguir nosso perfil no instagram.',
        href: 'https://www.instagram.com/estartandodevs/',
        icon: InstagramAlt,
      },
      {
        iconProps: {
          width: 24,
          height: 24,
          alt: 'Logo linkedin',
          color: theme.palette.design.white,
        },
        title: 'Acessar página no linkedin.',
        href: 'https://br.linkedin.com/company/estartando-devs',
        icon: LinkedinSquare,
      },
      {
        iconProps: {
          width: 24,
          height: 24,
          alt: 'Logo discord',
          color: theme.palette.design.white,
        },
        title: 'Acessar comunidade no discord.',
        href: '#',
        icon: DiscordAlt,
      },
    ],
    [theme]
  );

  return {
    socialLinks,
  };
};
