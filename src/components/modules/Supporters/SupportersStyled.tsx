import styled, { css } from "styled-components";
import media from "styled-media-query";

interface BrandLogo {
  alt?: string,
}

const BrandsStyles = (value: string) => {
  switch (value) {
    case "marios":
      return css`
        max-width: 111px;
        ${media.lessThan("medium")`
          width: 68px;

        `}
        ${media.lessThan("small")`
          width: 48px;

        `}
      `;
    case "fundacao":
      return css`
        max-width: 204px;
        ${media.lessThan("medium")`
          width: 96px;

        `}
        ${media.lessThan("small")`
          width: 76px;
        `}
      `;
    default:
      break;
  }
};

export const SupporterShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: max-content;
  height: 100%;
`;

export const SupporterButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;

export const SupporterBrandLogo = styled.img<BrandLogo>`
  ${(props) => props.alt && BrandsStyles(props.alt)};
`;

export const Title = styled.p`
  font-family: Ubuntu;
  font-weight: 500;
  font-size: 10px;
  line-height: 11px;
  color: #9D9D9D;
  ${media.greaterThan("medium")`
    font-family: Ubuntu;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  `}
`;

const SupportersContainer = styled.div`
  display: flex;
`;

export { SupportersContainer };
