import React, { useContext, useEffect, useState } from "react";
import { TodoContex } from "../store/todo-context";
import Item from "../components/Item";


const ListItems = ({ status }) => {
  const todoCtx = useContext(TodoContex);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (status === "all") setItems(todoCtx.items);
    else if (status === "active") {
      setItems(todoCtx.items.filter((item) => !item.isCheck));
    } else if (status === "completed") {
      setItems(todoCtx.items.filter((item) => item.isCheck));
    }
  }, [status, todoCtx.items, todoCtx.items.length]);
  console.log('items',todoCtx.items)
  return (
    <ul className="flex flex-col justify-start w-full overflow-y-auto scroll-smooth overflow-hidden max-h-64">
      {items?.map((item) => (
        <Item text={item.text} key={item.id} id={item.id} />
      ))}
    </ul>
  );
};

export default ListItems;
