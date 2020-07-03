import styled from "styled-components";
import media from "styled-media-query";

export const SocialShareContainer = styled.section`
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
  margin: 15px 0;
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const ShareLink = styled.a`
  /* margin: 0 30px; */
`;

export const SocialIcon = styled.img`
  width: 36px;
  height: auto;
  ${media.greaterThan("medium")`
    width: 48px;
  `}
`;
