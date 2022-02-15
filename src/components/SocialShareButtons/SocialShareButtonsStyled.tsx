import styled from "styled-components";
import Image from 'next/image'

export const SocialShareContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SocialShareContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
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

export const SocialIcon = styled(Image)`
  width: 72px;
  height: auto;
`;
