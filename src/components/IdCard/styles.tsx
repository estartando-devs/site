import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    padding: 1.75rem 1.875rem;
  }
`;

export const CardBackground = styled.div`
  display: flex;
  width: 1290px;
  height: 720px;
  background-image: url('/bg-card-back.jpg');
  background-size: cover;
  padding: 3.125rem 5.75rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 13.4375rem;
  height: 4rem;
  background-image: url('/logoCard.svg');
  background-size: cover;
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PinImage = styled.div`
  width: 1rem;
  height: 1.25rem;
  background-image: url('/pin.svg');
  background-size: cover;
`;

export const LocalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5625rem;
  margin: 2rem 0 2.8125rem;
`;

export const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.5625rem;
`;

export const ImageContainer = styled.div`
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: url(#hexagon);
  background-image: linear-gradient(
    272.22deg,
    rgba(108, 99, 255, 0.61) -0.15%,
    rgba(0, 191, 166, 0.61) 97.5%
  );
  width: 24.75rem;
  height: 26.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4.9375rem;
`;

export const Image = styled.div<{ src: string; alt: string }>`
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: url(#hexagon);
  width: 24.375rem;
  height: 26.25rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;
