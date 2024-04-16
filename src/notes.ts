import { addDoc, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { collections, database } from "./config/firebase";

interface Note {
    id: number | string;
    title: string;
    content: string;
}


async function getNotes() {
    const notes = await getDocs(query(collections.notes));

    return notes.docs.map(doc => doc.data() as Note);
}


async function addNote(note: Note) {
    note.id = (await getNotes()).length;
    await addDoc(collections.notes, note);
}


async function removeNote(id: number | string) {
    const noteRef = (await getDocs(query(collections.notes, where('id', '==', id)))).docs[0].ref;
    await deleteDoc(noteRef);
}


async function updateNote(id: number | string, newNote: Note) {
    const noteRef = (await getDocs(query(collections.notes, where('id', '==', id)))).docs[0].ref;
    await updateDoc(noteRef, newNote as any);
}


export { getNotes, addNote, removeNote, updateNote };
export type { Note };
