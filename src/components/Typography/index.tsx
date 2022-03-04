import React, { HTMLAttributes, PropsWithChildren } from 'react';
import Typographies from './styles';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'body3';
  color?: string;
  weight?: string;
} & HTMLAttributes<HTMLHeadingElement>;

const TypographyDefaultProps: TypographyProps = {
  variant: 'body1',
};

const Typography = ({
  variant,
  color,
  weight,
  children,
  ...props
}: PropsWithChildren<TypographyProps>) => {
  const Element = Typographies[variant];

  return (
    <Element color={color} weight={weight} {...props}>
      {children}
    </Element>
  );
};

Typography.defaultProps = TypographyDefaultProps;

export { Typography };
