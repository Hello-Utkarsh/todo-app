import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#ffcdcd] p-3 h-[100vh]">
      <div className='rightwindow w-4/5 mt-8' style={{marginLeft: '20%'}}>
        <Tasks task='Work1' />
        <Tasks task='Work1' />
        <Tasks task='Work1' />
        <Tasks task='Work5' />
      </div>
    </div>
  )
}

export default App
