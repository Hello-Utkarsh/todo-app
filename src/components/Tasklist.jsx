import React from 'react'
import Tasks from './Tasks'

const Tasklist = ({ notes, handleNoteDelete, handleimportant }) => {

  return (
    <div>
      {notes.map((note) => 
      <Tasks text={note.text} id={note.id} handleNoteDelete = {handleNoteDelete} handleimportant = {handleimportant}/>) }

    </div>
  )
}

export default Tasklist
