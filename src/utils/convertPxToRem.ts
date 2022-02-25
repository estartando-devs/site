const DEFAULT_PIXEL_SIZE = 16;

/** Utility function to convert pixel value to rem
 * @param {number} numberInPixels - The number in pixels you want to convert to rem.
 * @returns {string} The number in rem
 */
const convertPxToRem = (numberInPixels: number): string =>
  numberInPixels / DEFAULT_PIXEL_SIZE + 'rem';

export { convertPxToRem };
