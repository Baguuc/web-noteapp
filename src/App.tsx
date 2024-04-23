import { useEffect, useState } from "react";
import { Note, getNotes } from "./notes";
import NoteElement from "./Note";
import NoteSearchBar from "./NoteSearchForm";
import "./styles.css";
import NoteAddBar from "./NoteAdd";

function App() {
  const [notes, setNotes] = useState([] as Note[]);

  async function refresh() {
    getNotes(undefined).then(setNotes);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <NoteSearchBar setNotes={setNotes} />
      <NoteAddBar
        notes={notes}
        onCompleted={refresh}
        preCompleted={(addedNote) => setNotes([...notes, addedNote])}
      />
      <div id="notes">
        {notes.map((note, index) => (
          <NoteElement
            key={index}
            id={note.id}
            title={note.title}
            content={note.content}
            notes={notes}
            setNotes={setNotes}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
