import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  createWord,
  loadWordFB,
  updateWordFB,
  deleteWordFB,
} from "./redux/modules/word";

function DictionaryList() {
  const dic_list = useSelector((state) => {
    return state.word.list;
  });

  console.log(dic_list);
  const dispatch = useDispatch();
  // let word = null;
  // const word_id = (e) => {
  //   let target = e.target;
  //   let parent = target.parentNode;
  //   let firstChild = parent.firstChild;
  //   word = firstChild.nextSibling;
  //   dispatch(deleteWordFB(word));
  // };
  // React.useEffect(() => {
  //   addDoc(collection(db, "word"), {
  //     word: "ㅎ1ㅎ1ㅎ1",
  //     explain: `히히를 변형한 단어. 숫자1을 '1'로 쓴다.`,
  //     example: "저 친구가 초클릿을 줬어. ㅎ1ㅎ1",
  //   });
  //   dispatch(loadWordFB());
  // }, []);
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
            {/* <DeleteBtn onClick={word_id}>삭제하기</DeleteBtn> */}
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
const DeleteBtn = styled.button`
  width: 100px;
  height: 20px;
  margin-bottom: 5px;
`;
export default DictionaryList;
