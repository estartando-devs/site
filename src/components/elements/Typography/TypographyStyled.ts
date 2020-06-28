import styled from "styled-components";

interface IVariantProps {
  color?: string;
  weight?: string;
}

const h1 = styled.h1<IVariantProps>`
  font-size: ${(props) => props.theme.typography.h1?.fontSize};
  color: ${(props) => props.color || props.theme.palette.text.primary};
  font-weight: ${(props) => props.weight || `${props.theme.typography.h1?.fontWeight}`};
`;

const h2 = styled.h2<IVariantProps>`
  font-size: ${(props) => props.theme.typography.h2?.fontSize};
  color: ${(props) => props.color || props.theme.palette.text.primary};
  font-weight: ${(props) => props.weight || `${props.theme.typography.h2?.fontWeight}`};
`;

const body1 = styled.p<IVariantProps>`
  font-size: ${(props) => props.theme.typography.body1?.fontSize};
  color: ${(props) => props.color || props.theme.palette.text.primary};
  font-weight: ${(props) => props.weight || `${props.theme.typography.body1?.fontWeight}`};
`;

const Typographies = {
  h1, h2, body1,
};

export default Typographies;
