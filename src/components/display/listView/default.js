import React from "react";

function Index({ listView }) {
  console.log(listView);
  return (
    // <div>{listView}</div>
    <>
      {listView?.map((item, index) => {
        return (
          <div className="flex flex-row gap-2 pt-[25px] w-[360px]">
            <div className="bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
              {index}
            </div>
            <div className="text-base/[18.75px] font-normal">{item}</div>
          </div>
        );
      })}
    </>
  );
}

export default Index;
