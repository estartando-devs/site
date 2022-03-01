import Image, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = {
  width?: number;
  height?: number;
} & Omit<NextImageProps, 'src'>;

const Logo = ({ width, height, ...props }: ImageProps) => (
  <Image
    {...props}
    src="/images/logo"
    width={width}
    height={height}
    alt="Logo estartando devs"
    title="Logo estartando devs."
  />
);

export { Logo };
