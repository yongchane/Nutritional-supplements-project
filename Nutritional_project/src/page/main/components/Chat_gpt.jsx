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

  const gptData = [{ title: data?.title, content: data?.content, qus: qs }];

  return (
    <ChatContainer>
      <Header>
        <BackHeader back={"/main"} title={"AI 채팅"} />
      </Header>
      <Container>
        <ChatBox>
          {gptData.map((item) => (
            <div>
              <GptBox>
                <GptImg></GptImg>
                <Gpt>
                  <GptName>Bio</GptName>
                  <GptContent>
                    <div>약이름: {item?.title}</div>
                    <div>content: {item?.content}</div>
                  </GptContent>
                </Gpt>
              </GptBox>
              <MyContent>
                <div>내 질문:{item.qus}</div>
              </MyContent>
            </div>
          ))}
        </ChatBox>
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
  height: calc(100vh - 49px- 103px);
  overflow-y: auto;
`;
const Header = styled.div`
  width: 100%;
  height: 49px;
  position: sticky;
  top: 0;
  z-index: 1000;
  color: #fff;
`;

const ChatBox = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 35px;
`;
const GptBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 10px;
`;
const GptImg = styled.div`
  width: 40px;
  height: 40px;
  background: #e3e3e3;
  border-radius: 29px;
`;
const GptContent = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 0px 10px 10px 10px;
  background: var(--white, #fff);
`;
const GptName = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
`;
const Gpt = styled.div``;
const MyContent = styled.div`
  max-width: 220px;
  min-width: 100px;
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  color: var(--white, #fff);
  border-radius: 10px 0px 10px 10px;
  background: #393939;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 5px;
  margin-top: 40px;
`;
