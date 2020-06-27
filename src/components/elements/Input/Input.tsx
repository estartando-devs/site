import React from "react";
import { useFormikContext, useField } from "formik";
import * as S from "./InputStyled";
import { masks, typeMask } from "../../../utils/masks";

interface InputProps {
  label: string;
  width?: string;
  type?: string;
  name: string;
  mask?: typeMask;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  mask,
  width = "100%",
}) => {
  const { setFieldValue } = useFormikContext();
  const [, { error, touched }] = useField(name);
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const maskedValue = masks[mask || "standard"](target?.value || "");
    setFieldValue(name, maskedValue);
  };
  const hasError = Boolean(error && touched);
  return (
    <S.InputContainer width={width}>
      <S.Label error={hasError}>{label}</S.Label>
      <S.Input
        placeholder=""
        type={type}
        name={name}
        error={touched ? error : ""}
        onChange={(e: Event) => handleChange(e)}
      />
      <S.ErrorMessageStyled name={name} component="div" />
    </S.InputContainer>
  );
};

export default Input;
