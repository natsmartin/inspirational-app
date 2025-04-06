import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from '@features/todos/todoSlice'

function TaskEntry({ children, id }) {
  const dispatch = useDispatch();

  return (
    <div className="relative">
        <button className="absolute top-[-32px] right-[-30px] text-xs bg-red-400 border-2 border-slate-300
          opacity-80 px-1 rounded-md hover:scale-125 hover:transition-all hover:font-semibold
          hover:cursor-pointer hover:opacity-100 hover:border-white"
          onClick={() => dispatch(deleteTodo(id))}
          >Remove
        </button>
      { children }
    </div>
  );
}

export default TaskEntry;
