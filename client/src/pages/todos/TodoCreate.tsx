import axios from "axios";
import React, { useState } from "react";
import { TodoAddBtn, TodoAddInput, TodoAddText } from "./TodoStyles";

type TTodosState = {
  title: string;
  content: string;
};

const TodoCreate = () => {
  const [todos, setTodos] = useState<TTodosState>({
    title: "",
    content: "",
  });

  const handleTodosChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTodos({
      ...todos,
      [name]: value,
    });
  };

  const handleCreateTodo = () => {
    axios.post("http://localhost:8080/todos", todos, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
  };

  return (
    <form onSubmit={handleCreateTodo}>
      <TodoAddInput name="title" onChange={handleTodosChange} />
      <TodoAddText name="content" onChange={handleTodosChange} />
      <TodoAddBtn>추가하기</TodoAddBtn>
    </form>
  );
};

export default TodoCreate;
