import { MdDeleteForever, MdEdit, MdCheck } from 'react-icons/md'

const Word = ({ id, text, sample, ex, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <h2>{text}</h2>
      <p>{sample}</p>
      <p>{ex}</p>
      <div className="note-footer">
        <small>{date}</small>
        <div className="icons">
          <MdCheck className="check-icon" size="1.3em" />
          <MdEdit className="edit-icon" size="1.3em" />
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  )
}

export default Word
