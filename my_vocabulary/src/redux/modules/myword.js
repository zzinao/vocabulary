//myword.js
import { db } from '../../firebase'
import {
  getDoc,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  collection,
  setDoc,
  deleteDoc,
} from 'firebase/firestore'

const myword_db = collection(db, 'myvoca')

//Action
const LOAD = 'myword/LOAD'
const CREATE = 'myword/CREATE'
const UPDATE = 'myword/UPDATE'
const COMPLETE = 'myword/COMPLETE'
const DELETE = 'myword/DELETE'

//초기값
const initialState = {
  list: [],
}

//Action Creators
export const loadMyword = (word) => {
  return { type: LOAD, word }
}

export const createMyword = (word) => {
  return { type: CREATE, word }
}

export const updateMyword = (word) => {
  return { type: UPDATE, word }
}

export const completeMyword = (id) => {
  return { type: COMPLETE, id }
}

export const deleteMyword = (word) => {
  return { type: DELETE, word }
}

//firebase middlewares

//load funciton
export const loadWordFB = () => {
  return async function (dispatch) {
    const data = await getDocs(collection(db, 'myvoca'))
    let word_list = []
    data.forEach((w) => {
      //   console.log(w.id, w.data())
      word_list.push({ id: w.id, ...w.data() })
    })
    console.log(word_list)
    dispatch(loadMyword(word_list))
  }
}
// add function
export const addWordFB = (myvoca) => {
  return async function (dispatch) {
    await setDoc(doc(db, 'myvoca', myvoca.word), myvoca)
    console.log(myvoca)
  }
}

// update function
// export const updateWordFB = (myvoca) => {
//   return async function (dispatch, getState) {
//     const docRef = doc(db, 'myvoca', myvoca.id)

//     const _voca_list = getState().myvoca.list
//     const voca_index = _voca_list.findIndex((w) => {
//       return w.id === myvoca.id
//     })
//     console.log(_voca_list[voca_index])
//     await updateDoc(docRef, { completed: !myvoca.completed })
//     dispatch(updateMyword(voca_index))
//   }
// }

// complete toggle function
export const completeWordFB = (myvoca) => {
  return function (dispatch) {
    myword_db.doc(myvoca.id).update({ completed: !myvoca.completed })
    dispatch(completeMyword(myvoca.id))
  }
}

// delete function
export const deleteWordFB = (id) => {
  return async function (dispatch) {
    const docRef = doc(db, 'myvoca', id)
    await deleteDoc(docRef)
    alert('삭제합니다요~')
    dispatch(deleteMyword(id))
  }
}

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'myword/LOAD':
      //유사배열 -> 배열로 변환
      const myword = action.word.sort()

      return { ...state, list: myword }

    case 'word/UPDATE':
      let update_words = state.list.map((word) =>
        word.id === action.word.is ? { ...word, ...action.word } : word,
      )
      return {
        ...state,
        list: update_words,
      }

    case 'id/COMPETE':
      const new_word_list = state.list.map((id) =>
        id.id === action.id
          ? {
              ...id,
              completed: !id.completed,
            }
          : id,
      )
      return {
        ...state,
        list: new_word_list,
      }
    case 'myword/DELETE': {
      const left_words = state.list.filter((w) => w.word !== action.word)
      return {
        ...state,
        list: left_words,
      }
    }

    default:
      return state
  }
}

// export default myword
