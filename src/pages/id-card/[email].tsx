import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '../../components';
import {
  IdCard as IdCardComponent,
  IdCardProps,
} from '../../components/IdCard';
import { NotFoundIdCard } from '../../components/NotFoundIdCard';
import { getAddressByCep, cleanZipcode, http } from '../../services';
import { SubscriptionData } from '../../types/Subscription';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const subscribers = await new Promise<SubscriptionData[]>((resolve) => {
    http<Array<SubscriptionData>>(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/platform/subscribe`
    ).then((data) => resolve(data.parsedBody as SubscriptionData[]));
  });

  const subscribe = subscribers.find(
    ({ data: { email } }) => email === query?.email
  );

  if (!subscribe || !subscribe.data.approved) {
    return {
      props: {
        error: 'Subscriber not found',
      },
    };
  }

  const address = await getAddressByCep(cleanZipcode(subscribe?.data?.zipcode));

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
        title="Estartando Devs | Id Card"
        description="Crie seu ID Card personalizado e divulge nas suas redes. Não esqueça de nos marcar."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://estartandodevs.com.br',
          site_name: 'Estartando Devs',
          title: 'Estartando Devs',
        }}
      />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '2rem',
        }}
      >
        <IdCardComponent {...profile} />
      </section>
    </Layout>
  );
}
