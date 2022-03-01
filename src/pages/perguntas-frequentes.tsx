import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import {
  Layout,
  Footer,
  CommonQuestionsProps,
  CommonQuestions,
} from '../components';

export const getServerSideProps: GetServerSideProps<
  CommonQuestionsProps
> = async ({ res }) => {
  const props: CommonQuestionsProps = {
    title: 'Perguntas <br/><span>frequentes</span>',
    questions: [
      {
        key: 'question1',
        question:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, a sed mauris lectus vitae. Interdum scelerisque lorem commodo orci.',
      },
      {
        key: 'question2',
        question:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, a sed mauris lectus vitae. Interdum scelerisque lorem commodo orci.',
      },
      {
        key: 'question3',
        question:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam?',
        answer:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, a sed mauris lectus vitae. Interdum scelerisque lorem commodo orci.',
      },
    ],
  };

  res.setHeader('Cache-Control', `public, s-maxage=2000`);

  return {
    props,
  };
};

export default function PerguntasFrequentes(props) {
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
