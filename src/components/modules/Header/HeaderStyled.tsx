import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.palette.background.default};
  min-height: 88px;
`;

const SideContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled(SideContent)`
  z-index: 2;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.palette.primary.contrastText};
  font-size: 1.8rem;
  text-align: center;
  font-family: "Ubuntu Mono", monospace;
  margin-left: -30px;
`;

const Separator = styled.span`
  background-color: #81caa8;
  width: 60px;
  margin-top: -75px;
  transform: rotate(140deg);
`;

export { HeaderContainer, SideContent, TitleContainer, HeaderTitle, Separator };
