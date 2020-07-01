import React from "react";
import * as S from "./SelectiveProcessStyled";
import { IItem } from "../../SlideItems";
import { iconBack, slideBtn2, dotStepTitle1 } from "../../../assets";
import { ButtonPrevious, ButtonNext } from "../../SlideItemsStyled";
import { selectiveProcessMock } from "../../../../../../_mocks";

interface ISideStep {
  position: number;
  title: string;
  description: string;
}

const SideStep = ({ position, title, description }: ISideStep) => {
  const isRight = (position + 1) % 2 === 1 || false; // 1 even, 0 odd

  return (
    <S.SideStepContainer>
      <S.StepContent>
        <S.StepTitleBox>
          <S.StepTitleDot right={isRight} src={dotStepTitle1} alt="" />
          <S.StepTitle right={isRight}>{title}</S.StepTitle>
        </S.StepTitleBox>
        <S.StepDescription>{description}</S.StepDescription>
      </S.StepContent>
    </S.SideStepContainer>
  );
};

const SelectiveProcess = ({ position, onNext, onPrevious }: IItem) => (
  <S.SelectiveProcessContainer bgColor="#D3D3D3" position={position}>
    <ButtonPrevious src={iconBack} onClick={onPrevious} alt="Voltar" />
    <S.SelectiveProcessContent>
      <S.SelectiveProcessTitle>PROCESSO</S.SelectiveProcessTitle>
      <S.SelectiveProcessTitle isBold>SELETIVO</S.SelectiveProcessTitle>
      <S.SelectiveProcessText>
        Nosso processo seletivo é dividido em 3 etapas:
      </S.SelectiveProcessText>
      <S.StepsContainer>
        <S.VerticalLine />
        {selectiveProcessMock.map((step, index) => (
          <SideStep key={step.title} position={index} {...step} />
        ))}
      </S.StepsContainer>
      <S.ButtonContainer>
        <S.ButtonBox>
          <a href="/inscricao">
            <S.StepButton onClick={() => {}}>Faça Parte!</S.StepButton>
          </a>
        </S.ButtonBox>
      </S.ButtonContainer>
    </S.SelectiveProcessContent>
    <ButtonNext src={slideBtn2} alt="clique e conheça" onClick={onNext} />
  </S.SelectiveProcessContainer>
);

export default SelectiveProcess;
