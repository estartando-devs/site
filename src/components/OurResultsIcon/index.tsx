import Image from 'next/image';

import * as S from './styles';

interface OurResultsIconProp {
  image: string;
  title: string;
  value: string;
}

const OurResultsIcon = (prop: OurResultsIconProp) => (
  <S.OurResultsIconContainer>
    <Image
      src={`icons/${prop?.image}`}
      width={60}
      height={60}
      alt={`Icone ${prop.title}`}
      title="Logo estartando devs."
    />
    <S.OurResultsIconContainerValue>{`${prop?.value}`}</S.OurResultsIconContainerValue>
    <S.OurResultsIconContainerTitle>{`${prop?.title}`}</S.OurResultsIconContainerTitle>
  </S.OurResultsIconContainer>
);

export { OurResultsIcon };
