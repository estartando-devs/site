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
}: PropsWithChildren<OurResultsIconProp>) => (
  <S.OurResultsIconContainer>
    <Image
      src={`icons/${image}`}
      width={60}
      height={60}
      alt={`Icone ${title}`}
      title="Logo estartando devs."
    />
    <S.OurResultsIconContainerValue>{`${value}`}</S.OurResultsIconContainerValue>
    <Typography weight="700" variant="body1">{`${title}`}</Typography>
  </S.OurResultsIconContainer>
);

export { OurResultsIcon };
