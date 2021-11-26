import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createWord, addWordFB } from "./redux/modules/word";
import { useHistory } from "react-router-dom";
function AddDictionary() {
  const word = React.useRef(null);
  const explain = React.useRef(null);
  const example = React.useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const addWord = () => {
    // dispatch(
    //   createWord({
    //     word: word.current.value,
    //     explain: explain.current.value,
    //     example: example.current.value,
    //   })
    // );
    dispatch(
      addWordFB({
        word: word.current.value,
        explain: explain.current.value,
        example: example.current.value,
      })
    );
    alert("추가되었습니다.");
    history.push("/");
  };
  return (
    <DictionaryWrap>
      <AddTitle>단어 추가하기</AddTitle>
      <Box>
        <SubTitle>단어</SubTitle>
        <Input ref={word} />
      </Box>
      <Box>
        <SubTitle>설명</SubTitle>
        <Input ref={explain} />
      </Box>
      <Box>
        <SubTitle>예시</SubTitle>
        <Input ref={example} />
      </Box>
      <AddButton onClick={addWord}>추가하기</AddButton>
    </DictionaryWrap>
  );
}

const DictionaryWrap = styled.div``;
const Box = styled.div`
  width: 100%;
  background: #fff;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
`;
const AddTitle = styled.h3`
  color: #333;
  margin: 0 0 10px 0;
`;
const SubTitle = styled.p`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
`;
const Input = styled.input`
  width: 95%;
  margin: 0 auto;
  height: 40px;
  padding: 0;
`;
const AddButton = styled.button`
  background-color: #d9d9d9;
  color: #fff;
  font-size: 20px;
  border: none;
  height: 40px;
  width: 100%;
`;
export default AddDictionary;
