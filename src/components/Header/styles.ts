import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const BackgroundHeader = styled.div`
  position: 'absolute';
  height: '100%';
  width: '100%';
  &::after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(30, 30, 30, 0.7);
  }
`;

export const SectionHeader = styled.section`
  display: flex;
  z-index: 1;
  gap: 3rem;
  max-width: ${({ theme: { media } }) => media.desktop_fullhd};
  width: 100%;
  padding: 0 7.5rem;

  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    margin: 0 auto;
    padding: 0 7.5rem;
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
  }
`;

export const ContainerImage = styled.picture`
  margin-top: 1.25rem;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ContainerHeading = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 31.25rem;

  h1 {
    margin-bottom: 1rem;
    @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
      margin: 0;
    }
  }
`;

export const ContainerButton = styled.div`
  margin-top: 3rem;
  max-width: 15rem;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    max-width: 100%;
  }
`;
