import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("/img/background-header.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ScrollLink = styled.a`
  position: absolute;
  cursor: pointer;
  bottom: 30px;
`;