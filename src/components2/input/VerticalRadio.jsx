import React from "react";
import software from "../assets/software.svg"

const RadioV = () => {
    return(
        <div className="w-[375px] pt-[10px] flex flex-col items-center">
            <div className="w-[340px] h-[65px] relative ">
                <input type="radio" name="Issue" id="Issue1" className= " w-[20px] h-[20px] absolute right-2 top-2 " />
                <label htmlFor="Issue1" className=" h-[65px] flex gap-4 px-[25px] py-[20px] border rounded-xl hover:border-[#5253f1] hover:border-[2px] ">
                    <img src={software} className=" mr-2 w-[24px] h-[24px] relative" alt="" />
                    <h1>Software</h1>
                </label>
            </div>
        </div>
    )
}

export default RadioV;