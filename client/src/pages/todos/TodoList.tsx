import axios from "axios";
import React, { useState } from "react";
import {
  TodoListContainer,
  TodoUpdateInput,
  TodoUpdateText,
} from "./TodoStyles";

// TODO : 나중에 any 타입들을 다 고쳐준다.
const TodoList = ({ todo, index }: any) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [updateData, setUpdateData] = useState<any>({
    title: todo.title,
    content: todo.content,
  });

  const handleChangeEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };

  // ERROR : DELETE랑 똑같이 수정을 한 다음에 새로고침해야 데이터가 업데이트가 된다.
  // CREATE만 자동으로 업데이트가 되는데 그 차이를 모르겠다 로직은 비슷한거 같은데 왜 얘는 업데이트가 안되는걸까
  // 추측으로는 Todo가 뿌려주는 데이터쪽인데 그 쪽의 상태가 변경이 안되서 그런 것 같음
  const handleUpdateTodo = (id: string) => {
    axios.put(`http://localhost:8080/todos/${todo.id}`, updateData, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    setIsEdit(!isEdit);
  };

  // ERROR : 상태가 변한것이 없어서 새로고침을 해야지 데이터가 삭제됨
  const handleRemoveTodo = (id: string) => {
    axios.delete(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
  };

  return (
    <TodoListContainer>
      {!isEdit ? (
        <>
          <h1>제목 : {todo.title}</h1>
          <h3>상세 : {todo.content}</h3>
          <button onClick={handleChangeEdit}>수정</button>
          <button onClick={() => handleRemoveTodo(todo.id)}>제거</button>
        </>
      ) : (
        <>
          <TodoUpdateInput
            name="title"
            defaultValue={todo.title}
            onChange={handleDataChange}
          />
          <TodoUpdateText
            name="content"
            defaultValue={todo.content}
            onChange={handleDataChange}
          />
          <button onClick={() => handleUpdateTodo(todo.id)}>수정하기</button>
        </>
      )}
    </TodoListContainer>
  );
};

export default TodoList;
