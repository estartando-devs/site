import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import * as S from './styles';

type OurResultsIconProp = {
  image: string;
  title: string;
  value: string;
};

const OurResultsIcon = ({
  image,
  title,
  value,
}: PropsWithChildren<OurResultsIconProp>) => {
  return (
    <S.OurResultsIconContainer
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <Image
        src={`icons/${image}`}
        width={60}
        height={60}
        alt={`Icone ${title}`}
        title={`Icone ${title}`}
      />
      <S.OurResultsIconContainerValue>{`${value}`}</S.OurResultsIconContainerValue>
      <Typography weight="700" variant="body1">{`${title}`}</Typography>
    </S.OurResultsIconContainer>
  );
};

export { OurResultsIcon };
