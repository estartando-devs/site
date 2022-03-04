import { GetStaticProps } from 'next';
import Head from 'next/head';
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
      <Head>
        <title>Estartando Devs | Perguntas Frequentes</title>
      </Head>
      <CommonQuestions {...props} />
      <Footer />
    </Layout>
  );
}
