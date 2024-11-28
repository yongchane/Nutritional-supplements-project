import React from "react";
import styled from "styled-components";
import PostRegister from "../../api/login/PostRegister";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nickname: "",
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

  console.log("formData", formData);
  const registerHandler = async () => {
    const { nickname, email, password } = formData;
    if (!nickname || !email || !password) {
      alert("모든 필드를 작성해주세요!");
      return;
    }

    // console.log("requestBody", requestBody, "formData", formData);
    const response = await PostRegister(formData);
    console.log("response", response);
    if (response) {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("accessToken", response);
      console.log("sessionStorage", sessionStorage);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } else {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <RegisterContainer>
      <RegisterNickname
        type="nickname"
        id="nickname"
        value={formData.nickname}
        onChange={InputChange}
      />
      <RegisterEmail
        type="email"
        id="email"
        value={formData.email}
        onChange={InputChange}
      />
      <RegisterPasswd
        type="password"
        id="password"
        value={formData.password}
        onChange={InputChange}
      />
      <RegisterButton onClick={registerHandler}>회원가입</RegisterButton>
    </RegisterContainer>
  );
};

export default Login;

const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterNickname = styled.input``;

const RegisterEmail = styled.input``;

const RegisterPasswd = styled.input``;

const RegisterButton = styled.button``;
