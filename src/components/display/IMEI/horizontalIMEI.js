import React from "react";
// import IMEIphone from "/assets/illustrations/IMEIPhone.svg";
// import IMEIbox from "/assets/illustrations/IMEIbox.svg";

function HorizontalIMEI ({box})  {
    console.log(box);

    var IMEIphone = "";
    var IMEIbox = "";
    return (
      <div className="w-[340px] grid grid-cols-2 gap-[13.73px] relative pt-5 pb-2.5 flex flex-col items-center">
        <div className="w-[163.13px] h-[140px] border relative rounded-lg flex justify-center items-center">
          <div className="w-[25px] text-center text-[10px] absolute text-white bg-[#5253F1] top-2 left-2 h-[25px] rounded-full">
            <h1 className="absolute top-[5px] left-[9px]">1</h1>
          </div>
          <div>
            <img src={box?.IMEIphone} className=" w-[66.38px] h-[61.802px]" />
            <h1 className="font-normal text-[10px]">Dial *#06# </h1>
          </div>
        </div>
        <div className="w-[163.13px] h-[140px] relative border rounded-lg flex justify-center items-center">
          <div className="w-[25px] text-center text-[10px] absolute text-white bg-[#5253F1] top-2 left-2 h-[25px] rounded-full">
            <h1 className="absolute top-[5px] left-[9px]">2</h1>
          </div>
          <div >
            <img src={box?.IMEIbox} className=" ml-[25%] w-[68.67px] h-[56.08px]" />
            <h1 className="font-normal text-[10px]">Check the box of your device</h1>
          </div>
        </div>
      </div>
    );
  };

export default HorizontalIMEI;
