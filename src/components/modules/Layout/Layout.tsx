import React from "react";
import * as S from "./LayoutStyled";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { TestBanner } from "../TestBanner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <S.LayoutContainer>
    <S.LayoutContent>
      <TestBanner />
      <Header />
      {children}
      <Footer />
    </S.LayoutContent>
  </S.LayoutContainer>
);

export default Layout;
