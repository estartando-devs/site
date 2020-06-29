import React from "react";
import Slides from "./items/index";

export interface IItem {
  onPrevious?: () => void;
  onNext?: () => void;
  position?: number;
}

interface ISlideItems {
  position: number;
  setPrevious?: () => void;
  setNext?: () => void;
}

const SlideItems = ({ position, setNext, setPrevious }: ISlideItems) => {
  const items: JSX.Element[] = [
    <Slides.FirstSlide onNext={setNext} />,
    <Slides.SecondSlide onNext={setNext} />,
    <Slides.ThirdSlide onNext={setNext} />,
    <Slides.FourthSlide onNext={setNext} />,
  ];

  if (position > items.length - 1) return items[items.length - 1];

  return (
    <>
      <Slides.FirstSlide onNext={setNext} position={position} />
      <Slides.SecondSlide
        onPrevious={setPrevious}
        onNext={setNext}
        position={position}
      />
      <Slides.ThirdSlide
        onPrevious={setPrevious}
        onNext={setNext}
        position={position}
      />
      <Slides.FourthSlide
        onPrevious={setPrevious}
        onNext={setPrevious}
        position={position}
      />
    </>
  );
};

export default SlideItems;
