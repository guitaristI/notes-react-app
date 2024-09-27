import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";

function App() {
  const REACT_NOTES_KEY = 'react-notes';
  const [ notes, setNotes ] = useState(() => {
    const saveNotes = JSON.parse(
      localStorage.getItem(REACT_NOTES_KEY)
    );
    return saveNotes || [
      {
        id: 1,
        text: 'Заметка 1',
        date: '01.04.2024'
      },
      {
        id: 2,
        text: 'Заметка 2',
        date: '01.03.2024'
      },
      {
        id: 3,
        text: 'Заметка 3',
        date: '01.04.2026'
      },
      {
        id: 4,
        text: 'Заметка 4',
        date: '11.04.2024'
      },
    ];
  })

  useEffect(() => {
    localStorage.setItem(
      REACT_NOTES_KEY,
      JSON.stringify(notes)
    )
  }, [notes]);

  const getDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  }

  const addNote = ( text ) => {
    const newNote = {
      id: notes.length + 1,
      text: text,
      date: getDate(),
    };
    setNotes([...notes, newNote]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div className="app">
      <div className="container">
        <NotesList
          notes={notes}
          getDate={getDate}
          deleteNote={deleteNote}
          addNote={addNote} />
      </div>
    </div>
  );
}

export default App;
