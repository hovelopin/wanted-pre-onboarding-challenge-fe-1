import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import { TodoTitle, TodoWrapper } from "./TodoStyles";

const Todo = () => {
  const [todosData, setTodosData] = useState<any>();

  useEffect(() => {
    axios
      .get("/todos", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setTodosData(res.data.data);
      });
  }, []);

  return (
    <TodoWrapper>
      <TodoCreate />
      <TodoTitle>TodoList</TodoTitle>
      {todosData?.map((todo: any, index: string) => (
        <TodoList todo={todo} key={index} />
      ))}
    </TodoWrapper>
  );
};

export default Todo;
