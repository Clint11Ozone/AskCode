import React from "react";

const Box = () => {
  return (
    <div className="w-[375px] relative pt-5 pb-2.5 flex flex-col items-center">
      <form className="flex w-[340px] gap-2.5">
        <input type="text" placeholder="First Name" className="border w-[165px] h-[59px] p-[20px] inputClass" />
        <input type="text" placeholder="Last Name" className="border w-[165px] h-[59px] p-[20px] inputClass" />
      </form>
    </div>
  );
};

export default Box;
