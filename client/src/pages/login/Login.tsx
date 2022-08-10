import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import customAxios from "../../api/customAxios";
import { TUserState } from "../../types/userAuthTypes";
import {
  LoginIdInput,
  LoginPwInput,
  LoginRegisterBtn,
  LoginSubmitBtn,
  LoginTitle,
  LoginWrapper,
} from "./LoginStyles";

// TODO : 추후에 React Hook Form을 이용해서 리팩토링 진행할 예정
const Login = () => {
  const [user, setUser] = useState<TUserState>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeUserState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // TODO : try - catch를 사용하여 error 처리도 해주면 좋을 것 같다.
  const handleClickLogin = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    customAxios.post("/users/login", user).then((res) => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/");
    });
  };

  return (
    <form>
      <LoginWrapper>
        <LoginTitle>로그인</LoginTitle>
        <LoginIdInput name="email" onChange={handleChangeUserState} />
        <LoginPwInput name="password" onChange={handleChangeUserState} />
        <LoginSubmitBtn onClick={handleClickLogin}>로그인</LoginSubmitBtn>
        <Link to="/auth/register">
          <LoginRegisterBtn>회원가입</LoginRegisterBtn>
        </Link>
      </LoginWrapper>
    </form>
  );
};

export default Login;
