import React, { useContext } from "react";
import { TodoContex } from "../../store/todo-context";

const Button = ({ id }) => {
  const todoCtx = useContext(TodoContex);
  const item = todoCtx.items.find((item) => item.id === id);

  if (!id) {
    return (
      <div className="rounded-full border-2 w-5 h-5 my-4 mx-5 cursor-pointer"></div>
    );
  }
  return (
    <div
      onClick={() => {
        todoCtx.checkTodo(item.id);
      }}
      className={`${"flex justify-center items-center rounded-full border-2 w-5 h-5 my-4 mx-5 cursor-pointer"} ${
        item?.isCheck && "bg-checked border-checked"
      }`}
    >
      {item?.isCheck && (
        <img src={process.env.PUBLIC_URL + "./images/icon-check.svg"} />
      )}
    </div>
  );
};

export default Button;
