import styled from 'styled-components';

const CardContainer = styled.section`
  margin: 27px 30px 0 0;
  max-width: 320px;
  min-width: 208px;
  height: 100px;
  box-shadow: 6px 6px 8px -6px rgb(0 0 0 / 98%), -2px -2px 5px -5px white;
  padding: 5px 15px;
  position: relative;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #1e1e1e;
`;

const TextCharacteristics = styled.p`
  color: ${({ theme }) => theme.palette.design.white};
  font-weight: 400;
  font-size: 0.8rem;
`;

const Division = styled.div`
  background-color: #7b7a7a;
  height: 60%;
  width: 1px;
`;
const FormatContainerLeft = styled.div`
  width: 42px;
  height: 13px;
  background-color: #1e1e1e;
  position: absolute;
  top: -4px;
  left: 0;
  box-shadow: -4px -2px 5px -6px white;
  border-top-right-radius: 22px;
  border-top-left-radius: 5px;
  transform: rotateZ(16deg);
`;

const FormatContainerRight = styled.div`
  width: 42px;
  height: 13px;
  background-color: #1e1e1e;
  position: absolute;
  top: -5px;
  right: 2px;
  box-shadow: 3px -3px 3px -5px white;
  border-top-left-radius: 22px;
  border-top-right-radius: 5px;
  transform: rotateZ(-17deg);
}
`;

export {
  CardContainer,
  TextCharacteristics,
  Division,
  FormatContainerLeft,
  FormatContainerRight,
};
