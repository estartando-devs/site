import React from 'react';
import { NextSeo } from 'next-seo';
import { Box } from '@chakra-ui/react';
import { Layout, Footer, IdCardForm } from '../../components';

export default function IdCard() {
  return (
    <Layout>
      <NextSeo
        title="Id Card"
        description="Crie seu ID Card personalizado e divulge nas suas redes. Não esqueça de nos marcar."
        openGraph={{
          url: 'https://estartandodevs.com.br/id-card',
        }}
      />
      <Box
        minHeight="100vh"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <IdCardForm />
        <Footer />
      </Box>
    </Layout>
  );
}
