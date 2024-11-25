import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Send } from "../../../assets/health/send.svg";
import { ReactComponent as Plus } from "../../../assets/health/plus.svg";

const InputBox = ({ onClick }) => {
  //사용자의 입력을 받아, 상위컴포넌트로 데이터 전달
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    onClick(userInput);
    setUserInput("");
  };
  return (
    <InputBoxContainer>
      <InputPlus>
        <Plus />
      </InputPlus>
      <InputBoxTextarea
        value={userInput}
        onChange={handleUserInput}
        placeholder="중심에 따른 영양제를 추천해 드려요"
        rows={4} // 텍스트박스 높이 조정 (선택 사항)
      />
      <InputbtnIcon onClick={handleClick}>
        <Send />
      </InputbtnIcon>
    </InputBoxContainer>
  );
};

export default InputBox;

const InputBoxContainer = styled.div`
  display: flex;

  width: 100%;
  height: 48px;
  position: sticky;
  bottom: 0;
  left: 0;
  background: #ffffff;
  padding: 12px 10px;
`;
const InputBoxTextarea = styled.input`
  width: 259px;
  height: 18px;
  margin-left: 15px;
`;
const InputPlus = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
`;
const InputbtnIcon = styled(Send)`
  width: 22px;
  height: 22px;
  margin-left: 45px;
`;
