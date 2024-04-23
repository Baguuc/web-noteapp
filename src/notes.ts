import {
  QueryCompositeFilterConstraint,
  QueryConstraint,
  addDoc,
  deleteDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { collections } from "./config/firebase";

interface Note {
  id: number | string;
  title: string;
  content: string;
}

async function getNotes(filters: QueryConstraint[] | undefined) {
  if (filters === undefined) filters = [];

  let builtQuery = query(collections.notes, ...filters);

  const notes = await getDocs(builtQuery);

  return notes.docs.map((doc) => doc.data() as Note);
}

async function addNote(note: Note) {
  note.id = (await getNotes(undefined)).length;
  await addDoc(collections.notes, note);
}

async function removeNote(id: number | string) {
  const noteRef = (
    await getDocs(query(collections.notes, where("id", "==", id)))
  ).docs[0].ref;
  await deleteDoc(noteRef);
}

async function updateNote(id: number | string, newNote: Note) {
  const noteRef = (
    await getDocs(query(collections.notes, where("id", "==", id)))
  ).docs[0].ref;
  await updateDoc(noteRef, newNote as any);
}

export { getNotes, addNote, removeNote, updateNote };
export type { Note };
