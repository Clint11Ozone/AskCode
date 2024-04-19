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
  const storageOption = [
    {
      value: 32,
      name: "32GB",
    },
    {
      value: 64,
      name: "64GB",
    },
    {
      value: 128,
      name: "128GB",
    },
    {
      value: 256,
      name: "256GB",
    },
    {
      value: 512,
      name: "512GB",
    },
  ]
  const colorOption = [
    {
      value: 1,
      name: "silver",
      rgb: "#414141"
    },
    {
      value: 2,
      name: "Blue",
      rgb: "#7CA1FF"
    },
    {
      value: 3,
      name: "Red",
      rgb: "#FF295D"
    },
    {
      value: 4,
      name: "Yellow",
      rgb: "#FFEC44"
    },
    {
      value: 5,
      name: "Purple",
      rgb: "#9F03FF"
    },
    {
      value: 6,
      name: "Green",
      rgb: "#689645"
    },

  ]



  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Handle storage option toggle
  const handleStorageToggle = (value) => {
    setSelectedStorage(value);
  };
  // Handle color option toggle
  const handleColorToggle = (value) => {
    setSelectedColor(value);
  };

  return (
    <div className="w-[375px] relative pt-5 pb-2.5 flex flex-col items-start">
        <h1 className="text-base ml-4">Storage</h1>
      <div className="w-[340px] my-[10px] gap-[10px] flex flex-wrap">
        {storageOption.map((button) => (
          <label
            key={button.value}
            className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
              selectedStorage === button.value ? "checked" : ""
            }`}
            onClick={() => handleStorageToggle(button.value)}
            style={{ backgroundColor: selectedStorage === button.value ? "#5253F1" : "white" }}
          >
            <span
              className="font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
              style={{ color: selectedStorage === button.value ? "white" : "black" }}
            >
              {button.name}
            </span>
            {selectedStorage === button.value && (
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
      <h1 className="text-base ml-4">Color</h1>
      <div className="w-[340px] my-[10px] gap-[10px] flex flex-wrap">
        
        {colorOption.map((button) => (
          <label
            key={button.value}
            className={`frame48095532 gap-2.5 flex-row items-center border bg-white px-[19px] py-3.5 rounded-[40px] border-[#e4e4e4] flex ${
              selectedColor === button.value ? "checked" : ""
            }`}
            onClick={() => handleColorToggle(button.value)}
            style={{ backgroundColor: selectedColor === button.value ? "#5253F1" : "white" }}
          >
            <span
              className="font-[Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI','Helvetica_Neue',Arial] text-sm font-normal text-black text-left "
              style={{ color: selectedColor === button.value ? "white" : "black" }}
            >
              {button.name}
            </span>
            {selectedColor === button.value && (
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
}

export default Index;
