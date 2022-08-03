import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    axios.post("http://localhost:8080/users/login", user).then((res) => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/");
    });
  };

  // Error : enter를 눌렀을때 로그인 버튼을 눌러서 홈으로 이동시켜야되는데 작동을 안함
  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <LoginIdInput name="email" onChange={handleChangeUserState} />
      <LoginPwInput name="password" onChange={handleChangeUserState} />
      <LoginSubmitBtn type="submit" onClick={handleClickLogin}>
        로그인
      </LoginSubmitBtn>
      <Link to="/auth/register">
        <LoginRegisterBtn type="button">회원가입</LoginRegisterBtn>
      </Link>
    </LoginWrapper>
  );
};

export default Login;
