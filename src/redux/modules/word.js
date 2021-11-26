// bucket.js
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const DELETE = "word/DELETE";
const UPDATE = "word/UPDATE";

const initialState = {
  list: [
    // {
    //   word: "ㅎ1ㅎ1ㅎ1",
    //   explain: `히히를 변형한 단어. 숫자1을 '1'로 쓴다.`,
    //   example: "저 친구가 초클릿을 줬어. ㅎ1ㅎ1",
    // },
    // {
    //   word: "ㅎ1ㅎ1ㅎ1",
    //   explain: `히히를 변형한 단어. 숫자1을 '1'로 쓴다.`,
    //   example: "저 친구가 초클릿을 줬어. ㅎ1ㅎ1",
    // },
    // {
    //   word: "ㅎ1ㅎ1ㅎ1",
    //   explain: `히히를 변형한 단어. 숫자1을 '1'로 쓴다.`,
    //   example: "저 친구가 초클릿을 줬어. ㅎ1ㅎ1",
    // },
  ],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function createWord(word) {
  console.log("액션을 생성할꺼야");
  return { type: CREATE, word }; // 이 부분이 action
}
// create 부분만 일단 word로 수정
// 리듀서도 마찬가지
export function deleteWord(bucket_index) {
  console.log("지울 버킷 인덱스", bucket_index);
  return { type: DELETE, bucket_index };
}
export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "word"));
    console.log(word_data);

    let word_list = [];

    word_data.forEach((word) => {
      console.log(word.data());
      word_list.push({ id: word.id, ...word.data() });
    });
    console.log(word_list);
    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "word"), word);
    const _word = await getDoc(docRef);
    const word_data = { id: _word.id, ..._word.data() };
    console.log(word_data);
    dispatch(createWord(word_data));
  };
};

export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if (!word_id) {
      window.alert("아이디가 없네요");
      return;
    }
    const docRef = doc(db, "word", word_id);
    await deleteDoc(docRef);

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_id;
    });
    dispatch(deleteWord(word_index));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "word/LOAD": {
      return { list: action.word_list };
    }
    case "word/CREATE": {
      console.log("이제 값을 바꿀꺼야");
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }
    case "bucket/DELETE": {
      console.log(state, action);
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });
      return { list: new_bucket_list };
    }
    case "bucket/UPDATE": {
      console.log("end");
      console.log(state, action);

      const new_bucket_list = state.list.map((l, idx) => {
        if (parseInt(action.bucket_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
