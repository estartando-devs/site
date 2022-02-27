import Image from 'next/image';
import { Typography } from '../Typography';

import * as S from './styles';

const Subscribe = () => (
  <S.ContainerSubscribe>
    <S.ContainerSubscribeImage>
      <Image
        src="/images/inscricao-check"
        width={294}
        height={364}
        alt="Calendário inscricao"
        title="Calendário inscricao"
      />
    </S.ContainerSubscribeImage>
    <S.ContainerSubscribeContent>
      <S.ContainerSubscribeContentText>
        {`Inscreva-se!`}
      </S.ContainerSubscribeContentText>
      <S.ContainerSubscribeContentButton>
        {`Faça parte!`}
      </S.ContainerSubscribeContentButton>
      <S.ContainerSubscribeContentDoubts>
        <Typography variant="body3">{`Dúvidas? Veja as`}</Typography>
        <S.ContainerSubscribeContentDoubtsLink>{`perguntas mais frequentes`}</S.ContainerSubscribeContentDoubtsLink>
      </S.ContainerSubscribeContentDoubts>
    </S.ContainerSubscribeContent>
    <S.ContainerSubscribeImage>
      <Image
        src="/images/inscricao-calendar"
        width={294}
        height={364}
        alt="Calendário inscricao"
        title="Calendário inscricao"
      />
    </S.ContainerSubscribeImage>
  </S.ContainerSubscribe>
);

export { Subscribe };
