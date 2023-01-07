import React from 'react'
import Tasks from './Tasks'

const Tasklist = ({ notes, handleNoteDelete }) => {

  return (
    <div>
      {notes.map((note) => 
      <Tasks text={note.text} id={note.id} handleNoteDelete = {handleNoteDelete}/>) }

    </div>
  )
}

export default Tasklist
