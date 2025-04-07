'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import TaskEntry from '@components/TaskEntry'

function TaskEntries() {

  const { todos } = useSelector((state) => state.todo);

  if(!todos.length) {
    return
  }

  return (
    <div className='w-full min-w-[60%] max-w-sm h-auto bg-[rgba(255,165,0,0.4)] rounded-md'>
      <ul className='flex flex-wrap p-6'>
        {
          todos?.map(({ text }, index) => (
            <li className='m-1 p-6 border-2 border-black bg-yellow-200 rounded-md 
              min-w-[150px] max-w-max h-auto text-center text-2xl'
              key={text}>
              <TaskEntry id={index} >
                {text}
              </TaskEntry>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TaskEntries