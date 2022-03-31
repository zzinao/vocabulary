import React from 'react'
import { updateWordFB } from '../redux/modules/myword'
import { useDispatch, useSelector } from 'react-redux'

const Edit = (props) => {
  const data = props.location.state
  console.log(data)
  const word_list = useSelector((state) => state.myword.list)
  console.log(word_list)

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
    console.log(obj)

    dispatch(updateWordFB(obj))
    props.history.push('/')
  }

  return (
    <div className="note-new">
      <h2>단어 수정하기</h2>
      <span>Word</span>
      <input type="text" ref={wordRef} Value={data.word} />
      <span>설명</span>
      <input type="text" ref={dfRef} Value={data.df} />
      <span>예시</span>
      <input type="text" ref={exRef} Value={data.ex} />
      <button className="save" onClick={clickEvent}>
        Save
      </button>
    </div>
  )
}
export default Edit
