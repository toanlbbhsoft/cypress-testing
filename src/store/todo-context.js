import React, { useState } from "react";
export const TodoContex = React.createContext({
  items: [
    {
      text: "",
      id: "",
      isCheck: false,
    },
  ],
  mode: false,
  checkTodo: (id) => {},
  removeTodo: (id) => {},
  createTodo: (item) => {},
  changeMode: () => {},
});
const TodoContexProvider = (props) => {
  const [items, setItems] = useState([
    { text: "Add new todo & press Enter", id: "1", isCheck: false },
    { text: "Click the text to delete", id: "2", isCheck: false },
    { text: "Click the left button if you complete", id: "3", isCheck: false },
  ]);
  const [mode, setMode] = useState(false);
  const createTodoHandler = (item) => {
    setItems((prev) => [
      ...prev,
      { text: item, isCheck: false, id: Math.random().toString() },
    ]);
  };
  const removeTodoHandler = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const checkItemsHandler = (id) => {
    const allItems = [...items];
    allItems.find((item) => item.id === id).isCheck = !allItems.find(
      (item) => item.id === id
    ).isCheck;
    setItems(allItems);
  };
  const changeModeHandler = () => {
    setMode((prev) => !prev);
  };
  const contexvalue = {
    items: items,
    mode: mode,
    checkTodo: checkItemsHandler,
    createTodo: createTodoHandler,
    removeTodo: removeTodoHandler,
    changeMode:changeModeHandler,
  };
  return (
    <TodoContex.Provider value={contexvalue}>
      {props.children}
    </TodoContex.Provider>
  );
};

export default TodoContexProvider;
