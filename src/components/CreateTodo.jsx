import React, { useRef, useContext } from "react";
import { TodoContex } from "../store/todo-context";
import Button from "./UI/Button";

const CreateTodo = () => {
  const todoCtx = useContext(TodoContex);
  const newTodoRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredText = newTodoRef.current.value;
    // console.log(enteredText);
    todoCtx.createTodo(enteredText);

    newTodoRef.current.value = "";
  };
  return (
    <div className="w-full h-15 flex items-center rounded-lg">
      <Button />
      <form onSubmit={submitHandler}>
        <input
          ref={newTodoRef}
          className={`${"w-full h-15 outline-none text-xl py-2 bg-transparent"} ${
            todoCtx.mode && "text-white"
          }`}
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default CreateTodo;
