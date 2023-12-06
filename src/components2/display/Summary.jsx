import React from "react";
import Phone from "../../assets/iPhone14PMax.svg";
import edit from "../../assets/edit.svg";

const Summary = () => {
  return (
    <div className="w-[375px] pt-5 pb-2.5 flex flex-col text-center items-center">
      <div className="w-[340px] gap-2 px-[20px] py-[18px] border rounded-xl flex flex-row">
        <img src={Phone} className="w-[36px] h-[45px]" alt="" />
        <div className="flex items-start flex-col pl-3">
          <h1>Apple</h1>
          <p>iPhone 14 pro max</p>
          <p>Warranty: uploaded document</p>
          <p>IMEI........</p>
        </div>
        <div className="border w-[38px] items-center justify-center h-[38px] rounded-full bg-[#F6F6F6]">
          <img src={edit} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
