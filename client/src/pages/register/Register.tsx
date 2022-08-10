import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import customAxios from "../../api/customAxios";
import { TUserState } from "../../types/userAuthTypes";
import { validateEmail, validatePassword } from "../../utils/validation";

import {
  CheckPasswordInput,
  CheckPasswordTitle,
  EmailInput,
  EmailTitle,
  PasswordInput,
  PasswordTitle,
  RegisterWrapper,
  SubmitBtn,
  Title,
} from "./RegisterStyles";

// TODO : 추후에 React Hook Form을 이용해서 리팩토링 진행할 예정
const Register = () => {
  const [user, setUser] = useState<TUserState>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleClickRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(user.email) || !validatePassword(user.password)) {
      alert("아이디 또는 비밀번호 형식이 맞지 않습니다.");
    }

    customAxios.post("/users/create", user).then((res) => {
      alert("회원가입에 성공했습니다.");
      navigate("/auth/login");
    });
  };

  // TODO : enter를 눌렀을때 그때의 값만 알면되는건데 굳이 state로 관리해야할까?? 고민해보기
  // TODO : try - catch를 사용하여 error 처리도 해주면 좋을 것 같다.
  const handleChangeUserState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleClickRegister}>
      <RegisterWrapper>
        <Title>회원가입</Title>
        <EmailTitle>이메일</EmailTitle>
        <EmailInput name="email" onChange={handleChangeUserState} />
        <PasswordTitle>비밀번호</PasswordTitle>
        <PasswordInput name="password" onChange={handleChangeUserState} />
        <CheckPasswordTitle>비밀번호 확인</CheckPasswordTitle>
        <CheckPasswordInput />
        <SubmitBtn>확인</SubmitBtn>
      </RegisterWrapper>
    </form>
  );
};

export default Register;
