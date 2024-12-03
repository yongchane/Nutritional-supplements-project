import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchBtn } from "../../../assets/record/srcbtn.svg";

import useSearchStore from "../../../api/Search.js";
const Search = () => {
  const [input, setInput] = useState("");
  const { search, setSearch } = useSearchStore();

  const InputChange = (e) => {
    const { id, value } = e.target;
    setInput(value); //zustand에 저장
    console.log("input", input, id);
  };

  const clickHandler = () => {
    setSearch(input);
  };

  console.log("search", search);
  return (
    <Container>
      <SearchInput
        category="search"
        onChange={InputChange}
        placeholder="영양제 혹은 건강 상태를 검색하면 관련 영양제를 추천"
      />
      <SearchIcon onClick={clickHandler}>
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
  background: #f8f8fa;
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
