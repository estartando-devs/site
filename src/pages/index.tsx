import React from 'react';
import { Layout, Footer, Header, Courses } from '../components';

const Home = () => (
  <Layout>
    <Header />
    <Courses course="frontEnd" />
    <Courses course="backEnd" />
    <Courses course="design" />
    <Footer />
  </Layout>
);

export default Home;
