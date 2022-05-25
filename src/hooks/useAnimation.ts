export const useAnimation = ({ withAnimation }: { withAnimation: boolean }) => {
  const animation = {
    'data-aos': 'fade-up',
    'data-aos-easing': 'ease-in-out',
    'data-aos-anchor-placement': 'top-center',
  };

  const animationProps = withAnimation ? animation : {};

  return animationProps;
};
