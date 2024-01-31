import React from "react";

const centreBreaker = ( {centreTB}) => {
    return(
        <div className="w-[375px] flex flex-col items-center justify-center text-center">
            <div className=" ml-[10px] pt-5 w-[340px] ">
            <h1 className="text-2xl font-medium" >{centreTB}</h1>
            </div>
        </div>
    )
}
export default centreBreaker;