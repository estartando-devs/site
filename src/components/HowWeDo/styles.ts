import styled from 'styled-components';

const HowWeDoContainer = styled.section`
  width: 100%;
  margin: 4rem 2rem 4rem 2rem;
  display: flex;

  @media (max-width: 918px) {
    flex-direction: column;
    margin-left: 1rem;
  }
`;

const ExplainingHowWeDo = styled.section`
  width: 50%;
  margin-right: 16.5rem;
  max-width: 28.7rem;

  @media (max-width: 918px) {
    margin-right: 0;
    width: 100%;
    max-width: 100%;
  }
`;

const ContentHowWeDo = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30%;
  max-width: 100%;

  section:nth-child(2n + 1) {
    margin-left: 9rem;

    @media (max-width: 445px) {
      margin-left: 0;
    }
  }
`;

const TextHowWeDo = styled.p`
  color: ${({ theme }) => theme.palette.design.white};

  strong {
    color: ${({ theme }) => theme.palette.design.green};
  }
`;

const TitleHowWeDo = styled.h1`
  color: ${({ theme }) => theme.palette.design.white};
  font-size: 2.2rem;
`;

const SubTitleHowWeDo = styled.h2`
  color: ${({ theme }) => theme.palette.design.green};
  font-size: 3.2rem;
`;

export {
  HowWeDoContainer,
  ContentHowWeDo,
  ExplainingHowWeDo,
  TitleHowWeDo,
  SubTitleHowWeDo,
  CardListContainer,
  TextHowWeDo,
};
