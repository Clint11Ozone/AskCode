import React from "react";

function Index({phone}){
    console.log(phone); 
    
    return (
        <div  className="items-center flex flex-col">
          <form className="flex gap-2.5">
            <input  type="text" placeholder="First name" className=" p-5 border  rounded-lg w-[165px] h-[59px] inputClass"/>
            <input type="text" placeholder="Last name" className=" p-5 border rounded-lg w-[165px] h-[59px]  inputClass"/>
          </form>
        </div>
      ); 
}

export default Index;