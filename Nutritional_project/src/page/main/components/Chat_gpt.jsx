import React, { useState, useEffect } from "react";
import { CallGpt } from "../../../api/gpt.js";
import InputBox from "./InputBox";
import styled from "styled-components";
import BackHeader from "../../BackHeader";

const fake = JSON.parse(
  `{"title": "AI 채팅을 통해서 영양제를 추천받아 셀프 메디케이션을 더 효과적으로 경험해보세요 !", "content":""}`
);

const Chat_gpt = () => {
  const [data, setData] = useState(fake);
  const [loading, setLoading] = useState(false);
  const [qs, setQs] = useState();
  const [history, setHistory] = useState([]); // 새로운 상태 변수 추가

  // 상태가 변경될 때마다 history 배열에 추가
  useEffect(() => {
    if (data?.title || data?.content || qs) {
      setHistory((prevHistory) => [
        ...prevHistory,
        { title: data?.title, content: data?.content, question: qs },
      ]);
    }
  }, [data?.title, data?.content, qs]); // 의존성 배열에 추가

  const handleClickGpt = async (userInput) => {
    try {
      setLoading(true);
      const message = await CallGpt({
        prompt: `${userInput}`,
      });

      // 백틱과 ```json 포맷 제거
      let cleanedMessage = message.replace(/```json|```/g, "").trim();

      // 줄바꿈 문자를 이스케이프 처리
      cleanedMessage = cleanedMessage.replace(/\n/g, "\\n");

      // JSON 문자열이 올바른지 확인
      cleanedMessage = cleanedMessage.replace(/\\n/g, "\n"); // 이스케이프된 줄바꿈을 원래대로 복원

      console.log("Cleaned Message:", cleanedMessage); // 추가된 로그

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
        <ChatBox>
          {history.map((item, index) => (
            <div key={index}>
              <GptBox>
                <Gpt>
                  {item.question && (
                    <MyContent>
                      <div>{item.question}</div>
                    </MyContent>
                  )}
                  <Gptresponse>
                    <GptImg></GptImg>
                    <GptresponseBox>
                      <GptName>Bio</GptName>
                      <GptContent>
                        <div> {item.title}를 추천합니다!</div>
                        <div> {item.content}</div>
                      </GptContent>
                    </GptresponseBox>
                  </Gptresponse>
                </Gpt>
              </GptBox>
            </div>
          ))}
        </ChatBox>
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
  /* margin-top: 40px; */
`;
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 130px - 103px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 130px;
  position: sticky;
  top: 0;
  z-index: 1000;
  color: #fff;
  background-color: #6832e2;
`;

const ChatBox = styled.div`
  width: 100%;
  /* height: 100vh; */
  padding-left: 20px;
  padding-right: 20px;
  /* margin-top: 35px; */
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
  max-width: 300px;
  min-width: auto;
  width: fit-content;
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
  min-width: auto;
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
  padding: 10px;
  margin-top: 40px;
`;

const Gptresponse = styled.div`
  width: auto;
  height: auto;
  display: flex;

  gap: 10px;
`;
const GptresponseBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
