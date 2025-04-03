import React from 'react'
import Task from '@features/todos/Task'
import TaskEntries from '@components/TaskEntries'
import Weather from '@features/weather/Weather'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Weather />
      <Task />
      <TaskEntries />
    </div>
  )
}