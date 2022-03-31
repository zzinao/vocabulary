import React from 'react'
import { useDispatch } from 'react-redux'

import { addWordFB } from '../redux/modules/myword'

const AddWord = (props) => {
  const dispatch = useDispatch()
  const ref = React.useRef([])

  const clickEvent = () => {
    const word = ref.current[0].value
    const ex = ref.current[1].value
    const df = ref.current[2].value
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
      <input
        type="text"
        placeholder="Type to add a word..."
        ref={(e) => (ref.current[0] = e)}
      />
      <span className="addtext">설명</span>
      <input
        type="text"
        placeholder="explanation..."
        ref={(e) => (ref.current[1] = e)}
      />
      <span className="addtext">예시</span>
      <input
        type="text"
        placeholder="sample..."
        ref={(e) => (ref.current[2] = e)}
      />
      <button className="save" onClick={clickEvent}>
        Save
      </button>
    </div>
  )
}

export default AddWord
