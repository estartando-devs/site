import React, { useState } from "react";
import * as S from "./SectionSlideStyled";
import SlideItems from "./SlideItems";

const SectionSlide = () => {
  const [position, setPosition] = useState(0);

  const nextSlide = () => {
    setPosition(position + 1);
  };

  const previousSlide = () => {
    setPosition(position - 1);
  };

  const backToFirst = () => {
    setPosition(0);
  };

  return (
    <S.SectionSlideContainer id="SectionSlide">
      <SlideItems
        position={position}
        setNext={nextSlide}
        setPrevious={previousSlide}
        backToFirst={backToFirst}
      />
    </S.SectionSlideContainer>
  );
};

export default SectionSlide;
