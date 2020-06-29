import styled from "styled-components";

export const ScheduleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ScheduleContainerHeader = styled.div`
  margin-bottom: 70px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px 0 12px 12px;
`;

export const InformationAside = styled.div`
  height: 196px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ScheduleTitle = styled.h2`
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #81CAA8;
  span{
  color: transparent;
  -webkit-text-stroke: 2px #81CAA8;
  }
`;

export const ScheduleDescription = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #D3D3D3;
`;

export const SubscriptionLink = styled.span`
  text-decoration: underline;
  padding-left: 8px;
`;

export const Image = styled.img`

`;
