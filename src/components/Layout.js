import styled from "styled-components/macro";
import { colors } from "../MediaQueries";
const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: ${colors.lightGrayBg};
  min-height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
`;

export default Layout;
