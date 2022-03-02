import React from 'react';
import {
  Layout,
  Footer,
  Header,
  OurResults,
  Courses,
  WhatWeTeach,
  Subscribe,
} from '../components';

const Home = () => (
  <Layout>
    <Header />
    <WhatWeTeach />
    <Courses course="frontEnd" />
    <Courses course="backEnd" />
    <Courses course="design" />
    <OurResults />
    <Subscribe />
    <Footer />
  </Layout>
);

export default Home;
