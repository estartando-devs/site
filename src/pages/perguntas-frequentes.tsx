import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import {
  Layout,
  Footer,
  CommonQuestionsProps,
  CommonQuestions,
} from '../components';
import { getSiteData } from '../services';

type CommonQuestions = Omit<CommonQuestionsProps, 'title'>;

export const getStaticProps: GetStaticProps<
  CommonQuestionsProps
> = async () => {
  const response = await getSiteData<CommonQuestions>({
    path: 'perguntas-frequentes',
  });

  const {
    title,
    data: { questions },
  } = response ?? {
    title: 'Perguntas <br/><span>frequentes</span>',
    data: { questions: [] },
  };

  const props: CommonQuestionsProps = {
    title,
    questions:
      questions.map((content, key) => ({
        ...content,
        key: `question-${key}`,
      })) || [],
  };

  return {
    props,
    revalidate: 300,
  };
};

export default function PerguntasFrequentes(props: CommonQuestionsProps) {
  return (
    <Layout>
      <NextSeo
        title="Estartando Devs | Perguntas Frequentes"
        description="Tire suas dúvidas sobre nosso processo seletivo."
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://estartandodevs.com.br',
          site_name: 'Estartando Devs',
          title: 'Estartando Devs',
        }}
      />
      <CommonQuestions {...props} />
      <Footer />
    </Layout>
  );
}
