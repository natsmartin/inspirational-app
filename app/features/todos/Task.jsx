'use client'

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@features/todos/todoSlice";

function TaskInput() {

const [newEntry, setNewEntry] = useState("");
const [totalChar, setTotalChar] = useState();
const [currentChar, setTCurrentChar] = useState();
const dispatch = useDispatch();

const onFormSubmit = (e) => {
  e.preventDefault();

  if(newEntry === "") {
    return;
  }

  dispatch(addTodo(newEntry));
  setNewEntry("");
  setTCurrentChar(maxChar)
}
const maxChar = 50
const handleChange = (e) => {
  const currTotalChar = e.target.value
  setTotalChar(currTotalChar.length)
  setTCurrentChar(maxChar - totalChar)
  if(currTotalChar.length <= maxChar) {
    setNewEntry(currTotalChar)
  } else {
    window.alert("Maximum number of characters exceed!")
  }
}

  return (
    <div className="w-full max-w-sm min-w-[60%] my-4">
      <form onSubmit={onFormSubmit}>
      <div className="relative">
        <input 
          type="text" 
          className='peer w-full min-h-[150px] bg-transparent placeholder:text-slate-800 text-slate-700 border border-slate-200 
            rounded-md px-3 py-6 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-4xl'
            value={newEntry}
            onChange={handleChange}></input>
        <label 
          className='absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-600 text-3xl transition-all transform origin-left peer-focus:-top-2 
            peer-focus:left-2.5 peer-focus:text-xl peer-focus:text-slate-600 peer-focus:scale-90'>What are your plans today?</label>
      <p className="flex justify-end">{currentChar} remaining</p>
      </div>
      </form>
    </div>
  );
}

export default TaskInput;
