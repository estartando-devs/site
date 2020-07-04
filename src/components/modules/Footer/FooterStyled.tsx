import styled from "styled-components";
import media from "styled-media-query";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  align-items: center;
  background: ${(props) => props.theme.palette.background.paper};
  ${media.greaterThan("medium")`
    flex-direction: row;
    padding: 30px;
    background: ${(props) => props.theme.palette.background.default};
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 30px;
  `}
`;

export const ContainerLogo = styled.div`
  margin: 20px 0;
`;
