import React, { Component } from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  margin-top: 100px;

  h2 {
    font-weight: normal;
  }
`;

const ToDoBox = styled.input`
  border: none;
  background-color: blue;
  color: pink;
`;
const ToDoTitle = styled.label``;

class ToDo extends Component {
  render() {
    return (
      <Container>
        <h2>Priority</h2>
        <form action="/action_page.php">
          <ToDoBox type="checkbox" id="todo" name="vehicle2" value="Car" />
          <ToDoTitle for="todo">Todo</ToDoTitle>
        </form>
        <h2>Later</h2>
      </Container>
    );
  }
}

export default ToDo;
