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

  const important = (id) => {
    const importantnotes = notes.filter((note) => note.id === id)
    const finalnotes = notes.filter((note) => note.id !== id)
    const finalimportantnotes = [...importantnotes, ...finalnotes]
    setnotes(finalimportantnotes)
    console.log(id)
  }

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
    <div className="App bg-[#ffeaea]" id='screen'>
      <div className='flex w-full'>
        <div className='rightwindow w-10/12 mt-8' style={{ marginLeft: '10%' }}>
          <div>
            <Tasklist notes={notes} handleNoteDelete={deleteNote} handleimportant={important} />
          </div>
          <TextArea handleaddtext={addtext} />
        </div>
      </div>

    </div>
  )
}

export default App
