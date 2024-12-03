import React from "react";
import styled from "styled-components";
import PostLogin from "../../api/login/PostLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const InputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const LoginHandler = async () => {
    const { email, password } = formData;
    console.log("formData", formData);
    if (!email || !password) {
      alert("모든 필드를 작성해주세요!");
      return;
    }
    const response = await PostLogin(formData);
    console.log("response", response.data);
    if (response) {
      sessionStorage.setItem("accessToken", response.data.accessToken);
      navigate("/main");
    } else {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <LoginContainer>
      <LoginEmail
        type="email"
        id="email"
        placeholder="이메일"
        onChange={InputChange}
      ></LoginEmail>
      <LoginPassword
        type="password"
        id="password"
        placeholder="비밀번호"
        onChange={InputChange}
      ></LoginPassword>
      <LoginBtnContainer>
        <LoginButton onClick={LoginHandler}>로그인하기</LoginButton>
        <RegisterBtn onClick={() => navigate("/register")}>
          회원가입하기
        </RegisterBtn>
      </LoginBtnContainer>
    </LoginContainer>
  );
};

export default Login;
const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const LoginEmail = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;
const LoginPassword = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
`;
const LoginBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 30px;
`;
const LoginButton = styled.button`
  &:hover {
    color: gray;
  }
`;
const RegisterBtn = styled.button`
  &:hover {
    color: gray;
  }
`;
