import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EditTodo from "./EditTodo";
const axios = require("axios");

const StyledTable = styled.table`
  display: grid;
  justify-content: center;
  margin: 20px;
  grid-template-rows: repeat(2, auto);
`;
const StyledTHead = styled.thead``;
const StyledTr = styled.tr`
  grid-template-columns: repeat(3, 100px);
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const StyledButton = styled.button`
  background: red;
  color: white;
`;
const StyledTh = styled.th``;
const StyledTBody = styled.tbody``;
const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.massage);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <StyledTable>
      <StyledTHead>
        <StyledTr>
          <StyledTh>Description</StyledTh>
          <StyledTh>Edit</StyledTh>
          <StyledTh>Delete</StyledTh>
        </StyledTr>
      </StyledTHead>
      <StyledTBody>
        {/* 
           <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
          */}
        {todos.map((todo) => (
          <StyledTr key={todo.id}>
            <td>{todo.description}</td>
            <td>
              <EditTodo todo={todo} />
            </td>
            <td>
              <StyledButton onClick={() => deleteTodo(todo.id)}>
                Delete
              </StyledButton>
            </td>
          </StyledTr>
        ))}
      </StyledTBody>
    </StyledTable>
  );
};

export default ListTodos;
