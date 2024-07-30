import { Box } from '@chakra-ui/react';
import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '../../../components';
import {
  IdCard as IdCardComponent,
  IdCardProps,
} from '../../../components/IdCard';
import { NotFoundIdCard } from '../../../components/NotFoundIdCard';
import { cleanZipcode, getAddressByCep } from '../../../services';
import { CourseNameByKey } from '../../../types';

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const nagatoCookie = getCookie('nagato', { req, res }) || '{}';
  const { zipcode, course } = JSON.parse(nagatoCookie as string);
  const { localidade = null, uf = null } = await getAddressByCep(
    cleanZipcode(zipcode),
  );

  const profile = {
    name: query?.name,
    team: true,
    image: {
      src: 'https://res.cloudinary.com/elite-devs/images/logo',
      alt: `imagem monitor(a) ${query?.name}`,
    },
    course: course || CourseNameByKey.frontend,
    address: {
      city: localidade,
      state: uf,
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
  // const toast = useToast();

  if (error) {
    return (
      <Layout>
        <NotFoundIdCard />;
      </Layout>
    );
  }

  // toast({
  //   position: 'top',
  //   title: 'Tudo pronto!',
  //   description:
  //     'Agora você pode compartilhar seu id card. Não esqueça de nos marcar.',
  //   status: 'success',
  //   duration: 5000,
  //   isClosable: true,
  // });

  return (
    <Layout>
      <NextSeo
        title={`Id Card - @${profile.name}`}
        description="Agora você pode compartilhar seu id card. Não esqueça de nos marcar."
        openGraph={{
          url: 'https://estartandodevs.com.br/id-card/time',
        }}
        nofollow
        noindex
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
