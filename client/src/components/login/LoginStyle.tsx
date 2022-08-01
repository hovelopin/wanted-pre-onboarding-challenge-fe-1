import styled from "styled-components";

const LoginWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const LoginTitle = styled.h2`
  font-size: 25px;
  text-align: center;
`;

const LoginIdInput = styled.input.attrs({
  placeholder: "아이디를 입력해주세요",
})`
  display: block;
  width: 340px;
  height: 54px;
  border-radius: 3px;
  border: 1px solid rgb(96, 126, 170);
  padding-left: 8px;
  font-size: 16px;
`;

const LoginPwInput = styled(LoginIdInput).attrs({
  placeholder: "비밀번호를 입력해주세요",
})`
  margin-bottom: 20px;
`;

const LoginSubmitBtn = styled.button`
  display: block;
  width: 340px;
  height: 54px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 3px;
  border: none;
  color: #ffffff;
  background-color: rgb(96, 126, 170);
  cursor: pointer;
`;

const LoginRegisterBtn = styled(LoginSubmitBtn)`
  border: 1px solid rgb(96, 126, 170);
  background-color: rgb(255, 255, 255);
  color: rgb(96, 126, 170);
`;

export {
  LoginWrapper,
  LoginTitle,
  LoginIdInput,
  LoginPwInput,
  LoginSubmitBtn,
  LoginRegisterBtn,
};
