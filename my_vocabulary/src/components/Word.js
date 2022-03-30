import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever, MdEdit, MdCheck } from 'react-icons/md'
import {
  completeWordFB,
  updateWordFB,
  deleteWordFB,
} from '../redux/modules/myword'
import { Link } from 'react-router-dom'
import AddWord from './AddWord'

const Word = ({ word, df, ex, completed }) => {
  const dispatch = useDispatch()
  const word_list = useSelector((state) => state.myword.list)
  console.log(word_list)
  console.log(word)

  const [checkmode, setCheckMode] = useState('#94C47D')
  const toggleChcek = (id) => {
    setCheckMode(checkmode === '#94C47D' ? '#CBE1C5' : '#94C47D')
  }
  //   dispatch(completeWordFB(id))
  // }

  const deleteWord = () => {
    dispatch(deleteWordFB(word))
  }
  return (
    <div className="note" style={{ backgroundColor: checkmode }}>
      <div className="note-footer">
        <small></small>
        <div className="icons">
          <MdCheck
            onClick={() => toggleChcek(word_list)}
            className="check-icon"
            size="1.3em"
            color="black"
          />
          <Link
            to={{
              pathname: `/edit/${word}`,
              state: { word, df, ex },
            }}
          >
            <MdEdit className="edit-icon" size="1.3em" color="black" />
          </Link>

          <MdDeleteForever
            onClick={() => deleteWord()}
            className="delete-icon"
            size="1.3em"
            color="black"
          />
        </div>
      </div>
      <h2>{word}</h2>
      <p>{df}</p>
      <p style={{ color: '#5F97B8' }}>{ex}</p>
    </div>
  )
}

export default Word
