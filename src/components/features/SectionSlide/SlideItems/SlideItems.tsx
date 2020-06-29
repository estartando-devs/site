import React from "react";
import Slides from "./items/index";

export interface IItem {
  onPrevious?: () => void;
  onNext?: () => void;
  position?: number;
}

interface ISlideItems {
  position: number;
  onPrevious?: () => void;
  setNext?: () => void;
}

const SlideItems = ({ position, setNext, onPrevious }: ISlideItems) => {
  const items: JSX.Element[] = [
    <Slides.FirstSlide onNext={setNext} />,
    <Slides.SecondSlide onNext={setNext} />,
  ];

  if (position > items.length - 1) return items[items.length - 1];

  return (
    <>
      <Slides.FirstSlide onNext={setNext} position={position} />
      <Slides.SecondSlide
        onPrevious={onPrevious}
        onNext={onPrevious}
        position={position}
      />
    </>
  );
};

export default SlideItems;
