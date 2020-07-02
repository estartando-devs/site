import styled from "styled-components";

interface ISectionContainer {
  bgColor?: String;
}

const SlideContainer = styled.div.attrs((props: ISectionContainer) => ({
  style: {
    backgroundColor: props.bgColor,
  },
}))<ISectionContainer>`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0 65px 0 20px;
  overflow: hidden;
  transition: 0.5s;
  transform: ${(props) => `translateX(${props.position * -100}%)`};
`;

const ButtonNext = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
`;

const ButtonPrevious = styled.img`
  position: absolute;
  top: 17px;
  left: 17px;
`;

export { SlideContainer, ButtonNext, ButtonPrevious };
