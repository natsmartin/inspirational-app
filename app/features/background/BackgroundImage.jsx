import React from "react";

function BackgroundImage({ background }) {
  return (
    <div className="absolute z-[-1] md:w-screen md:h-screen">
      <img
        src={background?.urls.full}
        className="fixed z-0 blur-xs min-w-dvh min-h-dvw md:min-w-screen md:min-h-screen"
        id="background-image"
        alt={background?.alt_description}
      ></img>
    </div>
  );
}

export default BackgroundImage;
