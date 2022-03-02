import { HTMLAttributes, PropsWithChildren } from 'react';
import * as S from './styles';

const Layout = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <S.Container {...props}>{children}</S.Container>
);

export { Layout };
