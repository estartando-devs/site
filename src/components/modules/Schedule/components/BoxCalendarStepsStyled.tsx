import styled, { css } from "styled-components";
import media from "styled-media-query";

interface ICalendarStep {
  disabled: boolean;
}

export const CalendarStepsWrapper = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  gap: 40px;
  padding: 50px 20px 20px 20px;
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  justify-content: center;

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(auto-fit, minmax(180px, 220px));
    margin-bottom: 70px;
  `}
`;

export const CalendarStepsTitle = styled.h2`
  font-size: 21px;
  font-family: Ubuntu Mono;
  line-height: 21px;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(to top, #81caa8 0%, #53c1de 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 32px auto 0;
  padding: 0 10px;
  line-height: 25px;
`;

export const CalendarStep = styled.div<ICalendarStep>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 170px;
  justify-content: space-between;
  margin-bottom: 30px;

  ${(props) =>
    props.disabled &&
    css`
      filter: opacity(0.4) saturate(0) brightness(0.7);
    `}
`;

export const CalendarStepImageWrapper = styled.div`
  width: 120px;
  min-height: 120px;
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
  font-family: Ubuntu;
  margin-right: 5px;
  color: #f0f0f0;
  font-size: 16px;
`;

export const CalendarStepDescription = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #f0f0f0;
  font-family: Ubuntu;
  text-align: center;
  ${media.greaterThan("medium")`
    display: flex;
    flex-direction: column;
  `}
`;
