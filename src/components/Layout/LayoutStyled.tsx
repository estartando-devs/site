import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.background.default};
`;

const LayoutContent = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { LayoutContainer, LayoutContent };
