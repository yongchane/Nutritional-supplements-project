import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchBtn } from "../../../assets/record/srcbtn.svg";
const Search = () => {
  return (
    <Container>
      <SearchInput placeholder="영양제 혹은 건강 상태를 검색하면 관련 영양제를 추천" />
      <SearchIcon>
        <SearchBtn />
      </SearchIcon>
    </Container>
  );
};

export default Search;

const SearchInput = styled.input`
  border: none;
  display: flex;
  width: 100%;
  font-size: 14px;
  align-items: center;
`;
const Container = styled.div`
  border-radius: 50px;
  border: 1px solid #cdcdcd;
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 75px;
  padding: 10px 15px;
  height: 40px;
  gap: 13px;
  flex-shrink: 0;
`;
const SearchIcon = styled.button`
  cursor: pointer;
`;
