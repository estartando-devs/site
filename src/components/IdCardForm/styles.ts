import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 30rem;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
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
  padding: 0 2rem;
  background-size: contain;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 30rem;
  max-height: 30rem;
`;
