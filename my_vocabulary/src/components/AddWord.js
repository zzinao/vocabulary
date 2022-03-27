import React from 'react'

const AddWord = ({ handleAddNote }) => {
  const refWord = React.useRef([])

  const clickEvent = () => {
    console.log(refWord)
  }

  //   const characterLimit = 200

  //   const handleChange = (event) => {
  //     if (characterLimit - event.target.value.length >= 0) {
  //       setNoteText(event.target.value)
  //     }
  //   }

  return (
    <div className="note-new">
      <span>Word</span>
      <textarea
        placeholder="Type to add a word..."
        ref={(el) => refWord.current[0]}
      ></textarea>
      <span>설명</span>
      <textarea
        placeholder="explanation..."
        ref={(el) => refWord.current[1]}
      ></textarea>
      <span>예시</span>
      <textarea
        placeholder="sample..."
        ref={(el) => refWord.current[2]}
      ></textarea>
      <button className="save" onClick={clickEvent}>
        Save
      </button>
    </div>
  )
}

export default AddWord
