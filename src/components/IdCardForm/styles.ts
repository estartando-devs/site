import Image from 'next/image';
import styled from 'styled-components';
import { Typography } from '../Typography';

export const Container = styled.div`
  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    padding: 2rem 15rem 2rem;
  }
  max-width: ${({ theme: { media } }) => media.laptops_landscape};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  padding: 3rem 2rem 2rem;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const IdCardSectionTitle = styled(Typography)`
  margin-bottom: 1rem;
  span {
    font-size: 2.75rem;
    line-height: 3.5rem;
    color: ${({
      theme: {
        palette: {
          design: { purple },
        },
      },
    }) => purple};
  }
`;

export const ImagePreview = styled(Image)`
  border-radius: 50%;
`;

export const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  font-size: 0.875rem;
  padding: 0.625rem 0.75rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.design.green_dark};
  }

  svg {
    height: 1rem;
    margin-right: 0.25rem;
  }
`;

export const ImagePreviewContainer = styled.div`
  background: url('/EDcard.jpeg') no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  max-width: 40rem;
  max-height: 20rem;
`;

export const ContainerCropper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding-top: 3rem;
`;

export const CropperWrapper = styled.div`
  height: 80%;
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

export const CropperActionsContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
