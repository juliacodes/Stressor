import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { colors } from "../MediaQueries";
import Heading from "../components/Heading";
import ClassGrid from "../components/ClassGrid";

const MainContent = styled.div`
  min-width: 500px;
  width: 70vw;
  border-radius: 0px 20px 20px 0px;
  background-color: ${colors.lightGrayBg};
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`;

const DashCenter = styled.div`
  margin-left: 120px;
  margin-top: 120px;

  min-width: 300px;
  flex: 20%;

  span {
    font-weight: 200;
  }
`;

function Main() {
  return (
    <MainContent>
      <Navbar />
      <DashCenter>
        <Heading size="hero">
          <span>Hello,</span> <br />
          Morgan Kennedy
        </Heading>
        <p>
          Based on your current task count, you should be -{" "}
          <strong>stressed as hell.</strong>
        </p>
        <ClassGrid />
      </DashCenter>
    </MainContent>
  );
}

export default Main;
