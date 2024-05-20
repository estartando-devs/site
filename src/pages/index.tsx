import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
  Courses,
  Footer,
  Header,
  HowWeDo,
  Layout,
  OurResults,
  SelectiveProcess,
  StudentProfile,
  // Subscribe,
  WhatWeTeach,
} from '../components';
// import { BannerSubscribe } from '../components/Subscribe/BannerSubscribe';
import {
  cousesMock,
  howWeDoMock,
  scheduleMock,
  studentProfileSection,
  whatWeTeachMock,
} from '../mocks';

const Home = () => {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.navigator.userAgent !== 'googlebot'
    ) {
      Aos.init({
        delay: 50,
        offset: 200,
        once: false,
        mirror: true,
        duration: 1000,
      });
    }
  }, []);

  return (
    <Layout>
      {/* <BannerSubscribe /> */}
      <Header />
      <WhatWeTeach {...whatWeTeachMock} />
      <Courses {...cousesMock} />
      <HowWeDo {...howWeDoMock} />
      <StudentProfile {...studentProfileSection} />
      <SelectiveProcess {...scheduleMock} />
      <OurResults />
      {/* <Subscribe /> */}
      <Footer />
    </Layout>
  );
};

export default Home;
