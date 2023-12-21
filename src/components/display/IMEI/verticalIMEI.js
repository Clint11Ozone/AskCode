import React from "react";
// import IOS from "/assets/illustrations/IOS.svg";
// import Android from "/assets/illustrations/Android.svg";

function VerticalIMEI  ({image})  {
    var IOS = "";
    var Android = "";
    return (
      <div className="w-[375px] relative pt-5 pb-2.5 flex flex-col items-center">
        <div className="w-[340px] h-[140px] border rounded-lg relative">
          <div className="w-[25px] text-center text-[10px] absolute text-white bg-[#5253F1] top-2 left-2 h-[25px] rounded-full">
            <h1 className="absolute top-[5px] left-[9px]">3</h1>
          </div>
          <div className="flex flex-col h-[140px] relative items-center justify-center">
            <h1 className="text-[14px] absolute top-[32px]">Check out our guide for finding your IMEI</h1>
            <div className=" absolute top-[70px] flex flex-row gap-[86px]">
              <div className="w-[74px] h-[41.63px]">
                <img src={image?.IOS} className="absolute top-[10px]" />
              </div>
              <div>
                <img src={image?.Android} className="w-[96.1px] h-[62px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default VerticalIMEI;