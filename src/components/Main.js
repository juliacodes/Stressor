import React from "react";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import { colors } from "../MediaQueries";

const MainContent = styled.div`
  min-width: 300px;
  width: 50vw;
  background-color: white;
  display: flex;
  justify-content: center;
  margin-left: 8%;
  flex-wrap: nowrap;
`;

const DashCenter = styled.div`
  min-width: 300px;
  flex: 20%;

  span {
    font-weight: 200;
  }
`;

function Main() {
  return (
    <MainContent>
      <DashCenter />
    </MainContent>
  );
}

export default Main;
