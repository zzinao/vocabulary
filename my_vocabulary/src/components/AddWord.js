import React from 'react'
import { useDispatch } from 'react-redux'

import { addWordFB } from '../redux/modules/myword'

const AddWord = (props) => {
  const data = props.location.state
  const dispatch = useDispatch()
  const wordRef = React.useRef(null)
  const exRef = React.useRef(null)
  const dfRef = React.useRef(null)

  const clickEvent = () => {
    const word = wordRef.current.value
    const ex = exRef.current.value
    const df = dfRef.current.value
    const completed = false
    if (!word || !df || !ex) {
      alert('빈칸을 채워주세요!')
      return false
    }
    const obj = { word, df, ex, completed }

    dispatch(addWordFB(obj))
    props.history.push('/')
  }

  return (
    <div className="note-new">
      <h2>새 단어 등록</h2>
      <span className="addtext">Word</span>
      <input type="text" placeholder="Type to add a word..." ref={wordRef} />
      <span className="addtext">설명</span>
      <input type="text" placeholder="explanation..." ref={dfRef} />
      <span className="addtext">예시</span>
      <input type="text" placeholder="sample..." ref={exRef} />
      <button className="save" onClick={clickEvent}>
        Save
      </button>
    </div>
  )
}

export default AddWord
