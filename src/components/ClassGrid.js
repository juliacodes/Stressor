import React, { Component } from "react";
import styled from "styled-components/macro";

const GridWrapper = styled.div``;
class ClassGrid extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(number => <li>{number}</li>);

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
