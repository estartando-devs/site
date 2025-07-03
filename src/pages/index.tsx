import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import {
  Courses,
  Footer,
  Header,
  HowWeDo,
  Layout,
  OurResults,
  SelectiveProcess,
  StudentProfile,
  WhatWeTeach,
} from '../components';
import { Typography } from '../components/Typography';
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

  // Overlay de aviso
  const [showOverlay] = useState(true); // Troque para false para remover o overlay

  return (
    <Layout>
      {showOverlay && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h2"
            style={{ marginBottom: 16, textAlign: 'center' }}
          >
            🚧 Mais informações em breve!
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            Fique ligado, em breve divulgaremos novidades sobre o processo
            seletivo.
          </Typography>
        </div>
      )}
      {/* <BannerSoon /> */}
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
