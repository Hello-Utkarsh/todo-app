import React from 'react'
import { useState } from 'react'

function TextArea({ handleaddtext }) {
  const [taskentered, settaskentered] = useState('')
  const handleChange = (event) => {
    settaskentered(event.target.value)
  }
  const handleClick = () => {
    if (taskentered != '') {
      handleaddtext(taskentered)
      document.getElementById('taskinput').value = "Enter a task"
      settaskentered('')
    }
    else {
      document.getElementById('taskinput').value = "Please enter a task first"
    }
  }

  const cleardefault = (event) => {
    event.target.value = ''
  }
  return (
    <div className='relative bottom-1 w-10/12 bg-white flex items-center justify-around rounded-xl' style={{ marginLeft: '8.5%' }}>
      <input id='taskinput' type="text" defaultValue="Add a task" onClick={cleardefault} onChange={handleChange} className='w-10/12 m-1 pt-3 pb-3 text-[#676767] rounded-xl h-10 outline-0' />
      <button className='rounded-lg bg-slate-400 w-14 h-8 flex justify-center items-center' onClick={handleClick}>Enter</button>
    </div>
  )
}

export default TextArea
