import React from "react";
import { Form } from "formik";

import { Input } from "../../../../../elements/Input";
import { Button } from "../../../../../elements/Button";
import * as S from "./PersonalDataStyled";
import { typeMask } from "../../../../../../utils/masks";

interface IProps {
  nextStep?: Function;
}

const PersonalData: React.FC<IProps> = ({ nextStep = () => {} }) => {
  // const handlePrev = () => {
  //   props.previousStep();
  // };
  const handleNext = () => {
    nextStep();
  };
  return (
    <Form>
      <Input label="Seu nome completo" name="fullName" />
      <Input label="Seu email" name="email" />
      <Input
        label="Quando você nasceu"
        name="dateBirth"
        width="70%"
        mask={typeMask.date}
      />
      <Input
        label="Seu telefone"
        name="phone"
        width="70%"
        mask={typeMask.phone}
      />
      <Input
        label="Cep (é opcional)"
        name="zipcode"
        width="90%"
        mask={typeMask.cep}
      />
      <Input label="Seu endereço" name="address" />
      <S.ButtonsContainer>
        <Button onClick={handleNext}>Avançar</Button>
      </S.ButtonsContainer>
    </Form>
  );
};

export default PersonalData;
