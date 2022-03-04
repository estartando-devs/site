import React from 'react';
import { studentProfileSection, whatWeTeachMock } from '../mocks';
import {
  Layout,
  Footer,
  Header,
  OurResults,
  Courses,
  WhatWeTeach,
  HowWeDo,
  Subscribe,
  StudentProfile,
} from '../components';

const Home = () => (
  <Layout>
    <Header />
    <WhatWeTeach {...whatWeTeachMock} />
    <Courses course="frontEnd" />
    <Courses course="backEnd" />
    <Courses course="design" />
    <HowWeDo />
    <OurResults />
    <Subscribe />
    <StudentProfile {...studentProfileSection} />
    <Footer />
  </Layout>
);

export default Home;
