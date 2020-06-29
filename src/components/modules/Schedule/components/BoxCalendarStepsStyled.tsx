import styled from "styled-components";
import media from "styled-media-query";

export const CalendarStepsWrapper = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 32px;
  padding: 32px 20px;
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  justify-content: center;

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(5, 1fr);
  `}
`;

export const CalendarStepsTitle = styled.h2`
  font-size: 21px;
  line-height: 21px;
  text-transform: uppercase;
  background: linear-gradient(to top, #81caa8 0%, #53c1de 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 32px auto 0;
`;

export const CalendarStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 170px;
  justify-content: space-between;
`;

export const CalendarStepImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #161616;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8),
    -1px -1px 3px rgba(123, 122, 122, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarStepImage = styled.img``;

export const CalendarStepDescriptionWrapper = styled.div``;

export const CalendarStepTitle = styled.h3`
  font-weight: bold;
  font-family: Ubuntu Mono;
  margin-right: 5px;
`;

export const CalendarStepDescription = styled.span`
  font-style: normal;
  font-size: 16px;
  color: #f0f0f0;
  font-family: Ubuntu Mono;
  text-align: center;
`;
