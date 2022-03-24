import Image from 'next/image';
import Link from 'next/link';
import config from '../../config/constants';
import { Typography } from '../Typography';

import * as S from './styles';

export const Subscribe = () => {
  return (
    <S.ContainerSubscribe
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <Image
        src="/images/inscricao-check"
        width={294}
        height={364}
        alt="Calendário inscricao"
        title="Calendário inscricao"
      />
      <S.ContainerSubscribeContent>
        <S.ContainerSubscribeContentText>
          Inscreva-se!
        </S.ContainerSubscribeContentText>
        <S.ContainerSubscribeContentButton
          color="purple"
          href={config.INSCRICOES_URL}
        >
          <a target="_blank" rel="noopener">{`Faça parte!`}</a>
        </S.ContainerSubscribeContentButton>
        <S.ContainerSubscribeContentDoubts>
          <Typography variant="body3">{`Dúvidas? Veja as`}</Typography>
          <S.ContainerSubscribeContentDoubtsLink>
            <Link href="/perguntas-frequentes">{`perguntas mais frequentes`}</Link>
          </S.ContainerSubscribeContentDoubtsLink>
        </S.ContainerSubscribeContentDoubts>
      </S.ContainerSubscribeContent>
      <Image
        src="/images/inscricao-calendar"
        width={294}
        height={364}
        objectFit="contain"
        alt="Calendário inscricao"
        title="Calendário inscricao"
      />
    </S.ContainerSubscribe>
  );
};
