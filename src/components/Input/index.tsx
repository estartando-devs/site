import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from './styles';
import { InputProps } from './types/InputProps';

export const Input = ({
  id,
  validation,
  placeholder,
  ...restProps
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const isError = errors && errors[id as string]?.message;

  return (
    <S.ContainerField>
      <S.Input
        isError={!!isError}
        {...register(id, validation)}
        {...restProps}
      />
      <S.Label htmlFor={id}>{placeholder}</S.Label>
      {isError && (
        <S.Error>{errors[id as string]?.message as ReactNode}</S.Error>
      )}
    </S.ContainerField>
  );
};
