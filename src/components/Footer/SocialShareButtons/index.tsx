import Link from 'next/link';
import { useSocialButtons } from '../../../hooks/useSocialButtons';
import * as S from './styles';

export const SocialShareButtons = () => {
  const { socialLinks } = useSocialButtons();

  return (
    <S.SocialShareContainer>
      {socialLinks.map(({ title, href, iconProps, icon: Icon }) => (
        <Link key={title} href={href} target="_blank" rel="noreferrer noopener">
          <S.SocialShareContent title={title}>
            <Icon {...iconProps} />
          </S.SocialShareContent>
        </Link>
      ))}
    </S.SocialShareContainer>
  );
};
