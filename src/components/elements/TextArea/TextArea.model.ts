export interface TextAreaProps {
  /**
   * expected string description
   */
  placeholder: string,
  /**
   * @default "254px"
   * width px | rem ...
   */
  width?: string;
  type?: string;
  /**
   * name for element
   */
  name: string;
}
