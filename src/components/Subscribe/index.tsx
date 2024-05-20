import Image from 'next/legacy/image';
import * as S from './styles';

export const Subscribe = () => (
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
        href={process.env.NEXT_PUBLIC_INSCRICOES_URL || ''}
        legacyBehavior
      >
        <a target="_blank" rel="noreferrer noopener">{`Faça parte!`}</a>
      </S.ContainerSubscribeContentButton>
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
