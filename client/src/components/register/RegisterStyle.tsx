import styled from "styled-components";

const Title = styled.h2`
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
`;

const RegisterWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
`;

const EmailTitle = styled.h3``;
const EmailInput = styled.input`
  display: block;
  width: 340px;
  height: 54px;
  border-radius: 3px;
  border: 1px solid rgb(96, 126, 170);
  margin-bottom: 20px;
  font-size: 16px;
  padding-left: 8px;
`;
const PasswordTitle = styled.h3``;
const PasswordInput = styled(EmailInput).attrs({
  type: "password",
})``;
const CheckPasswordTitle = styled(PasswordTitle)``;
const CheckPasswordInput = styled(PasswordInput)``;

const SubmitBtn = styled.button`
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

export {
  Title,
  RegisterWrapper,
  PasswordTitle,
  EmailInput,
  EmailTitle,
  PasswordInput,
  SubmitBtn,
  CheckPasswordInput,
  CheckPasswordTitle,
};
