import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
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
  Courses,
  HowWeDo,
  Subscribe,
  OurResults,
  WhatWeTeach,
  StudentProfile,
  SelectiveProcess,
} from '../components';
import { BannerApproved, ApprovedList } from '../components/Approved';

const Home = () => {
  useEffect(() => {
    Aos.init({
      delay: 50,
      offset: 200,
      once: false,
      mirror: true,
      duration: 1000,
    });
  }, []);

  return (
    <Layout>
      <Header />
      <BannerApproved />
      <WhatWeTeach {...whatWeTeachMock} />
      <Courses {...cousesMock} />
      <HowWeDo {...howWeDoMock} />
      <StudentProfile {...studentProfileSection} />
      <SelectiveProcess {...scheduleMock} />
      <Subscribe />
      <OurResults />
      <ApprovedList />
      <Footer />
    </Layout>
  );
};
export default Home;
