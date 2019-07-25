import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { colors } from "../MediaQueries";

const MainContent = styled.div`
  min-width: 500px;
  width: 70vw;
  border-radius: 0px 20px 20px 0px;
  background-color: ${colors.lightGrayBg};
`;

function Main() {
  return (
    <MainContent>
      <Navbar />
    </MainContent>
  );
}

export default Main;
