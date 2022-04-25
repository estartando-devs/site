import React from 'react';
import { NextSeo } from 'next-seo';
import { Box } from '@chakra-ui/react';
import { Layout, Footer, IdCardForm } from '../../../components';

export default function IdCardTeam() {
  return (
    <Layout>
      <NextSeo
        title="Estartando Devs | Id Card Time"
        description="Crie seu ID Card personalizado e divulge nas suas redes. Não esqueça de nos marcar."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://estartandodevs.com.br',
          site_name: 'Estartando Devs',
          title: 'Estartando Devs',
        }}
      />
      <Box
        minHeight="100vh"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <IdCardForm team />
        <Footer />
      </Box>
    </Layout>
  );
}
