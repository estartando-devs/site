import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { psthsSite } from '../../mocks/paths.mock';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = psthsSite.map((path) => ({
    loc: `https://estartandodevs.com.br/${path}`,
    lastmod: new Date().toISOString(),
  }));

  fields.push({
    loc: 'https://estartandodevs.com.br',
    lastmod: new Date().toISOString(),
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
