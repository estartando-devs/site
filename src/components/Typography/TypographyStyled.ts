import styled from 'styled-components';

interface IVariantProps {
  color?: string;
  weight?: string;
}

const h1 = styled.h1<IVariantProps>`
  font-size: ${(props) => props.theme.typography.h1?.fontSize};
  font-weight: ${(props) =>
    props.weight || `${props.theme.typography.h1?.fontWeight}`};
  font-family: ${(props) => `${props.theme.typography.h1?.fontFamily}`};
`;

const h2 = styled.h2<IVariantProps>`
  font-size: ${(props) => props.theme.typography.h2?.fontSize};
  font-weight: ${(props) =>
    props.weight || `${props.theme.typography.h2?.fontWeight}`};
  font-family: ${(props) => `${props.theme.typography.h2?.fontFamily}`};
`;

const body1 = styled.p<IVariantProps>`
  font-size: ${(props) => props.theme.typography.body1?.fontSize};
  font-weight: ${(props) =>
    props.weight || `${props.theme.typography.body1?.fontWeight}`};
  font-family: ${(props) => `${props.theme.typography.body1?.fontFamily}`};
`;

const Typographies = {
  h1,
  h2,
  body1,
};

export default Typographies;
