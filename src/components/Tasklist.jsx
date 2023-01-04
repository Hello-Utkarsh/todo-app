import React from 'react'
import Tasks from './Tasks'

const Tasklist = ({ notes }) => {

  return (
    <div>
      {notes.map((note) => 
      <Tasks text={note.text} id={note.id} />) }

    </div>
  )
}

export default Tasklist
