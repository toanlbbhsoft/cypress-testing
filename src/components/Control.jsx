import React, { useContext, useState, useEffect } from "react";
import { TodoContex } from "../store/todo-context";

const Control = (props) => {
  const todoCtx = useContext(TodoContex);
  const [type, setType] = useState("all");
  const [nums, setNums] = useState(0);
  const changeStatusHandler = (status) => {
    props.status(status);
    setType(status);
  };
  const clearCompletedHandler = () => {
    for (const item of todoCtx.items) {
      item.isCheck && todoCtx.removeTodo(item.id);
    }
  };
  useEffect(() => {
    let temp = 0;
    todoCtx.items?.map((item) => {
      !item.isCheck && temp++;
    });
    setNums(temp);
  }, [todoCtx.items]);

  const mainBTN = (
    <>
      <p
        className={`${"mx-2 cursor-pointer hover:text-black"} ${
          type === "all" && "text-sky-400"
        } ${todoCtx.mode && "hover:text-white"}`}
        onClick={changeStatusHandler.bind(null, "all")}
      >
        All
      </p>
      <p
        className={`${"mx-2 cursor-pointer hover:text-black"} ${
          type === "active" && "text-sky-400"
        } ${todoCtx.mode && "hover:text-white"}`}
        onClick={changeStatusHandler.bind(null, "active")}
      >
        Active
      </p>
      <p
        className={`${"mx-2 cursor-pointer hover:text-black"} ${
          type === "completed" && "text-sky-400"
        } ${todoCtx.mode && "hover:text-white"}`}
        onClick={changeStatusHandler.bind(null, "completed")}
      >
        Completed
      </p>
    </>
  );
  return (
    <div className="flex flex-row justify-between p-4 text-gray-500 ">
      <p className="notMain">{nums} items left</p>
      <div className="flex mainBTN items-center">
        {mainBTN}
      </div>
      <p
        className={`${"cursor-pointer hover:text-black notMain"} ${
          todoCtx.mode && "hover:text-white"
        }`}
        onClick={clearCompletedHandler}
      >
        Clear Completed
      </p>
    </div>
  );
};

export default Control;
