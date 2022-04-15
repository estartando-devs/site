import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';
import { Footer, Layout, Logo, Typography } from '../components';

export default function NotfoundPage() {
  return (
    <Layout full>
      <NextSeo
        title="Estartando Devs | 404"
        description="Tire suas dúvidas sobre nosso processo seletivo."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://estartandodevs.com.br',
          site_name: 'Estartando Devs',
          title: 'Estartando Devs',
        }}
      />
      <Box height="100%" display="flex" flexDirection="column" gap="2rem">
        <Box padding="2.5rem">
          <header>
            <Link href="/">
              <a>
                <Logo width={48} height={68} priority quality={30} />
              </a>
            </Link>
          </header>
        </Box>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingLeft="2.5rem"
          paddingRight="2.5rem"
        >
          <Typography variant="h1">Oops! Página não encontrada.</Typography>
        </Box>
        <Footer />
      </Box>
    </Layout>
  );
}
