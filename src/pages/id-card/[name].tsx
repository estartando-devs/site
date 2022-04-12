import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import { Layout, Footer } from '../../components';
import {
  IdCard as IdCardComponent,
  IdCardProps,
} from '../../components/IdCard';
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

  const address = await getAddressByCep(cleanZipcode(subscribe?.data?.zipcode));

  const profile = {
    name: subscribe?.data?.fullName,
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozE1WoHB6vkSlXGVb5n0S9F8OCGRZ4N9rpQ&usqp=CAU',
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

export default function MyIdCard({ profile }: { profile: IdCardProps }) {
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
      <IdCardComponent {...profile} />
      <Footer />
    </Layout>
  );
}
