import React from "react";
import {
  EmailInput,
  EmailTitle,
  Title,
  RegisterWrapper,
  PasswordTitle,
  PasswordInput,
  SubmitBtn,
  CheckPasswordInput,
  CheckPasswordTitle,
} from "./RegisterStyle";

const Register = () => {
  return (
    <RegisterWrapper>
      <Title>회원가입</Title>
      <EmailTitle>이메일</EmailTitle>
      <EmailInput />
      <PasswordTitle>비밀번호</PasswordTitle>
      <PasswordInput />
      <CheckPasswordTitle>비밀번호 확인</CheckPasswordTitle>
      <CheckPasswordInput />
      <SubmitBtn>확인</SubmitBtn>
    </RegisterWrapper>
  );
};

export default Register;
