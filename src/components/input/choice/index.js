import React, { useState } from "react";

const Index = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className="w-[375px] relative pt-5 pb-2.5 flex flex-col items-center">
      <div className=" w-[340px]  my-[10px] gap-[10px] flex flex-wrap">
        <label
          className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
            checked ? "checked" : ""
          }`}
          onClick={handleToggle}
          style={{ backgroundColor: checked ? "#5253F1" : "white"}}
        >
          <span
            className="256GB font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
            style={{ color: checked ? "white" : "black" }}
          >
            256GB
          </span>
          {checked && (
            <span className="checkmark ">
              <img
                className=""
                src="/assets/illustrations/Checkmark.svg"
                style={{width:"10px", height:"10px"}}
              />
            </span>
          )}
        </label>
        <label
          className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
            checked ? "checked" : ""
          }`}
          onClick={handleToggle}
          style={{ backgroundColor: checked ? "#5253F1" : "white" }}
        >
          <span
            className="256GB font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
            style={{ color: checked ? "white" : "black" }}
          >
            256GB
          </span>
          {checked && (
            <span className="checkmark ">
              <img
                className="w-[10px] h-[10px]"
                src="/assets/illustrations/Checkmark.svg"
              />
            </span>
          )}
        </label>
        <label
          className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
            checked ? "checked" : ""
          }`}
          onClick={handleToggle}
          style={{ backgroundColor: checked ? "#5253F1" : "white" }}
        >
          <span
            className="256GB font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
            style={{ color: checked ? "white" : "black" }}
          >
            256GB
          </span>
          {checked && (
            <span className="checkmark ">
              <img
                className="w-[10px] h-[10px]"
                src="/assets/illustrations/Checkmark.svg"
              />
            </span>
          )}
        </label>
        <label
          className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
            checked ? "checked" : ""
          }`}
          onClick={handleToggle}
          style={{ backgroundColor: checked ? "#5253F1" : "white" }}
        >
          <span
            className="256GB font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
            style={{ color: checked ? "white" : "black" }}
          >
            256GB
          </span>
          {checked && (
            <span className="checkmark ">
              <img
                className="w-[10px] h-[10px]"
                src="/assets/illustrations/Checkmark.svg"
              />
            </span>
          )}
        </label>
        <label
          className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
            checked ? "checked" : ""
          }`}
          onClick={handleToggle}
          style={{ backgroundColor: checked ? "#5253F1" : "white" }}
        >
          <span
            className="256GB font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
            style={{ color: checked ? "white" : "black" }}
          >
            256GB
          </span>
          {checked && (
            <span className="checkmark ">
              <img
                className="w-[10px] h-[10px]"
                src="/assets/illustrations/Checkmark.svg"
              />
            </span>
          )}
        </label>
        <label
          className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
            checked ? "checked" : ""
          }`}
          onClick={handleToggle}
          style={{ backgroundColor: checked ? "#5253F1" : "white" }}
        >
          <span
            className="256GB font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
            style={{ color: checked ? "white" : "black" }}
          >
            256GB
          </span>
          {checked && (
            <span className="checkmark ">
              <img
                className="w-[10px] h-[10px]"
                src="/assets/illustrations/Checkmark.svg"
              />
            </span>
          )}
        </label>
        
      </div>
    </div>
  );
};

export default Index;
