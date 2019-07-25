import styled from "styled-components/macro";
import { colors } from "../MediaQueries";
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.purpleBg};
  min-height: 100vh;
  box-sizing: border-box;
`;

export default Layout;
