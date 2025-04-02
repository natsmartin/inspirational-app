import React from 'react'
import TaskInput from '@components/TaskInput'
import TaskEntries from '@components/TaskEntries'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <TaskInput />
      <TaskEntries />
    </div>
  )
}