import React from "react";
// import IMEI from "/assets/illustrtations/IMEI.svg"

const IconTextField = (image) => {
    console.log(image);
    var IMEI = "";
  return (
    <div className=" w-[375px] font-silkscreen pt-5 pb-2.5 flex flex-col text-center items-center">
      <form className="flex flex-row gap-[10px] w-[340px] border p-[20px] w-[340px] rounded-lg" >
        <img src={image?.IMEI} alt="" />
        <input type="text" placeholder="fill in your IMEI" />
      </form>
    </div>
  );
};

export default IconTextField;
