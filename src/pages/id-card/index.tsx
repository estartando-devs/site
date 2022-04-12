import { NextSeo } from 'next-seo';
import React from 'react';
import { Layout, Footer, IdCardForm } from '../../components';

export default function IdCard() {
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
      <IdCardForm />
      <Footer />
    </Layout>
  );
}
