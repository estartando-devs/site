import React from 'react';
import { NextSeo } from 'next-seo';
import { Box } from '@chakra-ui/react';
import { Layout, Footer, IdCardForm } from '../../../components';

export default function IdCardTeam() {
  return (
    <Layout>
      <NextSeo
        title="Id Card Time"
        description="Crie seu ID Card personalizado e divulge nas suas redes. Não esqueça de nos marcar."
        openGraph={{
          url: 'https://estartandodevs.com.br/id-card/time',
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
