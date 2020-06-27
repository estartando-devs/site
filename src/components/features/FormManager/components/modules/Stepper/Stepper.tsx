import React from "react";

import * as S from "./StepperStyled";
import { StepperProps } from "react-step-wizard";
import images from "../../../../../../shared/img";

interface StepProps {
  action: Function;
  step: number;
  status: Array<boolean>;
  totalSteps: number;
}

const isDisabled = (step: number, status: Array<boolean>) => {
  return !(status[step - 1] || status[step]);
};

const Step: React.FC<StepProps> = ({ action, step, status, totalSteps }) => {
  const disabled = isDisabled(step, status);
  const showDivisor = totalSteps > step;
  const handleClick = () => {
    !disabled && action(step);
  };
  const generateKey = (_step: number, _disabled: boolean) =>
    `step${step}${disabled ? "Disabled" : ""}`;
  return (
    <>
      <S.StepIndicatorContainer disabled={disabled} onClick={handleClick}>
        <S.Icon src={images[generateKey(step, disabled)]} alt="" />
      </S.StepIndicatorContainer>
      {showDivisor && <S.StepDivisor disabled={isDisabled(step + 1, status)} />}
    </>
  );
};

const Stepper: React.FC<StepperProps> = ({
  goToStep = () => {},
  totalSteps = 1,
  status,
}) => {
  return (
    <S.Container>
      <Step
        action={goToStep}
        step={1}
        status={status}
        totalSteps={totalSteps}
      />
      <Step
        action={goToStep}
        step={2}
        status={status}
        totalSteps={totalSteps}
      />
      <Step
        action={goToStep}
        step={3}
        status={status}
        totalSteps={totalSteps}
      />
      <Step
        action={goToStep}
        step={4}
        status={status}
        totalSteps={totalSteps}
      />
    </S.Container>
  );
};

export default Stepper;
