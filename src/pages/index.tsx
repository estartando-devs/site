import React from 'react';
import {
  scheduleMock,
  studentProfileSection,
  whatWeTeachMock,
  howWeDoMock,
  cousesMock,
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
    <Courses {...cousesMock} />
    <HowWeDo {...howWeDoMock} />
    <StudentProfile {...studentProfileSection} />
    <SelectiveProcess {...scheduleMock} />
    <Subscribe />
    <OurResults />
    <Footer />
  </Layout>
);

export default Home;
