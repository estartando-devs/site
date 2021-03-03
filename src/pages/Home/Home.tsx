import React from "react";
import { Schedule, AboutUs, BannerApproved } from "../../components/modules";
import { ApprovedList, SectionSlide } from "../../components/features";

const Home = () => (
  <>
    <BannerApproved />
    <SectionSlide />
    <AboutUs />
    <Schedule />
    <ApprovedList />
  </>
);

export default Home;
