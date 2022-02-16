import React from 'react';
import ReactLoading from 'react-loading';
import { IButton } from './IButton';
import * as S from './ButtonStyled';

const Button = ({
  variant = 'default',
  size = 'small',
  disabled,
  isLoading = false,
  children,
  ...rest
}: IButton) => (
  <S.ButtonContainer
    variant={variant}
    size={size}
    isLoading={isLoading}
    {...rest}
  >
    {isLoading ? (
      <ReactLoading type="spokes" height="20px" width="20px" />
    ) : (
      children
    )}
  </S.ButtonContainer>
);

export { Button };
