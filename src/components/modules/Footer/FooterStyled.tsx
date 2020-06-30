import styled from "styled-components";
import media from "styled-media-query";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 121px;
  background: ${(props) => props.theme.palette.background.paper};
  ${media.greaterThan("medium")`
    padding: 0 200px;
  `}
`;

export { FooterContainer };
