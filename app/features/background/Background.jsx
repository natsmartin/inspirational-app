"use client";

import React, { useState, useEffect } from "react";
import { getBackground } from "@api/BackgroundAPI";

function Background() {
  const [background, setBackground] = useState({
    // urls: {
    //   full: 'https://images.unsplash.com/photo-1741509541812-5d8f3e96df23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MzI2'
    // }
  });

  useEffect(() => {
    const fetchBackground = async () => {
      const response = await getBackground()
      setBackground(response)
    }
    fetchBackground();
  }, [background])

  const handleClick = async () => {
    const response = await getBackground();
    setBackground(response);
    console.log(background.urls);
    const imageBg = background.urls.full
    document.getElementById("background-image").style.background = `url(${imageBg}) no-repeat center`;
    // document.getElementById("background").style.backgroundSize = 'cover';
    // document.getElementById("background").style.backdropFilter = 'blur(8px)';
  };


  return (
    <>
      <button 
      className="p-2 m-5 bg-[rgba(0,0,0,0.4)] hover:cursor-pointer hover:border-slate-500
        border-2 border-slate-400 rounded-md transition-all text-white"
      onClick={handleClick}>Change Background</button>
    </>
  );
}

export default Background;
