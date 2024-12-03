import React from "react";
// import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import nutrition from "../../../api/mock/nutrition.json"; // JSON 데이터 가져오기
import styled from "styled-components";
import BackHeader from "../../BackHeader";
import { ReactComponent as Next } from "../../../assets/record/go.svg";
const RecordDetail = () => {
  const navigate = useNavigate();
  const { item } = useParams();
  const categoryIndex = parseInt(item); // 전달된 index를 정수로 변환
  const selectedNutrition = nutrition[categoryIndex]; // 해당 카테고리 데이터 가져오기
  console.log("selectedNutrition", selectedNutrition.content.name);
  const list = Array.isArray(selectedNutrition.content)
    ? selectedNutrition.content
    : Object.values(selectedNutrition.content); // 객체의 값을 배열로 변환

  return (
    <Container>
      <Back>
        <BackHeader title={selectedNutrition.catergory} back={"/record"} />
      </Back>
      <ContentContainer>
        <ContentTitle> 추천영양소💊</ContentTitle>
        <Content>
          {list.map((content, index) => (
            <ListContainer>
              <ListName key={index}>{content.name}</ListName>
              <ListDetail key={index}>
                {content.detail}
                <Btn onClick={() => navigate("/chat")}>
                  영양제 추천받으러 가기
                  <Next />
                </Btn>
              </ListDetail>
            </ListContainer>
          ))}
        </Content>
        {/* name과 detail 렌더링 */}
      </ContentContainer>
    </Container>
  );
};

export default RecordDetail;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentTitle = styled.div`
  width: 100%;
  /* height: 49px; */
`;
const Back = styled.div``;
const Content = styled.div`
  margin-top: 20px;
`;
const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 75px;
`;
const ListContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;
const ListName = styled.div`
  display: flex;
  width: 96px;
  height: 120px;
  padding: 13px 15px 10px 15px;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  border: 1px solid #cdcdcd;
`;
const ListDetail = styled.div`
  display: flex;
  width: 255px;
  height: 120px;
  padding: 10px 15px;
  flex-direction: column;

  align-items: flex-end;
  gap: 10px;
  border: 1px solid #cdcdcd;
  font-size: 13px;
`;
const Btn = styled.button`
  color: #6832e2;
  display: flex;
  position: absolute;
  padding-top: 80px;
  align-items: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  text-transform: uppercase;
`;
