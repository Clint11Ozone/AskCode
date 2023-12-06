import React from "react";

const Heading = () => {
  return (
    //if you want the text to start typing from the middle of the screen the us "text-center "
    <div className="w-[375px] pt-5 pb-2.5 flex flex-col text-center items-center">
      <div className="w-[200px] ">
        <h1 className="text-3xl font-semibold">
          Tell us, whats wrong?
        </h1>
      </div>
    </div>
  );
};

export default Heading;