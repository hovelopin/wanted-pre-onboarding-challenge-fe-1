import styled from "styled-components";

const TodoWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const TodoTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const TodoAddBtn = styled.button``;
const TodoUpdateBtn = styled.button``;
const TodoDeleteBtn = styled.button``;
const TodoAddInput = styled.input.attrs({
  placeholder: "제목",
})`
  display: block;
  margin-top: 20px;
`;
const TodoAddText = styled.textarea.attrs({
  placeholder: "상세 내용",
})``;

const TodoListContainer = styled.div`
  margin-bottom: 20px;
`;

const TodoUpdateInput = styled(TodoAddInput)``;
const TodoUpdateText = styled(TodoAddText)``;

export {
  TodoWrapper,
  TodoTitle,
  TodoAddBtn,
  TodoUpdateBtn,
  TodoDeleteBtn,
  TodoAddInput,
  TodoAddText,
  TodoListContainer,
  TodoUpdateInput,
  TodoUpdateText,
};
