import React from "react";
import styled from "styled-components/macro";
import ToDo from "../components/ToDo";
import { colors } from "../MediaQueries";

const MainContent = styled.div`
  min-width: 300px;
  width: 50vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8%;
  flex-wrap: nowrap;
`;

const DashCenter = styled.div`
  width: 100%;
  min-height: 300px;
  padding-left: 40px;

  h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 138.4%;
  }

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 150.4%;
    color: gray;
  }
`;

function Main() {
  return (
    <MainContent>
      <DashCenter>
        <h1>Task Overview</h1>
        <p>
          Based on your current workload, you should be <strong>relaxed</strong>
        </p>
        <ToDo />
      </DashCenter>
    </MainContent>
  );
}

export default Main;
