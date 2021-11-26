import React from "react";
import { Route } from "react-router";
import { useHistory } from "react-router";
import styled from "styled-components";
import DictionaryList from "./DitionaryList";
import AddDictionary from "./AddDictionary";
import { useDispatch } from "react-redux";
import { createWord, loadWordFB } from "./redux/modules/word";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // addDoc(collection(db, "word"), {
    //   word: "ㅎ1ㅎ1ㅎ1",
    //   explain: `히히를 변형한 단어. 숫자1을 '1'로 쓴다.`,
    //   example: "저 친구가 초클릿을 줬어. ㅎ1ㅎ1",
    // });
    dispatch(loadWordFB());
  }, []);
  const history = useHistory();
  return (
    <div className="App">
      <Container>
        <Route path="/" exact>
          <Dictionary>My Dictionary</Dictionary>
          <DictionaryList />
          <AddBtn
            onClick={() => {
              history.push("/add");
            }}
          ></AddBtn>
        </Route>
        <Route path="/add">
          <AddDictionary />
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 50%;
  background-color: lavender;
  margin: 0 auto;
  padding: 10px 20px;
  position: relative;
  box-sizing: border-box;
`;
const Dictionary = styled.h3`
  color: #333;
  margin: 0 0 10px 0;
`;
const AddBtn = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: aqua;
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  &:before {
    display: inline-block;
    content: "";
    width: 60px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:after {
    display: inline-block;
    content: "";
    width: 60px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;
export default App;
