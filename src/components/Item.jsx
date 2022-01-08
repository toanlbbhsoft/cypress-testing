import React, { useContext } from "react";
import Button from "./UI/Button";
import { TodoContex } from "../store/todo-context";

const Item = ({ text, id }) => {
  const todoCtx = useContext(TodoContex);
  const item = todoCtx.items.find((item) => item.id === id);
  return (
    <li
      className={`${"flex flex-row items-center border-b-2 w-full transition duration-300 ease-out"} ${
        todoCtx.mode &&
        "border-dark-grayish-blue text-light-grayish-blue hover:text-light-brayish-blue-hover"
      } `}
    >
      <Button id={id} />
      <div
        onClick={() => {
          todoCtx.removeTodo(item.id);
        }}
        className={`${
          item?.isCheck && "line-through"
        } w-full hover:cursor-pointer`}
      >
        {text}
      </div>
    </li>
  );
};

export default Item;
