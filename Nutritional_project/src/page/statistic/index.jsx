import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
const index = () => {
  return (
    <Container>
      <Calendar />
      <Content>
        <CheckList>
          <CheckTitle>오늘의 섭취정보</CheckTitle>
        </CheckList>
        <ConditionList>
          <CheckTitle>오늘의 컨디션</CheckTitle>
        </ConditionList>
      </Content>
    </Container>
  );
};

export default index;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const CheckList = styled.div`
  border-radius: 12px;
  background: #eeeff5;
  box-shadow: 2px 2px 7.8px 0px rgba(0, 0, 0, 0.25);
  width: 351px;
  height: 167px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CheckTitle = styled.div`
  color: var(--festie-gray-800, #3a3a3a);
  font-size: 16px;
  font-weight: 500;
  color: #6832e2;
  font-size: 12px;
  margin-top: 9px;
`;
const ConditionList = styled.div`
  border-radius: 12px;
  background: #eeeff5;
  box-shadow: 2px 2px 7.8px 0px rgba(0, 0, 0, 0.25);
  width: 351px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`;
