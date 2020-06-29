import React from "react";
import * as S from "./SelectiveProcessStyled";
import { IItem } from "../../SlideItems";
import { iconBack, slideBtn2 } from "../../../assets";
import { ButtonPrevious, ButtonNext } from "../../SlideItemsStyled";

const SelectiveProcess = ({ position, onNext, onPrevious }: IItem) => (
  <S.SelectiveProcessContainer bgColor="#D3D3D3" position={position}>
    <ButtonPrevious src={iconBack} onClick={onPrevious} alt="Voltar" />
    <S.SelectiveProcessContent>
      <S.SelectiveProcessTitle>PROCESSO</S.SelectiveProcessTitle>
      <S.SelectiveProcessTitle isBold>SELETIVO</S.SelectiveProcessTitle>
      <S.SelectiveProcessText>
        Nosso processo seletivo é dividido em 3 etapas:
      </S.SelectiveProcessText>
      <S.SelectiveProcessSubTitle>
        TESTE DE CLASSIFICAÇÃO
      </S.SelectiveProcessSubTitle>
      <S.SelectiveProcessText>
        Uma prova de raciocínio lógico. Simples e objetiva. Funciona como uma
        classificação de acordo com o número de vagas.
      </S.SelectiveProcessText>
      <S.SelectiveProcessSubTitle>HACKATHON</S.SelectiveProcessSubTitle>
      <S.SelectiveProcessText>
        Como você trabalha em equipe? Além de conhecermos melhor suas
        habilidades, você já se prepara para as ferramentas que serão usadas ao
        longo do curso.
      </S.SelectiveProcessText>
      <S.SelectiveProcessSubTitle>
        BATE-PAPO COM O TIME
      </S.SelectiveProcessSubTitle>
      <S.SelectiveProcessText>
        Aqui a gente se conhece melhor e seleciona os candidatos que se encaixam
        melhor com o nosso perfil.
      </S.SelectiveProcessText>
      <S.Button
        onClick={() => window.open("https://estartandodevs.com.br", "_blank")}
      >
        Faça Parte!
      </S.Button>
    </S.SelectiveProcessContent>
    <ButtonNext src={slideBtn2} alt="clique e conheça" onClick={onNext} />
  </S.SelectiveProcessContainer>
);

export default SelectiveProcess;
