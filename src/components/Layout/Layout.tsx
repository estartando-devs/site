import React from "react";
import * as S from "./LayoutStyled";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <S.LayoutContainer>
    <S.LayoutContent>
      {children}
    </S.LayoutContent>
  </S.LayoutContainer>
);

export default Layout;
