import React from "react";
import { Link } from "react-router-dom";
import {
  LoginIdInput,
  LoginPwInput,
  LoginRegisterBtn,
  LoginSubmitBtn,
  LoginTitle,
  LoginWrapper,
} from "./LoginStyle";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <LoginIdInput />
      <LoginPwInput />
      <LoginSubmitBtn>로그인</LoginSubmitBtn>
      <Link to="/auth/register">
        <LoginRegisterBtn>회원가입</LoginRegisterBtn>
      </Link>
    </LoginWrapper>
  );
};

export default Login;
