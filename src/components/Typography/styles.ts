import styled, { css } from 'styled-components';

type VariantProps = {
  color?: string;
  weight?: string;
};

const h1 = styled.h1<VariantProps>`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.h1?.fontSize};
    font-family: ${typography.h1?.fontFamily};
    font-weight: ${typography.h1?.fontWeight};
    letter-spacing: ${typography.h1?.letterSpacing};
    line-height: ${typography.h1?.lineHeight};
  `}
  color: ${({ color, theme }) => color || theme.palette.primary.main};
`;

const h2 = styled.h2<VariantProps>`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.h2?.fontSize};
    font-family: ${typography.h2?.fontFamily};
    font-weight: ${typography.h2?.fontWeight};
    line-height: ${typography.h2?.lineHeight};
  `}
  color: ${({ color, theme }) => color || theme.palette.design.white};
`;

const body1 = styled.p<VariantProps>`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.body1?.fontSize};
    font-family: ${typography.body1?.fontFamily};
    font-weight: ${typography.body1?.fontWeight};
    line-height: ${typography.body1?.lineHeight};
  `}
  color: ${({ color, theme }) => color || theme.palette.design.white};
`;

const body2 = styled.p<VariantProps>`
  ${({ theme: { typography } }) => css`
    font-size: ${typography.body2?.fontSize};
    font-family: ${typography.body2?.fontFamily};
    font-weight: ${typography.body2?.fontWeight};
    line-height: ${typography.body2?.lineHeight};
  `}
  color: ${({ color, theme }) => color || theme.palette.design.white};
`;

const Typographies = {
  h1,
  h2,
  body1,
  body2,
};

export default Typographies;
