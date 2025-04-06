import React from "react";

function BackgroundImage({ background }) {
  return (
    <div className="absolute z-[-2] w-full h-full">
      <img
        src={background?.urls.full}
        className="fixed z-[-1] blur-xs md:min-w-dvh md:min-h-dvw min-w-full min-h-full object-cover object-center"
        id="background-image"
        alt={background?.alt_description}
      ></img>
    </div>
  );
}

export default BackgroundImage;
