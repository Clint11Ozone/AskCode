import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddButton = ({goToSlide}) => {
  return (
    <div className="flex items-center justify-center h-[120px]">
      <button onClick={() => goToSlide(5)} className="w-[340px] h-[60px] bg-[#F3F3F3] flex items-center justify-center rounded-full text-black font-bold">
        <h1 className="flex items-center space-x-2.5">
          Add another problem
          <FaPlus style={{ marginTop: "2px", marginLeft: "15px" }} size={20} />
        </h1>
      </button>
    </div>
  );
};

export default AddButton;
