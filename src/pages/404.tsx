import React from 'react';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { Footer, Layout, Logo, Typography } from '../components';

export default function NotfoundPage() {
  return (
    <Layout full>
      <NextSeo title="404" description="Oops! Página não encontrada.." />
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
