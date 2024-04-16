import { useEffect, useState } from 'react'
import { Note, addNote, getNotes } from './notes';
import NoteElement from './Note';


function App() {
  const [notes, setNotes] = useState([] as Note[]);
  const [addTitle, setAddTitle] = useState("");
  const [addContent, setAddContent] = useState("");

  async function refresh() {
    getNotes().then(setNotes);
  }

  useEffect(() => {
    refresh();
  }, []);
  

  return (
    <>
      <div id='notes'>
        {notes.map((note, index) => <NoteElement key={index} id={note.id} title={note.title} content={note.content} refreshState={refresh} />)}
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
          }).then(refresh);
          setAddTitle("");
          setAddContent("");
        }}>Add</button>
      </div>
    </>
  )
}

export default App
