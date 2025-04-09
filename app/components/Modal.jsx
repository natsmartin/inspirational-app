import React from 'react'

const Modal = ({ onClick, error, display, id }) => {
  return (
    <div id={id} className={`fixed p-10 z-50 bg-[rgba(0,0,0,0.5)] w-screen h-screen left-0 top-0 ${display}`}>
      <div className="flex justify-center items-center p-2 mx-auto *:m-4 min-w-[50%] h-[15%] md:h-[10%] bg-red-700">
        <p className="text-white">Error: {error}</p>
        <button className="hover:cursor-pointer hover:text-black text-white font-semibold" onClick={ onClick }>X</button>
      </div>
    </div>
  )
}

export default Modal