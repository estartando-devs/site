import React from "react";
import * as S from "./LayoutStyled";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <S.LayoutContainer>
    <S.LayoutContent>
      <Header />
      {children}
    </S.LayoutContent>
    <Footer />
  </S.LayoutContainer>
);

export default Layout;
