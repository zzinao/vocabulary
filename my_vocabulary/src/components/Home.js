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

  // const addNote = (text, ex, sample) => {
  //   const date = new Date()
  //   const newNote = {
  //     text: text,
  //     ex: ex,
  //     sample: sample,
  //     date: date.toLocaleDateString(),
  //   }
  //   const newNotes = [...myword_lists, newNote]
  //   setNotes(newNotes)
  // }

  // const deleteNote = (id) => {
  //   const newNotes = myword_lists.filter((note) => note.id !== id)
  //   setNotes(newNotes)
  // }

  return (
    <div>
      <div className="notes-list">
        {myword_lists.map((note, i) => (
          <Word
            key={note.word}
            word={note.word}
            df={note.df}
            ex={note.ex}
            // complete={note}
          />
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
          color="#9FC87F"
        />
      </div>
    </div>
  )
}

export default Home
