import React from 'react'
import '../App.css'

const Tasks = ({text, id, handleNoteDelete, handleimportant}) => {


    return (
        <div className='mt-6 mb-6 p-3 h-16 rounded-2xl bg-white flex w-10/12 justify-start items-center m-auto hover:bg-[#fd8f66]'>
            <h1 className='text-[#636363] absolute font-semibold'>{text}</h1>
            <span className="material-symbols-outlined cursor-pointer absolute right-[16vw]" onClick={() => {document.getElementById(id).classList.toggle('show')}} style={{ marginLeft: '89%' }}>
                more_vert
            </span>
            <div className=' z-10 relative top-20 hidden bg-white justify-center items-center m-2 rounded-md' id={id} style={{ marginLeft: '92%' }}>
                <h3 onClick={()=>{handleNoteDelete(id)}} className='cursor-pointer w-20 m-2'>Completed</h3>
                <div>
                <h3 onClick={()=>{handleimportant(id)}} className='w-20 m-2 cursor-pointer'>Important</h3>
                </div>
                <h3 onClick={()=>{handleNoteDelete(id)}} className='cursor-pointer w-20 m-2'>Delete</h3>
            </div>
        </div>
    )
}

export default Tasks