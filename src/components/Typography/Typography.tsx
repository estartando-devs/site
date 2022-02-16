import React from 'react';
import Typographies from './TypographyStyled';

interface ITypography {
  children?: string;
  variant: 'h1' | 'h2' | 'body1';
  color?: string;
  weight?: string;
}

const TypographyDefaultProps: ITypography = {
  variant: 'body1',
};

const Typography = ({
  children,
  variant,
  color,
  weight,
  ...otherStyles
}: ITypography) => {
  const Element = Typographies[variant];

  return (
    <Element color={color} weight={weight} {...otherStyles}>
      {children}
    </Element>
  );
};

Typography.defaultProps = TypographyDefaultProps;

export default Typography;
