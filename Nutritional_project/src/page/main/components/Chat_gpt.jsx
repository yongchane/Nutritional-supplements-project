import React, { useState } from "react";
import { CallGpt } from "../../../api/gpt.js";
import InputBox from "./InputBox";
import styled from "styled-components";
import BackHeader from "../../BackHeader";

const fake = JSON.parse(`{"title": "약 이름", "content":"영양제 내용"}`);

const Chat_gpt = () => {
  const [data, setData] = useState(fake);
  const [loading, setLoading] = useState(false);
  const [qs, setQs] = useState();

  const handleClickGpt = async (userInput) => {
    try {
      setLoading(true);
      const message = await CallGpt({
        prompt: `${userInput}`,
      });

      // 백틱과 ```json 포맷 제거
      const cleanedMessage = message.replace(/```json|```/g, "").trim();

      // JSON 파싱 후 상태 업데이트
      setData(JSON.parse(cleanedMessage));
      setQs(userInput);
      console.log("inputdata", userInput, "message", message);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContainer>
      <Header>
        <BackHeader back={"/main"} title={"AI 채팅"} />
      </Header>
      <Container>
        <div>내 질문: {qs}</div>
        <div>약이름: {data?.title}</div>
        <div>content: {data?.content}</div>
        {/* <div>ingredient: {data?.ingredient}</div>
      <div>effect: {data?.effect}</div>
      <div>taking: {data?.taking}</div> */}
      </Container>
      <InputBoxContainer>
        <InputBox onClick={handleClickGpt} />
      </InputBoxContainer>
    </ChatContainer>
  );
};

export default Chat_gpt;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #6832e2;
`;
const InputBoxContainer = styled.div`
  width: 100%;
  height: 103px;
  position: sticky;
  bottom: 0;
  display: flex;
  background: #fff;
  padding: 12px 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Header = styled.div`
  width: 100%;
  height: 49px;
  position: sticky;
  top: 0;

  z-index: 100;
  color: #fff;
`;
