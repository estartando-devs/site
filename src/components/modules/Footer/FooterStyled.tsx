import styled from "styled-components";
import media from "styled-media-query";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 121px;
  background: ${(props) => props.theme.palette.background.paper};
  ${media.greaterThan("medium")`
    padding: 0 30px;
    background: ${(props) => props.theme.palette.background.default};
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 30px;
  `}
`;

export { FooterContainer };
