import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function DictionaryList() {
  const dic_list = useSelector((state) => {
    return state.word.list;
  });
  return (
    <DictionaryBox>
      {dic_list.map((list, idx) => {
        return (
          <DictBox>
            <Subtitle>단어</Subtitle>
            <p>{list.word}</p>
            <Subtitle>설명</Subtitle>
            <p>{list.explain}</p>
            <Subtitle>예시</Subtitle>
            <p style={{ color: "blue" }}>{list.example}</p>
          </DictBox>
        );
      })}
    </DictionaryBox>
  );
}

const DictionaryBox = styled.div`
  margin: 0 auto;
`;
const DictBox = styled.div`
  background-color: #fff;
  padding: 0 5px;
  box-sizing: border-box;
`;
const Subtitle = styled.p`
  font-size: 12px;
  text-decoration: underline;
`;
export default DictionaryList;
