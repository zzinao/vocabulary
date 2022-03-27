import { useState } from 'react'
import { useHistory } from 'react-router'
import Word from './Word'
import AddWord from './AddWord'

import { BsFillFileEarmarkPlusFill } from 'react-icons/bs'

const Home = () => {
  const history = useHistory()
  const [notes, setNotes] = useState([
    {
      text: 'Hello',
      ex: '단어 예시',
      sample: '왜 안되지',
      date: '15/04/2021',
    },
    {
      text: 'Word',
      ex: '단어 예시',
      sample: 'ㅇㅅㅇ',
      date: '21/04/2021',
    },
    {
      text: 'Word',
      ex: '단어 예시',
      sample: '흠흠...',
      date: '21/04/2021',
    },
    {
      text: 'Word',
      ex: '단어 예시',
      sample: '흠냐뤼',
      date: '21/04/2021',
    },
  ])

  const addNote = (text, ex, sample) => {
    const date = new Date()
    const newNote = {
      text: text,
      ex: ex,
      sample: sample,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  //   const handleColor = () => {
  //     stateBoxcColor: ''
  //   }

  //   const deleteNote = (id) => {
  //     const newNotes = notes.filter((note) => note.id !== id)
  //     setNotes(newNotes)
  //   }

  return (
    <div>
      <div className="notes-list">
        {notes.map((note) => (
          <Word
            text={note.text}
            ex={note.ex}
            sample={note.sample}
            date={note.date}
            handleAddNote={addNote}
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
          color="#fef68a"
        />
      </div>
    </div>
  )
}

export default Home
