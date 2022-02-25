import * as S from './styles';
import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);

export { Button };
