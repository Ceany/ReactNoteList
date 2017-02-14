import React from 'react';
import Note from './note';

class NoteItems extends React.Component {
    render() {
        let noteEntries = this.props.entries;
        function createNote(note) {
            return (
                <Note key={note.key} text={note.text}/>
            );
        }
        let noteItems = noteEntries.map(createNote);
        return (
            <ul className="noteList">
                {noteItems}
            </ul>
        )
    }
}

export default NoteItems;