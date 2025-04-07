import React from "react";

const DeleteButton = ({ className, label, onClick }) => {
  return <button className={className + ` border-2 border-slate-300
          opacity-80 rounded-md hover:scale-125 hover:transition-all hover:font-semibold
          hover:cursor-pointer hover:opacity-100 hover:border-white`} onClick={onClick}>{label}</button>;
};

export default DeleteButton;
