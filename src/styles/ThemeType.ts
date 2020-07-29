import "styled-components";
import {
  IColor,
  IText,
  ITypography,
  IMargin,
  IZindex,
  IAction,
  IShape,
  IGrey,
} from "./interfaces";

declare module "styled-components" {
  export interface DefaultTheme {
    shadows: string[];
    palette: {
      type: string;
      primary: IColor;
      secondary?: IColor;
      design?: IColor;
      text: IText;
      background: {
        paper: string;
        default: string;
      };
      action?: IAction;
      grey: IGrey;
      error: IColor;
      warning?: IColor;
      info?: IColor;
      success?: IColor;
    };
    margin?: IMargin;
    typography: ITypography;
    zIndex?: IZindex;
    shape?: IShape;
  }
}
