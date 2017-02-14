import React from 'react';
import ReactDOM from 'react-dom';

import Note from './note';
import NoteList from './note-list';

let targetContainer = document.querySelector("#root");

ReactDOM.render(
  
  <div>
    <NoteList />
  </div>,
  targetContainer
);
