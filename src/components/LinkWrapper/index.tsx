import * as S from './styles';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

type LinkProps = {
  color?: 'primary' | 'purple' | 'white';
  href: string;
};

const LinkWrapper = ({
  color = 'primary',
  children,
  href,
  target,
  ...props
}: PropsWithChildren<LinkProps> & { target?: string }) => (
  <S.ContainerLink color={color} {...props}>
    <Link href={href}>{target && <a target={target}>{children}</a>}</Link>
  </S.ContainerLink>
);

export { LinkWrapper };
