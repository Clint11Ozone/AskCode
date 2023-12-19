import React from "react";

const LargeText = () => {
    return (
      <div className="w-[375px] relative pb-2.5 flex flex-col items-center">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-[340px] h-[147px] text-sm text-gray-900  rounded-lg border border-[#E6E6E6] focus:ring-blue-500 focus:border-blue-500  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Start typing here..."
        ></textarea>
      </div>
    );
  };
  
  export default LargeText;