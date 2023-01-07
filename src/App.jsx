import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'
import TextArea from './components/TextArea'
import Tasklist from './components/Tasklist'
import { nanoid } from 'nanoid'

function App() {
  const [notes, setnotes] = useState([
    { text: 'Sample Task1', id: nanoid() },
    { text: 'Sample Task2', id: nanoid() },
    { text: 'Sample Task3', id: nanoid() },
    { text: 'Sample Task4', id: nanoid() },
  ])

  const addtext = (text) => {
    if (text !== '') {
      const newnote = { text: text, id: nanoid() }
      const newnotes = [...notes, newnote]
      setnotes(newnotes)
    }
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setnotes(newNotes)
  }

  return (
    <div className="App bg-[#ffeaea] p-3" id='screen'>
      <div className='rightwindow w-4/5 mt-8' style={{ marginLeft: '20%' }}>
        <div>
          <Tasklist notes={notes} handleNoteDelete = {deleteNote} />
        </div>
        <TextArea handleaddtext={addtext} />
      </div>

    </div>
  )
}

export default App
