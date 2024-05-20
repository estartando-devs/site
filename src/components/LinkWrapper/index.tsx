import Link from 'next/link';
import { PropsWithChildren } from 'react';
import * as S from './styles';

type LinkProps = {
  color?: 'primary' | 'purple' | 'white';
  href: string;
  legacyBehavior?: boolean;
};

const LinkWrapper = ({
  color = 'primary',
  children,
  href,
  legacyBehavior,
  ...props
}: PropsWithChildren<LinkProps>) => (
  <S.ContainerLink color={color} {...props}>
    <Link href={href} legacyBehavior={legacyBehavior}>
      {children}
    </Link>
  </S.ContainerLink>
);

export { LinkWrapper };
