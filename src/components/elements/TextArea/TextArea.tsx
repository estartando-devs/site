import React from "react";
import { useFormikContext } from "formik";
import { TextAreaProps } from "./TextArea.model";
import * as S from "./TextAreaStyled";

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  name,
}) => {
  const { setFieldValue } = useFormikContext();
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setFieldValue(name, target?.value || "");
  };
  return (
    <S.TextArea
      placeholder={placeholder}
      name={name}
      type="textarea"
      component="textarea"
      onChange={(e: Event) => handleChange(e)}
    />
  );
};

export default TextArea;
