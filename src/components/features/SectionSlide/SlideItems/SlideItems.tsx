import React from "react";
import * as S from "./SlideItemsStyled";
import { nossaMetodologia } from "../../../../shared/img";
import { slideBtn, slideBtn2, slideBtn3, slideBtn4 } from "../assets";

interface IItem {
  onNext: () => void;
  position?: number;
}

const FirstItem = ({ onNext, position }: IItem) => (
  <S.SectionContainer bgColor="#161616" position={position} >
    <S.SectionTitle>Conheça o projeto e nossa metodologia</S.SectionTitle>
    <S.SectionImage src={nossaMetodologia} alt="Nossa Metodologia" />
    <S.ButtonSlide src={slideBtn} alt="clique e conheça" onClick={() => onNext()} />
  </S.SectionContainer>
);

const SecondItem = ({ onNext, position }: IItem) => (
  <S.SectionContainer bgColor="#00BFA6" position={position}>
    <S.SectionTitle color="#3C3C3C">
      Nosso MÉTODO
    </S.SectionTitle>
    <S.Text>Nossa proposta de ensino coloca o aluno como protagonista. Incentivamos a autonomia e dedicação pessoal para o avanço no curso.</S.Text>
    <S.Text>Nossas aulas, com conteúdos práticos e bem hands-on, preparam os alunos para a realidade do mercado de trabalho.</S.Text>
    <S.Text>Além dos conteúdos específicos de cada curso, apresentamos as principais ferramentas Open Source exigidas pelo mercado e trabalhamos no desenvolvimento das softs-skills mais desejadas pelo mercado da tecnologia:</S.Text>
    <S.ButtonSlide src={slideBtn2} alt="clique e conheça" onClick={() => onNext()} />
  </S.SectionContainer>
);

const ThirdItem = ({ onNext, position }: IItem) => (
  <S.SectionContainer bgColor="#161616" position={position}>
    <S.SectionTitle>Terceiro Slide</S.SectionTitle>
    <S.ButtonSlide src={slideBtn3} alt="clique e conheça" onClick={() => onNext()} />
  </S.SectionContainer>
);

const FourthItem = ({ onNext, position }: IItem) => (
  <S.SectionContainer bgColor="#F7F7F7" position={position}>
    <S.SectionTitle>Quarto Slide</S.SectionTitle>
    <S.ButtonSlide src={slideBtn4} alt="clique e conheça" onClick={() => onNext()} />
  </S.SectionContainer>
);

interface ISlideItems {
  position: number;
  setNext: () => void;
}

const SlideItems = ({ position, setNext }: ISlideItems) => {
  const items = [
    <FirstItem onNext={setNext} />,
    <SecondItem onNext={setNext} />,
    <ThirdItem onNext={setNext} />,
    <FourthItem onNext={setNext} />,
  ];

  if (position > items.length - 1) return items[items.length - 1];

  return (
    <>
      <FirstItem onNext={setNext} position={position} />
      <SecondItem onNext={setNext} position={position} />
      <ThirdItem onNext={setNext} position={position} />
      <FourthItem onNext={setNext} position={position} />
    </>
  );
};

export default SlideItems;
