import styled from 'styled-components';

const CardContainer = styled.section`
  margin: 1.6rem 1.8rem 0 0;
  max-width: 20rem;
  min-width: 13rem;
  height: 6.2rem;
  box-shadow: 0.3rem 0.3rem 0.5rem -0.3rem rgb(0 0 0 / 98%),
    -0.1rem -0.1rem 0.3rem -0.3rem white;
  padding: 0.3rem 0.9rem;
  position: relative;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
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
  width: 0.06rem;
`;
const FormatContainerLeft = styled.div`
  width: 2.625rem;
  height: 0.812rem;
  background-color: #1e1e1e;
  position: absolute;
  top: -0.275rem;
  left: 0;
  box-shadow: -0.25rem -0.125rem 0.312rem -0.375rem white;
  border-top-right-radius: 1.375rem;
  border-top-left-radius: 0.312rem;
  transform: rotateZ(16deg);
`;

const FormatContainerRight = styled.div`
  width: 2.625rem;
  height: 0.81rem;
  background-color: #1e1e1e;
  position: absolute;
  top: -0.3125rem;
  right: 0.125rem;
  box-shadow: 0.1875rem -0.1875rem 0.1875rem -0.3125rem white;
  border-top-left-radius: 1.375rem;
  border-top-right-radius: 0.3125rem;
  transform: rotateZ(-17deg);
`;

export {
  CardContainer,
  TextCharacteristics,
  Division,
  FormatContainerLeft,
  FormatContainerRight,
};