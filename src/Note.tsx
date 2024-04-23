import { useState } from "react";
import { Note, getNotes, removeNote, updateNote } from "./notes";
import Input from "./components/Input";
import Button from "./components/Button";

interface NoteProps {
  id: string | number;
  title: string;
  content: string;
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}

function NoteElement({ id, title, content, notes, setNotes }: NoteProps) {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [modalHidden, setModalHidden] = useState(true);

  return (
    <>
      <div hidden={modalHidden}>
        <div id={`update-modal-note-${id}`} className="update-modal">
          <div className="update-modal-form">
            <h6>Leave any field empty to keep previous</h6>
            <Input
              type="text"
              id={`update-title-note-${id}`}
              placeholder={title}
              value={newTitle}
              onInput={(event) => setNewTitle((event.target as any).value)}
            />
            <Input
              type="text"
              id={`update-title-note-${id}`}
              placeholder={content}
              value={newContent}
              onInput={(event) => setNewContent((event.target as any).value)}
            />
            <Button
              onClick={() => {
                const notUpdated = notes.filter((note) => note.id !== id);
                setNotes([
                  ...notUpdated,
                  {
                    id,
                    title: newTitle || title,
                    content: newContent || content,
                  },
                ]);

                setNewTitle("");
                setNewContent("");
                setModalHidden(true);

                updateNote(id, {
                  id,
                  title: newTitle || title,
                  content: newContent || content,
                });
              }}
            >
              Update
            </Button>
            <Button onClick={() => setModalHidden(true)}>Cancel</Button>
          </div>
        </div>
      </div>
      <div className="note">
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
        <Button
          onClick={() => {
            const notUpdated = notes.filter((note) => note.id !== id);
            setNotes(notUpdated);
            removeNote(id);
          }}
        >
          Remove
        </Button>
        <Button
          onClick={() => {
            setModalHidden(false);
          }}
        >
          Update
        </Button>
      </div>
    </>
  );
}

export default NoteElement;
