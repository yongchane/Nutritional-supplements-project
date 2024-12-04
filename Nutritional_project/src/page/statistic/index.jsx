import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { ReactComponent as Frown } from "../../assets/record/frown.svg";
import { ReactComponent as Meh } from "../../assets/record/meh.svg";
import { ReactComponent as Smile } from "../../assets/record/smile.svg";
import { ReactComponent as AFrown } from "../../assets/record/Afrown.svg";
import { ReactComponent as AMeh } from "../../assets/record/Ameh.svg";
import { ReactComponent as ASmile } from "../../assets/record/Asmile.svg";
const Record = () => {
  const [isAFrownClicked, setIsAFrownClicked] = useState(false);
  const [isAMehClicked, setIsAMehClicked] = useState(false);
  const [isASmileClicked, setIsASmileClicked] = useState(false);

  const handleAFrownClick = () => {
    setIsAFrownClicked(!isAFrownClicked);
  };

  const handleAMehClick = () => {
    setIsAMehClicked(!isAMehClicked);
  };

  const handleASmileClick = () => {
    setIsASmileClicked(!isASmileClicked);
  };

  return (
    <Container>
      <Calendar />
      <Content>
        <CheckList>
          <CheckTitle>오늘의 섭취정보</CheckTitle>
          <List></List>
        </CheckList>
        <ConditionList>
          <CheckTitle>오늘의 컨디션</CheckTitle>
          <CheckBox>
            <div onClick={handleAFrownClick}>
              {isAFrownClicked ? <AFrown /> : <Frown />}
            </div>
            <div onClick={handleAMehClick}>
              {isAMehClicked ? <AMeh /> : <Meh />}
            </div>
            <div onClick={handleASmileClick}>
              {isASmileClicked ? <ASmile /> : <Smile />}
            </div>
          </CheckBox>
        </ConditionList>
      </Content>
    </Container>
  );
};

export default Record;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const CheckList = styled.div`
  border-radius: 12px;
  background: #eeeff5;
  box-shadow: 2px 2px 7.8px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
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
  padding-top: 20px;
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
  width: 100%;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`;
const List = styled.div``;
const CheckBox = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  gap: 50px;
`;
