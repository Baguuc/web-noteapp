import { useState } from "react";
import { Note, getNotes, removeNote, updateNote } from "./notes";

interface NoteProps {
    id: string | number;
    title: string;
    content: string;
    refreshState: () => void;
}


function NoteElement({ id, title, content, refreshState }: NoteProps) {
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [modalHidden, setModalHidden] = useState(true);

    return (
        <>
        <div hidden={modalHidden}>
            <div id={`update-modal-note-${id}`} className="update-modal">
                <div className="update-modal-form">
                    <h6>Leave any field empty to keep previous</h6>
                    <input type="text" id={`update-title-note-${id}`} placeholder="New title.." value={newTitle} onInput={(event) => setNewTitle((event.target as any).value)} />
                    <input type="text" id={`update-title-note-${id}`} placeholder="New content.." value={newContent} onInput={(event) => setNewContent((event.target as any).value)} />
                    <button onClick={() => {
                        updateNote(id, {
                            id, 
                            title: newTitle, 
                            content: newContent
                        });
                        refreshState();
                    }}>Update</button>
                    <button onClick={() => setModalHidden(true)}>Close editing</button>
                </div>
            </div>
        </div>
        <div className="note">
            <h3 className="title">{title}</h3>
            <p className="content">{content}</p>
            <button onClick={() => {
                removeNote(id);
                refreshState();
            }}>Remove</button>
            <button onClick={() => {
                setModalHidden(false);
            }}>Update</button>
        </div>
        </>
    );
}


export default NoteElement;