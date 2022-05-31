import { Box, useToast } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '../../components';
import {
  IdCard as IdCardComponent,
  IdCardProps,
} from '../../components/IdCard';
import { NotFoundIdCard } from '../../components/NotFoundIdCard';
import { cleanZipcode, getAddressByCep, http } from '../../services';
import { SubscriptionData } from '../../types/Subscription';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const subscribers = await new Promise<SubscriptionData[]>((resolve) => {
    http<Array<SubscriptionData>>(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/platform/subscribe`,
    ).then((data) => resolve(data.parsedBody as SubscriptionData[]));
  });

  const userEmail = query.email as string;

  const subscribe = subscribers.find(
    ({ data: { email } }) => email?.toLowerCase() === userEmail.toLowerCase(),
  );

  if (!subscribe || !subscribe.data.approved) {
    return {
      props: {
        error: 'Subscriber not found',
      },
    };
  }

  const address = subscribe?.data?.zipcode
    ? await getAddressByCep(cleanZipcode(subscribe?.data?.zipcode))
    : { localidade: subscribe?.data.city, uf: '' };

  const profile = {
    name: query?.name || subscribe?.data?.fullName,
    image: {
      src: 'https://res.cloudinary.com/elite-devs/images/logo',
      alt: `imagem aluno(a) ${subscribe?.data.fullName}`,
    },
    course: subscribe?.data?.course,
    address: {
      city: address.localidade,
      state: address.uf,
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

  if (error) {
    return (
      <Layout>
        <NotFoundIdCard />;
      </Layout>
    );
  }

  toast({
    position: 'top',
    title: 'Tudo pronto!',
    description:
      'Agora você pode compartilhar seu id card. Não esqueça de nos marcar.',
    status: 'success',
    duration: 5000,
    isClosable: true,
  });

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
