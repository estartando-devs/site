import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../../elements";

export const ScheduleContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScheduleContainerHeader = styled.div`
  margin-bottom: 70px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px 0 12px 12px;
  ${media.greaterThan("medium")`
    justify-content: space-evenly;
  `}
`;

export const InformationAside = styled.div`
  min-height: 196px;
  max-width: 796px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${media.lessThan("medium")`
    button {
      display: none;
    }
  `}
`;

export const ScheduleTitle = styled.h2`
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #81caa8;
  span {
    color: transparent;
    -webkit-text-stroke: 2px #81caa8;
  }
  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    padding-left: 8px;
  `}
  ${media.greaterThan("medium")`
    font-size: 48px;
    margin-bottom: 16px;
  `}
`;

export const ScheduleDescription = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #d3d3d3;
  ${media.greaterThan("medium")`
    font-size: 31px;
    margin-bottom: 24px;
  `}
`;

export const InformationText = styled.p`
  ${media.lessThan("medium")`
    display: none;
  `}
  font-family: Ubuntu;
  font-size: 20px;
  line-height: 23px;
  color: #D3D3D3;
  margin-bottom: 24px;
`;

export const SubscriptionButton = styled(Button)`
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const SubscriptionLink = styled.span`
  ${media.greaterThan("medium")`
    display: none;
  `}
  text-decoration: underline;
  padding-left: 8px;
`;

export const Image = styled.img`
  ${media.greaterThan("medium")`
    position: absolute;
    right: 0;
  `}
`;
