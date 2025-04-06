import React from "react";

function BackgroundImage({ background }) {
  return (
    <div className="absolute z-[-2] w-full">
      <img
        src={background?.urls.full}
        className="fixed top-0 z-[-1] blur-xs md:min-w-dvh md:min-h-dvw min-w-full min-h-full object-cover object-top"
        id="background-image"
        alt={background?.alt_description}
      ></img>
    </div>
  );
}

export default BackgroundImage;
