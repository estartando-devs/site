import styled from 'styled-components';

export const Container = styled.div`
  min-height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBackground = styled.div`
  display: flex;
  margin: 60px 30px;
  height: 720px;
  width: 1290px;
  background-image: url('/bg-card-back.jpg');
  background-size: cover;
  padding: 50px 92px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const PinImage = styled.div`
  width: 16px;
  height: 20px;
  background-image: url('/pin.svg');
  background-size: cover;
`;

export const LocalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const Logo = styled.div`
  width: 215px;
  height: 64px;
  background-image: url('/logoCard.svg');
  background-size: cover;
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
  /* background-color: #fff; */
  width: 396px;
  height: 425px;
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
  width: 390px;
  height: 420px;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;
