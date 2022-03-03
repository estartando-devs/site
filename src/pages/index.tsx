import React from 'react';
import { studentProfileSection } from '../mocks/DescriptionProfile.mock';
import {
  Layout,
  Footer,
  Header,
  OurResults,
  Courses,
  WhatWeTeach,
  Subscribe,
  StudentProfile,
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
    <StudentProfile {...studentProfileSection} />
    <Footer />
  </Layout>
);

export default Home;
