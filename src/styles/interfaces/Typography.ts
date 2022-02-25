type VariantProps = {
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number | string;
  lineHeight?: number | string;
  letterSpacing?: string;
};

interface Buttontheme extends VariantProps {
  textTransform?: string;
}

export interface ITypography {
  htmlFontSize?: number | string;
  fontFamily?: string;
  h1?: VariantProps;
  h2?: VariantProps;
  h3?: VariantProps;
  h4?: VariantProps;
  h5?: VariantProps;
  h6?: VariantProps;
  subtitle1?: VariantProps;
  subtitle2?: VariantProps;
  body1?: VariantProps;
  body2?: VariantProps;
  button?: Buttontheme;
  caption?: VariantProps;
  overline?: Buttontheme;
}
