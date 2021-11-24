import React from "react";
import { Route } from "react-router";
import { useHistory } from "react-router";
import styled from "styled-components";
import DictionaryList from "./DitionaryList";
import AddDictionary from "./AddDictionary";

function App() {
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
