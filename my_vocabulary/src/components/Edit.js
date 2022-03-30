import React, { useEffect } from 'react'
import { updateWordFB } from '../redux/modules/myword'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

const Edit = (props) => {
  let params = useParams()
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
      <input type="text" ref={wordRef} value={data.word} />
      <span>설명</span>
      <input type="text" ref={dfRef} value={data.df} />
      <span>예시</span>
      <input type="text" ref={exRef} value={data.ex} />
      <button className="save" onClick={clickEvent}>
        Save
      </button>
    </div>
  )
}
export default Edit
