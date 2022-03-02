import * as S from './styles';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

type LinkProps = {
  color?: 'primary' | 'purple';
  href: string;
};

const LinkWrapper = ({
  color = 'primary',
  children,
  href,
  ...props
}: PropsWithChildren<LinkProps>) => (
  <S.ContainerLink color={color} {...props}>
    <Link href={href}>{children}</Link>
  </S.ContainerLink>
);

export { LinkWrapper };
