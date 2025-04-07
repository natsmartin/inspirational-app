"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import { addTodo } from "@features/todos/todoSlice";

function TaskInput() {
  const [newEntry, setNewEntry] = useState("");
  const [currentChar, setTCurrentChar] = useState(50);
  const dispatch = useAppDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (newEntry === "") {
      return;
    }

    dispatch(addTodo(newEntry));
    setNewEntry("");
    setTCurrentChar(maxChar);
  };
  const maxChar = 50;
  const handleChange = (e) => {
    const currentChar = e.target.value;
    if (currentChar.length <= maxChar) {
      setTCurrentChar(maxChar - currentChar.length);
      setNewEntry(currentChar);
    }
  };

  return (
    <div className="w-full max-w-sm min-w-[60%] my-4">
      <form onSubmit={onFormSubmit}>
        <div className="relative">
          <input
            type="text"
            className="peer w-full min-h-[150px] bg-[rgba(255,255,255,0.4)] placeholder:text-slate-800 text-slate-700 
            border border-slate-200 rounded-md px-3 py-6 transition duration-300 ease text-4xl text-center
            focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={newEntry}
            onChange={handleChange}
          ></input>
          <label
            id="text-label"
            className="absolute cursor-text px-1 left-2.5 top-2.5 text-slate-600 text-2xl md:text-3xl 
            transition-all transform origin-left peer-focus:-top-3 peer-focus:left-2.5 peer-focus:text-xl 
            peer-focus:text-slate-600 peer-focus:scale-90 peer-focus:bg-white"
          >
            What are your plans today?
          </label>
          <p className="flex justify-end text-sm text-slate-900 absolute right-2.5 bottom-1">
            {currentChar} characters remaining
          </p>
        </div>
      </form>
    </div>
  );
}

export default TaskInput;
