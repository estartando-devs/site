import { useMemo } from 'react';

type SocialImageProps = {
  src: string;
  width: string | number;
  height: string | number;
  alt: string;
};

type SocialLink = {
  imageProps: SocialImageProps;
  title: string;
  href: string;
};

export const useSocialButtons = () => {
  const socialLinks: Array<SocialLink> = useMemo(
    () => [
      {
        imageProps: {
          src: '/icons/instagram.svg',
          width: 24,
          height: 24,
          alt: 'Logo instagram',
        },
        title: 'Seguir nosso perfil no instagram.',
        href: 'https://www.instagram.com/estartandodevs/',
      },
      {
        imageProps: {
          src: '/icons/linkedin.svg',
          width: 24,
          height: 24,
          alt: 'Logo linkedin',
        },
        title: 'Acessar página no linkedin.',
        href: 'https://br.linkedin.com/company/estartando-devs',
      },
      {
        imageProps: {
          src: '/icons/discord.svg',
          width: 24,
          height: 24,
          alt: 'Logo discord',
        },
        title: 'Acessar comunidade no discord.',
        href: '#',
      },
    ],
    []
  );

  return {
    socialLinks,
  };
};
