import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../../elements";

interface IScheduleContainer {
  blur?: boolean;
}

export const ScheduleContainer = styled.div<IScheduleContainer>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
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
  justify-content: space-between;
  padding: 170px 0 70px 12px;
  ${media.greaterThan("medium")`
    justify-content: space-evenly;
    margin-bottom: 170px;
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
    padding-right: 28vw;
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
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #d3d3d3;
  padding-left: 8px;

  ${media.greaterThan("medium")`
    font-size: 31px;
    margin-bottom: 24px;
    padding-left: 0;
  `}
`;

export const ModalText = styled.p`
  ${media.lessThan("medium")`
    /* display: none; */
  `}
  font-family: Ubuntu Mono;
  font-size: 20px;
  line-height: 23px;
  color: #d3d3d3;
  margin-bottom: 24px;
  max-width: 800px;
`;

export const InformationText = styled.p`
  ${media.lessThan("medium")`
    display: none;
  `}
  font-family: Ubuntu Mono;
  font-size: 20px;
  line-height: 23px;
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

export const Image = styled.img`
  width: 40%;
  height: auto;
  margin-left: 20px;
  ${media.greaterThan("medium")`
    position: absolute;
    right: 0;
    width: auto;
    height: 350px;
  `};
`;
