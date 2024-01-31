import React from "react";

const Warning = ({ warning}) => {
  return (
    <div className="w-[340px] h-[64px] text-xs text-[#E46000] mt-[20px] p-5  bg-[#FFEEDE]  flex flex-row">
      <div className="mr-[25px]">
        <img src={warning?.icon} height={25} width={25} />
      </div>
      <div className="pt-[5px]">{warning?.text}</div>
    </div>
  );
};

export default Warning;
