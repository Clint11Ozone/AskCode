import React from "react";

function Header({
  heading = "Demo Heading",
}) {
  return (
    <div className="w-[375px] pt-5  flex flex-col text-center  items-center">
      <div className="w-[380px] px-20px">
        <h1 className="text-[30px]/[35.16px] font-semibold ">{heading}</h1>
      </div>
    </div>
  );
}

export default Header;
