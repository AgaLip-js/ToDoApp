import React, { useState } from "react";
import Modal from "./Modal";

const EditTodo = ({ todo }) => {
  const [open, setOpen] = useState(false);
  console.log(todo);
  const [description, setDescription] = useState(todo.description);
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-target={`#id${todo.id}`}
        onClick={() => setOpen(true)}
      >
        Edit
      </button>
      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          todo={todo}
          description={description}
          setDescription={setDescription}
        />
      )}
    </>
  );
};

export default EditTodo;
