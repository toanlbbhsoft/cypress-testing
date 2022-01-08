import { useState, useContext, useEffect } from "react";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import ListItems from "./components/ListItems";
import Card from "./components/UI/Card";
import Control from "./components/Control";
import Footer from "./components/Footer";
import { TodoContex } from "./store/todo-context";
function App() {
  const [type, setType] = useState("all");
  const changeStatusHandler = (status) => {
    setType(status);
  };
  const todoCtx = useContext(TodoContex);
  useEffect(() => {
    if (!todoCtx.mode) {
      document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
      // document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL} +"/images/bg-desktop-light")`;
      document.body.classList.remove("dark-mode");
    } else {
      document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
      document.body.classList.add("dark-mode");
    }
  }, [todoCtx.mode]);
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div className="flex flex-col mx-auto w-2/5 my-16 main">
        <Header />
        <Card>
          <CreateTodo />
        </Card>
        <div className="firstCard">
          <Card>
            <ListItems status={type} />
            <Control status={changeStatusHandler} />
          </Card>
        </div>

        <div className="secondCard">
          <Card>
            <Control status={changeStatusHandler} />
          </Card>
        </div>
      </div>
      <div className="text-center mb-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;
