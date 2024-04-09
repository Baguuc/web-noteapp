import { useState } from 'react'
import { addNote, getNotes } from './notes';
import NoteElement from './Note';

function App() {
  const [notes, setNotes] = useState(getNotes());
  const [addTitle, setAddTitle] = useState("");
  const [addContent, setAddContent] = useState("");

  return (
    <>
      <div id='notes'>
        {notes.map((note, index) => <NoteElement key={index} id={note.id} title={note.title} content={note.content} refreshState={() => setNotes(getNotes)} />)}
      </div>
      <div>
        <h6>Add a note</h6>
        <input type="text" placeholder="New title.." value={addTitle} onInput={(event) => setAddTitle((event.target as any).value)} />
        <input type="text" placeholder="New content.." value={addContent} onInput={(event) => setAddContent((event.target as any).value)} />
        <button onClick={() => {
          addNote({
            id: notes.length,
            title: addTitle,
            content: addContent 
          });
          setNotes(getNotes());
        }}>Add</button>
      </div>
    </>
  )
}

export default App
