import React from 'react'

export default function Tasks(props) {
    return (
        <div className='mt-6 mb-6 p-3 rounded-2xl bg-white flex w-10/12 justify-center items-center m-auto hover:bg-[#ff7f50]'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <h1 className='text-[#636363] font-semibold'>{props.task}</h1>
            <span className="material-symbols-outlined" style={{marginLeft: '89%'}}>
                more_vert
            </span>
        </div>
    )
}
