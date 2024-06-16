import { Box, useToast } from '@chakra-ui/react';
import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { Layout } from '../../components';
import {
  IdCard as IdCardComponent,
  IdCardProps,
} from '../../components/IdCard';
import { NotFoundIdCard } from '../../components/NotFoundIdCard';
import { cleanZipcode, getAddressByCep, http } from '../../services';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const subscribers = await new Promise<string[]>((resolve) => {
    http<string[]>(`${process.env.NEXT_PUBLIC_GET_EMAILS}`).then((data) =>
      resolve(data.parsedBody as string[]),
    );
  });

  const userEmail = query.email as string;

  const subscribe = subscribers.find(
    (subscribeEmail) =>
      subscribeEmail?.toLowerCase() === userEmail.toLowerCase(),
  );

  if (!subscribe) {
    return {
      props: {
        error: 'Subscriber not found',
      },
    };
  }

  const nagatoCookie = getCookie('nagato', { req, res }) || '{}';
  const { zipcode, course, name } = JSON.parse(nagatoCookie as string);
  const { localidade = null, uf = null } = await getAddressByCep(
    cleanZipcode(zipcode),
  );

  const profile = {
    name: name,
    image: {
      src: 'https://res.cloudinary.com/elite-devs/images/logo',
      alt: `imagem aluno(a) ${name}`,
    },
    course: course,
    address: {
      city: localidade,
      state: uf,
    },
  };
  return {
    props: {
      profile,
    },
  };
};

export default function MyIdCard({
  profile,
  error,
}: {
  profile: IdCardProps;
  error?: string;
}) {
  const toast = useToast();

  useEffect(() => {
    if (!error) {
      toast({
        position: 'top',
        title: 'Tudo pronto!',
        description:
          'Agora você pode compartilhar seu id card. Não esqueça de nos marcar.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <Layout>
        <NotFoundIdCard />;
      </Layout>
    );
  }

  return (
    <Layout>
      <NextSeo
        title={`Id Card - @${profile.name}`}
        description="Agora você pode compartilhar seu id card. Não esqueça de nos marcar."
        openGraph={{
          url: 'https://estartandodevs.com.br/id-card',
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        padding="2rem"
      >
        <IdCardComponent {...profile} />
      </Box>
    </Layout>
  );
}
