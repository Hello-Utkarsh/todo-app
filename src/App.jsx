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
    <div className="App bg-[#ffeaea]" id='screen'>
      <div className='flex w-full'>
        <div className='leftwindow fixed w-2/12 pt-8 bg-white h-[100vh]'>
          <div className='flex flex-col content-center text-2xl font-semibold'>
            <div className='flex content-center cursor-pointer hover:bg-gray-300 items-center pt-3 pb-3'>
              <span class="material-symbols-outlined ml-3 mr-4" style={{ color: 'grey' }}>
                clear_day
              </span>
              <h1 className='text-lg'>My Day</h1>
            </div>
            <div className='flex content-center items-center cursor-pointer hover:bg-gray-300  pt-3 pb-3'>
              <span class="material-symbols-outlined ml-2 mr-4" style={{ color: 'grey' }}>
                star
              </span>
              <h1 className='text-lg'>Important</h1>
            </div>
            <div className='flex content-center items-center cursor-pointer hover:bg-gray-300 pt-3 pb-3'>
              <span class="material-symbols-outlined ml-2 mr-4" style={{ color: 'grey' }}>
                shopping_cart
              </span>
              <h1 className='text-lg'>Groceries</h1>
            </div>
          </div>
        </div>
        <div className='rightwindow w-10/12 mt-8' style={{ marginLeft: '20%' }}>
          <div>
            <Tasklist notes={notes} handleNoteDelete={deleteNote} />
          </div>
          <TextArea handleaddtext={addtext} />
        </div>
      </div>

    </div>
  )
}

export default App
