import React from 'react'
import { addWordFB } from '../redux/modules/myword'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'

const Edit = (props) => {
  const dispatch = useDispatch()
  const ref = React.useRef([])
  const location = useLocation()
  const data = location.state
  // const id = useParams().id
  // const list = useSelector((state) => state.myword.list)
  console.log(data.word)

  React.useEffect(() => {
    ref.current[0].value = data.word
    ref.current[1].value = data.df
    ref.current[2].value = data.ex
  }, [])

  const clickEvent = () => {
    const word = ref.current[0].value
    const df = ref.current[1].value
    const ex = ref.current[2].value
    const completed = false
    if (!word || !df || !ex) {
      alert('빈칸을 채워주세요!')
      return false
    }

    dispatch(addWordFB({ word: word, ex: ex, df: df, completed }))
    props.history.push('/')
  }

  return (
    <div className="note-new">
      <h2>단어 수정하기</h2>
      <span>Word</span>
      <input type="text" ref={(e) => (ref.current[0] = e)} />
      <span>설명</span>
      <input type="text" ref={(e) => (ref.current[1] = e)} />
      <span>예시</span>
      <input type="text" ref={(e) => (ref.current[2] = e)} />
      <button className="save" onClick={clickEvent}>
        Save
      </button>
    </div>
  )
}
export default Edit
