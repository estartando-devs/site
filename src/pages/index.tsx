import React from 'react';
import { Layout, Footer, Header, Courses } from '../components';
import { HowWeDo } from '../components/HowWeDo';

const Home = () => (
  <Layout>
    <Header />
    <Courses course="frontEnd" />
    <Courses course="backEnd" />
    <Courses course="design" />
    <HowWeDo />
    <Footer />
  </Layout>
);

export default Home;
