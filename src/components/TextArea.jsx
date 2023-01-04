import React from 'react'
import { useState } from 'react'

function TextArea({handleaddtext}) {
    let finaltext = ''
    const [taskentered, settaskentered] = useState('')
    const handleChange = (event)=>{
        settaskentered(event.target.value)
    }

    const handleClick = ()=>{
        handleaddtext(taskentered)
    }
  return (
    <div className='absolute bottom-2 w-8/12 bg-white flex items-center justify-around rounded-xl' style={{marginLeft: '6%'}}>
      <input type="text" defaultValue="Enter Your Tasks" onChange={handleChange} className='w-11/12 m-1 p-6 text-[#676767] rounded-xl h-10' />
      <button className='rounded-lg bg-slate-400 w-12 h-8' onClick={handleClick}>Enter</button>
    </div>
  )
}

export default TextArea
