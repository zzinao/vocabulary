import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Word from './Word'
import { useSelector, useDispatch } from 'react-redux'
import { BsFillFileEarmarkPlusFill } from 'react-icons/bs'

import { loadWordFB } from '../redux/modules/myword'

const Home = (props) => {
  const history = useHistory()
  const myword_lists = useSelector((state) => state.myword.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadWordFB())
  }, [])

  return (
    <div>
      <div className="notes-list">
        {myword_lists.map((note, i) => (
          <Word key={note.word} word={note.word} df={note.df} ex={note.ex} />
        ))}
      </div>
      <div
        onClick={() => {
          history.push(`/add`)
        }}
      >
        <BsFillFileEarmarkPlusFill
          className="add-icon"
          size="5em"
          color="#70A674"
        />
      </div>
    </div>
  )
}

export default Home
