interface Note {
    id: number | string;
    title: string;
    content: string;

}


function refreshNotes(updated: Note[]) {
    localStorage.setItem('noteapp-notes', JSON.stringify(updated));
}

function getNotes() {
    const notesString = localStorage.getItem('noteapp-notes') || "[]";
    const notes: Note[] = JSON.parse(notesString);

    return notes;
}


function addNote(note: Note) {
    const updated = getNotes();
    updated.push(note);

    refreshNotes(updated);
}


function removeNote(id: number | string) {
    const updated = getNotes().filter(note => note.id !== id);

    refreshNotes(updated);
}


function updateNote(id: number | string, newNote: Note) {
    const updated = getNotes().map(note => {
        if(note.id === id) {
            note.title = newNote.title || note.title;
            note.content = newNote.content || note.content;
        }

        return note;
    });

    refreshNotes(updated);
}


export { getNotes, addNote, removeNote, updateNote };
export type { Note };
