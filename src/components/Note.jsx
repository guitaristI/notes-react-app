const Note = ({ text, date, deleteNote, id }) => {
  return (
    <div className="note">
      <div className="note-text">{text}</div>
      <div className="note-footer">
        <div className="note-date">{date}</div>
        <button className="btn" onClick={() => deleteNote(id)}>delete</button>
      </div>
    </div>
  )
}

export default Note;