import React from "react";
import * as S from "./LayoutStyled";
import { Header } from "../Header";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <S.LayoutContainer>
    <S.LayoutContent>
      <Header />
      {children}
    </S.LayoutContent>
  </S.LayoutContainer>
);

export default Layout;
