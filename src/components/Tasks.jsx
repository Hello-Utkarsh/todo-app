import React from 'react'
import '../App.css'

const Tasks = ({text, id, handleNoteDelete}) => {


    return (
        <div className='mt-6 mb-6 p-3 h-16 rounded-2xl bg-white flex w-10/12 justify-start items-center m-auto hover:bg-[#fd8f66]'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <h1 className='text-[#636363] absolute font-semibold'>{text}</h1>
            <span className="material-symbols-outlined cursor-pointer absolute right-[9vw]" onClick={() => {document.getElementById(id).classList.toggle('show')}} style={{ marginLeft: '89%' }}>
                more_vert
            </span>
            <div className=' z-10 relative top-20 hidden bg-white justify-center items-center m-2 rounded-md' id={id} style={{ marginLeft: '92%' }}>
                <h3 onClick={()=>{handleNoteDelete(id)}} className='cursor-pointer w-20 m-2'>Completed</h3>
                <h3 className='w-20 m-2'>Important</h3>
                <h3 onClick={()=>{handleNoteDelete(id)}} className='cursor-pointer w-20 m-2'>Delete</h3>
            </div>
        </div>
    )
}

export default Tasks