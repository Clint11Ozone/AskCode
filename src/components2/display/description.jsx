import React from "react";

const Description = () => {
    return(
        //if you want the text to start typing from left to right remove the "text-center" class
        <div className="w-[375px] pb-[5px] flex flex-col text-center items-center">
            <div className="w-[340px]">
                <p className="text-sm/[23px] font-light">We will pass your details through to one of our repair partners. They will repair your device ASAP!</p>
            </div>
        </div>
    )
}

export default Description;