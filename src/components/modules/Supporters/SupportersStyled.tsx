import styled, { css } from "styled-components";
import media from "styled-media-query";

interface BrandLogo {
  alt?: string;
}

const BrandsStyles = (value: string) => {
  switch (value) {
    case "marios":
      return css`
        height: 45px;
        /* max-width: 111px; */
        ${media.lessThan("medium")`
          /* width: 68px; */

        `}
        ${media.lessThan("small")`
          /* width: 48px; */

        `}
      `;
    case "fundacao":
      return css`
        height: 60px;
        /* max-width: 204px; */
        ${media.lessThan("medium")`
          /* width: 96px; */

        `}
        ${media.lessThan("small")`
          /* width: 76px; */
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
  justify-content: center;
  width: max-content;
  height: 100%;
`;

export const SupporterButtons = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;

export const SupporterBrandLogo = styled.img<BrandLogo>`
  margin: 0 10px;
  ${(props) => props.alt && BrandsStyles(props.alt)};
`;

export const Title = styled.p`
  color: ${(props) => props.theme.palette.text.secondary};
  line-height: 19px;
  text-align: center;
  max-width: 280px;
  font-family: Ubuntu;
  font-size: 14px;
  margin: 15px;
  color: #d3d3d3;
`;

const SupportersContainer = styled.div`
  display: flex;
`;

export { SupportersContainer };
