export interface IButton {
  /**
   *function to be performed at the click of button
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * expected one of  'default' | 'outlined'
   */
  variant?: "default" | "outlined" | "secondary";
  /**
   * one of 'large' | 'medium' | 'small'
   */
  size?: "large" | "medium" | "small" | "huge";
  /**
   * bollean
   */
  disabled?: boolean;
  /**
   * boolean
   */
  isLoading?: boolean;
  /**
   * React element
   */
  children: React.ReactNode;
}
