import React from "react";
import * as S from "./SelectiveProcessStyled";
import { IItem } from "../../SlideItems";
import { iconBack, slideBtn2, dotStepTitle1 } from "../../../assets";
import { ButtonPrevious, ButtonNext } from "../../SlideItemsStyled";
import { selectiveProcessMock } from "../../../../../../_mocks";
// import config from "../../../../../../config/constants";

interface ISideStep {
  position: number;
  title: string;
  description: string;
}

function SideStep({ position, title, description }: ISideStep) {
  const isRight = (position + 1) % 2 === 1 || false; // 1 even, 0 odd

  return (
    <S.SideStepContainer>
      <S.StepContent>
        <S.StepTitleBox>
          <S.StepTitleDot isMobile right={isRight} src={dotStepTitle1} alt="" />
          <S.StepTitle right={isRight}>{title}</S.StepTitle>
        </S.StepTitleBox>
        <S.StepDescription>{description}</S.StepDescription>
        <S.StepTitleDot
          isMobile={false}
          right={isRight}
          src={dotStepTitle1}
          alt=""
        />
      </S.StepContent>
    </S.SideStepContainer>
  );
}

// function ButtonBox() {
//   return (
//     <S.ButtonContainer>
//       <S.ButtonBox>
//         <S.ButtonLink target="blank" href={config.INSCRICOES_URL}>
//           <S.StepButton onClick={() => {}}>Faça Parte!</S.StepButton>
//         </S.ButtonLink>
//       </S.ButtonBox>
//     </S.ButtonContainer>
//   );
// }

function SelectiveProcess({ position, onNext, onPrevious }: IItem) {
  return (
    <S.SelectiveProcessContainer bgColor="#D3D3D3" position={position}>
      <ButtonPrevious src={iconBack} onClick={onPrevious} alt="Voltar" />
      <S.SelectiveProcessContent>
        <S.SectionHeader>
          <div>
            <S.SelectiveProcessTitle>PROCESSO</S.SelectiveProcessTitle>
            <S.SelectiveProcessTitle>
              <b>SELETIVO</b>
            </S.SelectiveProcessTitle>
            <S.SelectiveProcessText>
              Nosso processo seletivo é dividido em 3 etapas:
            </S.SelectiveProcessText>
          </div>
        </S.SectionHeader>
        <S.StepsContainer>
          <S.VerticalLine />
          {selectiveProcessMock.map((step, index) => (
            <SideStep key={step.title} position={index} {...step} />
          ))}
        </S.StepsContainer>
        {/* <ButtonBox /> */}
      </S.SelectiveProcessContent>
      <ButtonNext src={slideBtn2} alt="clique e conheça" onClick={onNext} />
    </S.SelectiveProcessContainer>
  );
}

export default SelectiveProcess;
