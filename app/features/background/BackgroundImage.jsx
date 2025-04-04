import React from "react";

function BackgroundImage({ background }) {
  return (
    <div className="absolute z-[-1] w-screen h-screen">
      <img
        src={background?.urls.full}
        className="fixed z-0 blur-xs"
        id="background-image"
        alt={background?.alt_description}
      ></img>
    </div>
  );
}

export default BackgroundImage;
