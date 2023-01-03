import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-[#ffeaea] p-3 h-[100vh]">
      <div className='rightwindow w-4/5 mt-8' style={{marginLeft: '20%'}}>
        <Tasks task='Work1' buttonid = 'dropdown1'/>
        <Tasks task='Work1' buttonid = 'dropdown2'/>
        <Tasks task='Work1' buttonid = 'dropdown3'/>
        <Tasks task='Work5' buttonid = 'dropdown4'/>
      </div>
    </div>
  )
}

export default App
