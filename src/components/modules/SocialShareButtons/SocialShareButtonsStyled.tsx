import styled from "styled-components";
import media from "styled-media-query";

export const SocialShareContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
    align-items: flex-end;
  `}
`;

export const SocialShareContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.palette.text.secondary};
  line-height: 19px;
  text-align: center;
  max-width: 280px;
  font-family: Ubuntu;
  font-size: 14px;
  margin: 15px 0 0px;
  color: #d3d3d3;
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShareLink = styled.a`
  /* margin: 0 30px; */
`;

export const SocialIcon = styled.img`
  width: 72px;
  height: auto;
`;
