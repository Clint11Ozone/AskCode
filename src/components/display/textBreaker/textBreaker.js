import React from "react";

const Breaker = ( {textBreaker}) => {
    return(
        <div className="w-[375px] flex flex-col items-center  ">
            <div className="w-[340px]">
            <h1 className="text-2xl font-medium" >{textBreaker}</h1>
            </div>
        </div>
    )
}
export default Breaker;