import React from "react";
import camera from "../assets/Camera.svg";

const RadioH = () => {
  return (
    <div className="w-[375px] pt-[10px] flex flex-col items-center gap-2.5">
      <div className="w-[340px] relative  gap-2.5 flex">
        <div className="w-[165px]">
          <input
            type="radio"
            name="Issue"
            id="Issue1"
            className=" w-[20px] h-[20px] absolute left-[140px] top-2 "
          />
          <label
            htmlFor="Issue1"
            className=" flex flex-col items-center h-[111px] gap-4 px-[25px] py-[20px] border rounded-xl hover:border-[#5253f1] hover:border-[2px] "
          >
            <img
              src={camera}
              className=" mr-2 w-[24px] h-[24px] relative"
              alt=""
            />
            <h1>Software</h1>
          </label>
        </div>
        <div className="w-[165px]">
          <input
            type="radio"
            name="Issue"
            id="Issue1"
            className=" w-[20px] h-[20px] absolute right-2 top-2 "
          />
          <label
            htmlFor="Issue1"
            className=" h-[111px] flex flex-col items-center gap-4 px-[25px] py-[20px] border rounded-xl hover:border-[#5253f1] hover:border-[2px] "
          >
            <img
              src={camera}
              className=" mr-2 w-[24px] h-[24px] relative"
              alt=""
            />
            <h1>Software</h1>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioH;
