import React from "react";

const Check = ( {text}) => {
    return(
        <div className="w-[375px] flex flex-col items-center  ">
            <div className=" ml-[10px] pt-5 w-[340px]">
            <h1 className="text-2xl font-medium" >{text}</h1>
            </div>
        </div>
    )
}
export default Check;   