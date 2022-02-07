import React from "react";
import { Schedule, AboutUs, Layout } from "../components/modules";
import { SectionSlide } from "../components/features";

const Home = () => (
  <Layout>
    {/* <BannerApproved /> */}
    <SectionSlide />
    <AboutUs />
    <Schedule />
    {/* <ApprovedList /> */}
  </Layout>
);

export default Home;
