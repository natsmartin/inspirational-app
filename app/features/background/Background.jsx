"use client";

import React, { useState, useEffect, Suspense } from "react";
import { getBackground } from "@api/BackgroundAPI";
import Loading from "@app/loading"
import BackgroundImage from "@features/background/BackgroundImage"
import Modal from "@components/Modal"

function Background() {
  const [background, setBackground] = useState(null);
  const [error, setError] = useState();
  const [display, setDisplay] = useState("hidden");

  useEffect(() => {
    const fetchBackground = async () => {
      const response = await getBackground();
      if(response.errors) {
        setError(response.errors);
      } else {
        setBackground(response);
      }
    };
      fetchBackground();
  }, []);

  const handleClick = async () => {
    const response = await getBackground();
    setBackground(response);
  };

  return (
    <>
      <Modal id="bg-modal" onClick={() => {setDisplay("hidden")}} error={error} display={display}/> 
      <Suspense fallback={<Loading />}>
        <BackgroundImage background={background} />
      </Suspense>
      <button
        className="p-2 m-5 bg-[rgba(0,0,0,0.4)] hover:cursor-pointer hover:border-slate-500
        border-2 border-slate-400 rounded-md transition-all text-white"
        onClick={handleClick}
      >
        Change Background
      </button>
    </>
  );
}

export default Background;
