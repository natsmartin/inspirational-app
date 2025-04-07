import React from "react";
import { useAppDispatch } from "@utils/hooks";
import { deleteTodo } from "@features/todos/todoSlice";
import DeleteButton from "@components/DeleteButton";

function TaskEntry({ children, id }) {
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <DeleteButton
        className="absolute top-[-32px] right-[-30px] py-1 text-xs bg-red-400"
        label="Remove"
        onClick={() => dispatch(deleteTodo(id))}
      />
      {children}
    </div>
  );
}

export default TaskEntry;
