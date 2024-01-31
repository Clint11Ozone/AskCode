import React from "react";
import { GoShieldCheck } from "react-icons/go";

function Index({ listView}) {
  console.log(listView);
  return (
    // <div>{listView}</div>
    <>
      {listView?.map((item, index) => {
        

        return (
          <div className="flex flex-row gap-2 pt-[25px] w-[340px]">
            <div className="text-white w-[25px] h-[25px] flex items-center justify-center rounded-full">
              {/* Use the item's icon property for the image source */}
              {item.icon && (
              <img
                src={item.icon}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            )}
            </div>
            <div className="text-base/[18.75px] font-normal">{item.text}</div>
          </div>
        );
      })}
    </>
  );
}

export default Index;
