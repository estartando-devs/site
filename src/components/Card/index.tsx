import { ReactNode } from 'react';
import * as S from './styles';

export type CardProps = {
  children: ReactNode;
};

export const Card = ({ children, ...props }: CardProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);
