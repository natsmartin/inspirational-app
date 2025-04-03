import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from '@features/todos/todoSlice'

function TaskEntry({ children, id }) {
  const dispatch = useDispatch();

  return (
    <div className="relative">
        <button className="absolute top-[-32px] right-[-25px] text-xs bg-red-400 opacity-80 p-1 rounded-md
          hover:cursor-pointer hover:opacity-100"
          onClick={() => dispatch(deleteTodo(id))}
          >Remove
        </button>
      { children }
    </div>
  );
}

export default TaskEntry;
