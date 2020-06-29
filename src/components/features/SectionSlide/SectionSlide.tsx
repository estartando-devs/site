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

  return (
    <S.SectionSlideContainer id="SectionSlide">
      <SlideItems
        position={position}
        setNext={nextSlide}
        onPrevious={previousSlide}
      />
    </S.SectionSlideContainer>
  );
};

export default SectionSlide;
