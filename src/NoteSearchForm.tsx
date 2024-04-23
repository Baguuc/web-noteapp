import { useState } from "react";
import { Note, getNotes } from "./notes";
import { where } from "firebase/firestore";
import Input from "./components/Input";
import Select from "./components/Select";
import Bar from "./components/Bar";
import Button from "./components/Button";

interface NoteSearchBarProps {
  setNotes: (notes: Note[]) => void;
}

function NoteSearchBar({ setNotes }: NoteSearchBarProps) {
  const [searchBy, setSearchBy] = useState("title" as "title" | "content");
  const [searchValue, setSearchValue] = useState("");
  const [searchApplied, setSearchApplied] = useState(false);

  const getAll = () => {
    getNotes(undefined).then((notes) => {
      emptyFields();
      setNotes(notes);
    });
    setSearchApplied(false);
  };

  const emptyFields = () => {
    setSearchValue("");
  };

  return (
    <Bar>
      <Select
        onChange={(event) => setSearchBy((event.target as any).value)}
        value={searchBy}
      >
        <option value="title">Title</option>
        <option value="content">Description</option>
      </Select>
      <Input
        type="text"
        placeholder="Search.."
        value={searchValue}
        onInput={(event) => setSearchValue((event.target as any).value)}
      />
      <Button
        onClick={() => {
          if (searchValue === "") {
            getAll();
            return;
          }

          getNotes([where(searchBy, "==", searchValue)]).then((notes) => {
            emptyFields();
            setNotes(notes);
            setSearchApplied(true);
          });
        }}
      >
        Search
      </Button>
      {searchApplied && <Button onClick={getAll}>See all</Button>}
    </Bar>
  );
}

export default NoteSearchBar;
