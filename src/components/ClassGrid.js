import React, { Component } from "react";
import styled from "styled-components/macro";
import { colors } from "../MediaQueries";

const Container = styled.div`
  max-width: 600px;
  max-height: 900px;
  margin: auto 0 auto 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  transform: translateX(-40px);
`;

const CourseContainer = styled.div`
  width: 300px;
  height: 100px;
  margin-bottom: 60px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(231, 231, 231, 0.65);
  border-left: 9px solid ${colors.tealBlue};

  h1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 138.4%;
    margin-left: 20px;
    margin-top: 20px;
  }

  p {
    font-size: 12px;
    margin-top: 0;
    line-height: 138.4%;
    margin-left: 20px;
    color: #b5b5b5;
  }
`;

class ClassGrid extends Component {
  render() {
    const numbers = [
      { title: "Calculus", action: "Next assignment due Thursday" },
      { title: "Calculus", action: "Next assignment due Thursday" },
      3,
      4,
      5
    ];
    const listItems = numbers.map(number => (
      <CourseContainer>
        <h1>{number.title}</h1>
        <p>{number.action}</p>
      </CourseContainer>
    ));

    return <Container>{listItems}</Container>;
  }
}

export default ClassGrid;
