import { OurResultsIcon } from '../OurResultsIcon';
import { ourResultsMock } from '../../mocks';
import { Typography } from '../Typography';

import * as S from './styles';

const OurResults = () => (
  <S.OurResultsContainer>
    <S.OurResultsContainerTitle>
      <Typography variant="h2">Nossos</Typography>
      <S.OurResultsContainerTitleResults>
        Resultados
      </S.OurResultsContainerTitleResults>
    </S.OurResultsContainerTitle>
    <S.OurResultsContainerContent>
      {ourResultsMock?.map(({ image, title, value }, index) => (
        <OurResultsIcon key={index} image={image} title={title} value={value} />
      ))}
    </S.OurResultsContainerContent>
  </S.OurResultsContainer>
);

export { OurResults };
