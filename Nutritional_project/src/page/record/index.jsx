import React from "react";
import styled from "styled-components";
import Search from "./component/Search";
import { useNutritionStore } from "../../api/GetData";
import { useNavigate } from "react-router-dom";

const Record = () => {
  const { name, content, catergory } = useNutritionStore();
  const navigate = useNavigate();
  console.log("정보 확인", name, content, catergory);

  return (
    <Container>
      <Header>
        <Search />
      </Header>
      <Content>
        <Recent>최근검색어</Recent>
        <RecordList></RecordList>
        <Category>카테고리</Category>
        <CategoryList>
          {catergory.map((item) => (
            <CategoryItem
              key={item}
              onClick={() => navigate(`/record/${item}`)}
            >
              {item}
            </CategoryItem>
          ))}
        </CategoryList>
      </Content>
    </Container>
  );
};

export default Record;

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: #f8f8fa;
  z-index: 100;
`;
const Recent = styled.div`
  margin-top: 20px;
`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const RecordList = styled.div`
  width: 100%;
  height: 50px;
`;
const Category = styled.div`
  margin-top: 20px;
  position: relative;
`;
const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
`;
const CategoryItem = styled.div`
  margin-top: 18px;
  display: inline-flex;
  width: fit-content;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 30px;
  border: 1px solid #6832e2;
  color: #6832e2;
  font-size: 15px;
`;
