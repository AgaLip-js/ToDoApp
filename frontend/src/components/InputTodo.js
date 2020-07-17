import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledTitle = styled.h2``;
const StyledForm = styled.form``;
const StyledInput = styled.input``;
const StyledButton = styled.button``;
const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <StyledContainer>
      <StyledTitle>Pern Todo List</StyledTitle>
      <StyledForm onSubmit={onSubmitForm}>
        <StyledInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
        <StyledButton>Add</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default InputTodo;
