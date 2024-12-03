import React from "react";
import styled from "styled-components";
import Search from "./component/Search";
import { useNutritionStore } from "../../api/GetData";
import { useNavigate } from "react-router-dom";
import useSearchStore from "../../api/Search.js";
import { useEffect, useState } from "react";
import { ReactComponent as Delete } from "../../assets/record/delete.svg";
const Record = () => {
  const { search } = useSearchStore();
  const { catergory } = useNutritionStore();
  const navigate = useNavigate();
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (search) {
      setSearchList((prev) => [...prev, search]);
    }
    console.log("내용확인", searchList);
  }, [search]);
  return (
    <Container>
      <Header>
        <Search />
      </Header>
      <Content>
        <Recent>최근검색어</Recent>
        <RecordList>
          {searchList.length > 0 &&
            searchList.map((item, index) => (
              <RecordItem
                key={index}
                onClick={() => {
                  const categoryIndex = catergory.indexOf(item);
                  if (categoryIndex !== -1) {
                    navigate(`/record/${categoryIndex}`);
                  }
                }}
              >
                {item}
                <Delete
                  onClick={() => {
                    setSearchList((prev) => prev.filter((_, i) => i !== index));
                  }}
                />
              </RecordItem>
            ))}
        </RecordList>
        <Category>카테고리</Category>
        <CategoryList>
          {catergory.map((item, index) => (
            <CategoryItem
              key={item}
              onClick={() => navigate(`/record/${index}`)}
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
  height: 100%;
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
  display: flex;
  gap: 10px;
`;
const RecordItem = styled.div`
  margin-top: 18px;
  display: inline-flex;
  width: fit-content;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  border: 1px solid #6832e2;
  color: #6832e2;
  font-size: 15px;
`;
const Category = styled.div`
  margin-top: 20px;
  position: relative;
`;
const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 80vh;
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
