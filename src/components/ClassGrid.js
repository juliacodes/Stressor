import React, { Component } from "react";
import styled from "styled-components/macro";

const GridWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CourseContainer = styled.div`
  flex: 100%;
  width: 200px;
  background-color: blue;
`;

class ClassGrid extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(number => (
      <CourseContainer>
        <p>{number}</p>
      </CourseContainer>
    ));

    return (
      <div>
        <GridWrapper>
          <div>{listItems}</div>,
        </GridWrapper>
      </div>
    );
  }
}

export default ClassGrid;
