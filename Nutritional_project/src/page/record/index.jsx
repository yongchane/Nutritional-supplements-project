import React from "react";
import styled from "styled-components";
import Search from "./component/Search";
const index = () => {
  return (
    <Container>
      <Header>
        <Search />
      </Header>
      <Content>
        <Recent>최근검색어</Recent>
        <RecordList></RecordList>
        <Category>카테고리</Category>
      </Content>
    </Container>
  );
};

export default index;

const Container = styled.div`
  width: 100%;
`;
const Header = styled.div``;
const Recent = styled.div`
  margin-top: 20px;
`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const RecordList = styled.div``;
const Category = styled.div`
  margin-top: 20px;
  position: relative;
`;
