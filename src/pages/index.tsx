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
  OurResults,
  WhatWeTeach,
  StudentProfile,
  SelectiveProcess,
  ListApprovedCourses,
  ApprovedListCourseType,
} from '../components';
import { BannerApproved } from '../components/Approved';
import { GetStaticProps } from 'next';
import { getApprovedList } from '../services';

export const getStaticProps: GetStaticProps = async () => {
  const approvedListCourse = await getApprovedList();

  return {
    props: { approvedListCourse },
  };
};

const Home = (props: ApprovedListCourseType) => {
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
      <ListApprovedCourses approvedListCourse={props.approvedListCourse} />
      <OurResults />
      <Footer />
    </Layout>
  );
};

export default Home;
