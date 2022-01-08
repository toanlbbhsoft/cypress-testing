import React, {  useContext } from "react";
import { TodoContex } from "../store/todo-context";
const Header = () => {
  const todoCtx = useContext(TodoContex);
  const changeModeHandler = () => {
    todoCtx.changeMode();
  };

  return (
    <div className="flex flex-row justify-between text-white w-full mb-8 ">
      <p className="text-3xl font-bold text-white ">TO DO</p>
      <img
        className="w-6 h-6 cursor-pointer hover:w-7 hover:h-7 duration-300 "
        onClick={changeModeHandler}
        src={`${
          todoCtx.mode
            ? process.env.PUBLIC_URL + "/images/icon-moon.svg"
            : process.env.PUBLIC_URL + "/images/icon-sun.svg"
        }`}
      />
    </div>
  );
};

export default Header;
