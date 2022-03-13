import Image from 'next/image';
import { WhatWeTeachProps } from '../../mocks/WhatWeTeach.mock';
import { Typography } from '../Typography';
import * as S from './styles';
const WhatWeTeach = ({
  title,
  description,
  dataAos,
  dataAosEasing,
  dataAosAnchorPlacement,
}: WhatWeTeachProps) => {
  return (
    <S.Container
      data-aos={dataAos}
      data-aos-easing={dataAosEasing}
      data-aos-anchor-placement={dataAosAnchorPlacement}
    >
      <S.HeadingSection>
        <Typography variant="h2" dangerouslySetInnerHTML={{ __html: title }} />
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </S.HeadingSection>
      <Image
        src="images/ensinando"
        width={503}
        height={407}
        alt="Duas fotos lado a lado, a primeira e a segunda mostra uma pessoa mexendo no computador pelo programa de edição de código"
      />
    </S.Container>
  );
};

export { WhatWeTeach };
