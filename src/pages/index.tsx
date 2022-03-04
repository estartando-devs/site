import React from 'react';
import {
  scheduleMock,
  studentProfileSection,
  whatWeTeachMock,
  howWeDoMock,
} from '../mocks';
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
  SelectiveProcess,
} from '../components';

const Home = () => (
  <Layout>
    <Header />
    <WhatWeTeach {...whatWeTeachMock} />
    <Courses course="frontEnd" />
    <Courses course="backEnd" />
    <Courses course="design" />
    <HowWeDo {...howWeDoMock} />
    <OurResults />
    <SelectiveProcess {...scheduleMock} />
    <Subscribe />
    <StudentProfile {...studentProfileSection} />
    <Footer />
  </Layout>
);

export default Home;
