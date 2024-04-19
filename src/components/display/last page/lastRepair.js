import React from "react";
import Greencheck from "#/public/assets/icons/greenCheck.svg";
import Purplecheck from "#/public/assets/icons/purpleCheck.svg";
import Image from "next/image";

function Index({ list }) {
  // console.log(listView);
  return (
    <div className="w-[375px] relative gap-y-[19px] pt-5 pb-2.5 flex flex-col items-start">
      <div className="w-[65px] h-[65px]">
        <Image src={Greencheck} />
      </div>
      <div>
        <h4 className="text-3xl font-semibold ">
          Your repair request has been succesfully submitted!{" "}
        </h4>
      </div>
      <div>
        <h7 className="text-base opacity-[.65] font-thin ">
          Your repair request has been succesfully submitted! Your repair
          request has been succesfully submitted!{" "}
        </h7>
      </div>
      <div className="flex flex-row gap-x-2">
        <div className=" w-[13.5px] pt-2 h-[9]">
          <Image src={Purplecheck} />
        </div>
        <div>
          <h1 className="font-medium text-base">Safe delivery</h1>
          <h1 className="font-thin opacity-[.65] text-sm">
            Your repair request has been!
          </h1>
        </div>
      </div>
      <div className="flex flex-row gap-x-2">
        <div className=" w-[13.5px] pt-2 h-[9]">
          <Image src={Purplecheck} />
        </div>
        <div>
          <h1 className="font-medium text-base">
          Track and trace
          </h1>
          <h1 className="font-thin opacity-[.65] text-sm">
          Your repair request has been!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Index;
