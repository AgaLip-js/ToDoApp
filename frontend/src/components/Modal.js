import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  width: 600px;
  background: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px black solid;
  display: ${(props) => (props ? "block" : "none")};
`;
const StyledDialog = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledTitle = styled.h4``;
const StyledButton = styled.button`
  height: 20px;
  position: absolute;
  right: 0;
  margin: 20px;
`;
const Modal = ({ open, setOpen, description, setDescription, todo }) => {
  const editText = async (id) => {
    try {
      const body = { description };
      const response = await fetch(`/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <StyledModal props={open} id={`id${todo.id}`}>
      <StyledDialog>
        <StyledHeader>
          <StyledTitle>Edit Todo</StyledTitle>
          <StyledButton
            onClick={() => {
              setOpen(false);
              setDescription(todo.description);
            }}
          >
            &times;
          </StyledButton>
        </StyledHeader>

        <div class="modal-body">
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
            onClick={() => editText(todo.id)}
          >
            Edit
          </button>
          <button
            onClick={() => {
              setOpen(false);
              setDescription(todo.description);
            }}
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </StyledDialog>
    </StyledModal>
  );
};

export default Modal;
