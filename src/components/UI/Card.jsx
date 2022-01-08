import React, { useContext } from "react";
import { TodoContex } from "../../store/todo-context";
const Card = (props) => {
  const todoCtx = useContext(TodoContex);
  return (
    <div
      className={`${"w-full gap-2 shadow-xl h-auto bg-white items-center justify-start rounded-lg my-4 transition duration-300 ease-out card"} ${
        todoCtx.mode && "bg-dark-desaturated-blue"
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
