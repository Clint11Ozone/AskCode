import React, { useState } from "react";

const Index = () => {
  const buttonData = [
    { text: "32GB" },
    { text: "64GB" },
    { text: "64GB" },
    { text: "128GB" },
    { text: "256GB" },
    { text: "256GB" },
  ];

  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleToggle = (index) => {
    if (checkedIndex === index) {
      // If the clicked button is already active, unselect it
      setCheckedIndex(null);
    } else {
      // Otherwise, select the clicked button and unselect the previously selected one
      setCheckedIndex(index);
    }
  };

  return (
    <div className="w-[375px] relative pt-5 pb-2.5 flex flex-col items-center">
      <div className="w-[340px] my-[10px] gap-[10px] flex flex-wrap">
        {buttonData.map((button, index) => (
          <label
            key={index}
            className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
              checkedIndex === index ? "checked" : ""
            }`}
            onClick={() => handleToggle(index)}
            style={{ backgroundColor: checkedIndex === index ? "#5253F1" : "white" }}
          >
            <span
              className="font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
              style={{ color: checkedIndex === index ? "white" : "black" }}
            >
              {button.text}
            </span>
            {checkedIndex === index && (
              <span className="checkmark ">
                <img
                  className="w-[10px] h-[10px]"
                  src="/assets/illustrations/Checkmark.svg"
                  alt="checkmark"
                />
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Index;
