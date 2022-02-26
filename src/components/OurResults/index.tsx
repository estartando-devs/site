import { OurResultsIcon } from '../OurResultsIcon';
import { ourResultsMock } from '../../mocks';

import * as S from './styles';

const OurResults = () => (
  <S.OurResultsContainer>
    <S.OurResultsContainerTitle>
      <S.OurResultsContainerTitleOur>Nossos</S.OurResultsContainerTitleOur>
      <S.OurResultsContainerTitleResults>
        Resultados
      </S.OurResultsContainerTitleResults>
    </S.OurResultsContainerTitle>
    <S.OurResultsContainerContent>
      {ourResultsMock?.map((result, index) => (
        <OurResultsIcon
          key={index}
          image={result.image}
          title={result.title}
          value={result.value}
        />
      ))}
    </S.OurResultsContainerContent>
  </S.OurResultsContainer>
);

export { OurResults };
