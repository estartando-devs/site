import { HTMLAttributes, PropsWithChildren } from 'react';
import * as S from './styles';

export const Layout = ({
  children,
  full = false,
  ...props
}: { full?: boolean } & PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <S.Container full={full} {...props}>
    {children}
  </S.Container>
);
