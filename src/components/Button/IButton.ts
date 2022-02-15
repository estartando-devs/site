import { ButtonHTMLAttributes } from "react"
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * expected one of  'default' | 'outlined'
   */
  variant?: 'default' | 'outlined' | 'secondary' | 'design';
  /**
   * one of 'large' | 'medium' | 'small'
   */
  size?: 'large' | 'medium' | 'small' | 'huge';
  /**
   * boolean
   */
  isLoading?: boolean;
  /**
   * boolean
   */
  disabled?: boolean;
}
