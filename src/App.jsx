import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'
import TextArea from './components/TextArea'
import Tasklist from './components/Tasklist'

function App() {
  const [notes, setnotes] = useState([
    { text: 'First Note', id: 'work1' },
    { text: 'Second Note', id: 'work123' },
    { text: 'third Note', id: 'work11' },
    { text: 'Forthhhhhhhhhhhhh Note', id: 'work112' },
  ])
  const addtext = (text) => {
    tasks = text
    console.log(tasks)
  }

  return (
    <div className="App bg-[#ffeaea] p-3 h-[100vh]">
      <div className='rightwindow w-4/5 mt-8' style={{ marginLeft: '20%' }}>
        <div>
          <Tasklist notes={notes} />
        </div>
        <TextArea handleaddtext={addtext} />
      </div>

    </div>
  )
}

export default App
