import React from "react";
import Image from "next/image";
// import shield from "@/../../form-template/public/assets/icons/shield.svg"

function Index({ notification }) {
  
  return (
    <div className="w-30 mt-[60px] w-[340px] h-[103px] p-5  bg-[#F6F6F6]  flex flex-row">
      <div className="mr-[25px]">
        <img src={notification?.icon}  className="h-[50px] w-[50px]" />
      </div>
      <div>{notification?.text}</div>
    </div>
  );
}

export default Index;
