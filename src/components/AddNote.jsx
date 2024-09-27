import { useState } from "react"


const AddNote = ({ getDate, addNote }) => {

  const [ noteText, setNoteText ] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value)
  }

  const handleSaveClick = () => {
    if (noteText.trim().length) {
      addNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className="note">
      <textarea
        value={noteText}
        onChange={handleChange}
        className="note-input"
        placeholder="введите текст, чтобы добавить заметку..." />
      <div className="note-footer">
        <div className="note-date">{getDate()}</div>
        <button className="btn" onClick={handleSaveClick}>save</button>
      </div>
    </div>
  )
}

export default AddNote;
