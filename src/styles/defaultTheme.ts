import 'styled-components';
import theme from '../styles/theme';

type ThemeDinamicType = typeof theme;

declare module 'styled-components' {
  export type DefaultTheme = ThemeDinamicType;
}
