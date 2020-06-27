interface IVariant {
  fontFamily?: string,
  fontWeight?: number,
  fontSize?: number | string,
  lineHeight?: number,
  letterSpacing?: string
}

interface Buttontheme extends IVariant {
  textTransform?: string,
}

export interface ITypography {
  fontFamily?: string,
  htmlFontSize?: number | string,
  pxToRem?: Function,
  round?: Function,
  fontSize?: number,
  fontWeightLight?: number,
  fontWeightRegular?: number,
  fontWeightMedium?: number,
  fontWeightBold?: number,
  h1?: IVariant,
  h2?: IVariant,
  h3?: IVariant,
  h4?: IVariant,
  h5?: IVariant,
  h6?: IVariant,
  subtitle1?: IVariant,
  subtitle2?: IVariant,
  body1?: IVariant,
  body2?: IVariant,
  button?: Buttontheme,
  caption?: IVariant,
  overline?: Buttontheme,
}
