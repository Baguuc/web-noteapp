import { useState } from "react";
import { Note, addNote } from "./notes";
import Input from "./components/Input";
import Bar from "./components/Bar";
import Button from "./components/Button";

interface NoteAddFormProps {
  preCompleted: (note: Note) => void;
  onCompleted: (note: Note) => void;
  notes: Note[];
}

function NoteAddBar({ notes, preCompleted, onCompleted }: NoteAddFormProps) {
  const [addTitle, setAddTitle] = useState("");
  const [addContent, setAddContent] = useState("");

  return (
    <Bar>
      <Input
        type="text"
        placeholder="New title.."
        value={addTitle}
        onInput={(event) => setAddTitle((event.target as any).value)}
      />
      <Input
        type="text"
        placeholder="New content.."
        value={addContent}
        onInput={(event) => setAddContent((event.target as any).value)}
      />
      <Button
        onClick={() => {
          const data: Note = {
            id: notes.length,
            title: addTitle,
            content: addContent,
          };

          preCompleted(data);

          addNote(data).then(() => onCompleted(data));

          setAddTitle("");
          setAddContent("");
        }}
      >
        Add
      </Button>
    </Bar>
  );
}

export default NoteAddBar;
