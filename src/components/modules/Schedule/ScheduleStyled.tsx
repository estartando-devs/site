import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../../elements";
import Img from 'next/image'

interface IScheduleContainer {
  blur?: boolean;
}

export const ScheduleContainer = styled.div<IScheduleContainer>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all ease 0.2s;
  filter: blur(${(props) => (props.blur ? "5px" : "0px")});
`;

export const ScheduleContainerHeader = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
  padding: 170px 0 70px 12px;
  ${media.greaterThan("medium")`
    justify-content: center;
    margin-bottom: 70px;
  `}
  ${media.lessThan("small")`
    display: grid;
    grid-template-columns: 1fr 1fr;
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

  ${media.between("medium", "large")`
    /* padding-right: 28vw; */
  `}
`;

export const Image = styled(Img)`
  margin: 0 20px;
  width: auto;
  height: 350px;
  ${media.lessThan("medium")`
    margin: 0 -50px 0 20px;
    height: auto;
    width: 50%;
    min-width: 200px;
  `};
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
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #d3d3d3;
  padding-left: 8px;

  ${media.greaterThan("medium")`
    font-size: 31px;
    margin:16px 0 36px;
    padding-left: 0;
  `}
`;

export const ModalText = styled.p`
  ${media.lessThan("medium")`
    /* display: none; */
  `}
  font-family: Ubuntu;
  font-size: 20px;
  line-height: 26px;
  color: #d3d3d3;
  margin-bottom: 24px;
  max-width: 800px;
`;

export const InformationText = styled.p`
  ${media.lessThan("medium")`
    display: none;
  `}
  font-family: Ubuntu;
  font-size: 20px;
  line-height: 26px;
  color: #d3d3d3;
  margin-bottom: 24px;
  max-width: 800px;
`;

export const SubscriptionButton = styled(Button)`
  margin-bottom: 100px;

  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const SubscriptionLink = styled.span`
  display: none;
  ${media.lessThan("medium")`
  display: initial;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-decoration: underline;
  padding-left: 8px;
  `}
`;
