import React from 'react';
import { Layout, Footer } from '../components/';
import { StudentProfile } from '../components/StudentProfile/StudentProfile';

const Home = () => (
  <>
    <Layout>
      <StudentProfile />
    </Layout>
    <Footer />
  </>
);

export default Home;
