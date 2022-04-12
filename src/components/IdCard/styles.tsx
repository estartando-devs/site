import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    padding: 3.75rem 1.875rem;
  }
`;

export const CardBackground = styled.div`
  display: flex;
  max-width: 1290px;
  max-height: 720px;
  height: 100%;
  width: 100%;
  background-image: url('/bg-card-back.jpg');
  background-size: cover;
  padding: 3.125rem 5.75rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
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
  width: 18.75rem;
  height: 20.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 18.375rem;
  height: 20.25rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;
