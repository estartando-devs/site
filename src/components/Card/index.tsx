import { HTMLAttributes, PropsWithChildren } from 'react';
import * as S from './styles';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, ...props }: PropsWithChildren<CardProps>) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);
