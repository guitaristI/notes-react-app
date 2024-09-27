import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, addNote, getDate, deleteNote }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          id={note.id}
          key={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote} />
      ))}
      <AddNote addNote={addNote} getDate={getDate} />
    </div>
  )
}

export default NotesList;