import React from 'react';
import { Layout, Footer, Header, OurResults, Courses } from '../components';

const Home = () => (
  <Layout>
    <Header />
    <Courses course="frontEnd" />
    <Courses course="backEnd" />
    <Courses course="design" />
    <OurResults />
    <Footer />
  </Layout>
);

export default Home;
