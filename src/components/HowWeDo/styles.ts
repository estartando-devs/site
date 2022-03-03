import styled from 'styled-components';

const HowWeDoContainer = styled.section`
  width: 100%;
  margin: 60px 30px 60px 50px;
  display: flex;

  @media (max-width: 918px) {
    flex-direction: column;
    margin-left: 12px;
  }
`;

const ExplainingHowWeDo = styled.section`
  width: 50%;
  margin-right: 210px;
  max-width: 500px;

  @media (max-width: 918px) {
    margin-right: 0;
    width: 100%;
    max-width: 100%;
  }
`;

const ContentHowWeDo = styled.section`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MoveCard = styled.div`
  margin-left: 130px;
  @media (max-width: 445px) {
    margin-left: 0;
  }
`;

const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30%;
  max-width: 100%;
`;

const TextHowWeDo = styled.p`
  color: ${({ theme }) => theme.palette.design.white};
`;

const TitleHowWeDo = styled.h1`
  color: ${({ theme }) => theme.palette.design.white};
  font-size: 2.2rem;
`;

const SubTitleHowWeDo = styled.h2`
  color: ${({ theme }) => theme.palette.design.green};
  font-size: 3.2rem;
`;

const TextBold = styled.span`
  color: ${({ theme }) => theme.palette.design.green};
`;

export {
  HowWeDoContainer,
  ContentHowWeDo,
  ExplainingHowWeDo,
  TitleHowWeDo,
  SubTitleHowWeDo,
  CardListContainer,
  MoveCard,
  TextBold,
  TextHowWeDo,
};
