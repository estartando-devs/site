import styled from "styled-components";
import media from "styled-media-query";
import { Typography, Button } from "../../elements";

const BannerApprovedContainer = styled.div`
  padding: 70px 100px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette?.design?.main};

  ${media.lessThan("medium")`
    padding-left: 10px;
    padding-right: 10px;
  `}
`;

const BannerContent = styled.div`
  width: 100%;
  max-width: 1028px;
  display: flex;
  flex-direction: column;
`;

const BannerTitle = styled(Typography).attrs({
  variant: "h2",
  weight: "bold",
})`
  margin-bottom: 15px;
`;

const BannerDescription = styled(Typography).attrs({
  variant: "body1",
  weight: "400",
})`
  max-width: 500px;
  margin-bottom: 30px;
`;

const BannerButton = styled(Button).attrs({
  size: "large",
  variant: "secondary",
})`
  color: ${(props) => props.theme.palette?.design?.main};
  max-width: 470px;

  &:hover {
    color: ${(props) => props.theme.palette?.design?.main};
  }
`;

export {
  BannerApprovedContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerButton,
};
