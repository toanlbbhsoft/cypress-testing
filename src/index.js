import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoContexProvider from "./store/todo-context";
ReactDOM.render(
  <TodoContexProvider>
    <App />
  </TodoContexProvider>,
  document.getElementById("root")
);
