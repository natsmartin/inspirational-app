"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@utils/hooks";
import TaskEntry from "@features/todos/TaskEntry";
import { clearTodo } from "@features/todos/todoSlice";
import DeleteButton from "@components/DeleteButton";

function TaskEntries() {
  const { todos } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  if (!todos.length) {
    return;
  }

  return (
    <div className="w-full min-w-[60%] max-w-sm h-auto bg-[rgba(255,165,0,0.4)] rounded-md">
      <ul className="flex flex-wrap p-6">
        {todos?.map(({ text }, index) => (
          <li
            className="m-1 p-6 border-2 border-black bg-yellow-200 rounded-md 
              min-w-[150px] max-w-max h-auto text-center text-2xl"
            key={text}
          >
            <TaskEntry id={index}>{text}</TaskEntry>
          </li>
        ))}
      </ul>
      {todos.length > 1 ? (
        <DeleteButton
          className="float-right mx-3 my-2 px-4 py-1 font-bold text-md bg-red-500"
          label="Clear"
          onClick={() => dispatch(clearTodo(todos.length))}
        />
      ) : null}
    </div>
  );
}

export default TaskEntries;
