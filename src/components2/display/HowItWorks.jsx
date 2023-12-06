import React from "react";
import one from "../../assets/one.svg"
import two from "../../assets/two.svg"
import three from "../../assets/three.svg"

const Works = () => {
    const imgSize = {
        width: "30px",
        height: "30px"
    }
    return(
        <div className="w-[375px] pt-[15px] pb-[15px] flex flex-col items-center">
            <div className="flex flex-row">
                <img className="relative right-[10px] h-[24px] w-[24px]" src={one}  alt="" />
                <p className="relative  font-normal text-base"  >Tell us what type of device needs fixing</p>
            </div>
        </div>
    )
}

export default Works;