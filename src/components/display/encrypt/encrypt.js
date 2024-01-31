import React from "react";

function Encrypt({encryptM})  {
  
  return (
    <div className="w-340 mt-[20px] p-5  bg-[#F6F6F6] space-x-6 flex" >
      <div className="">
        <img src={"/assets/icons/shield.svg"} height={50} width={50} />
      </div>
      <div>
      <h1 className="text-sm font-normal">
        We use secure encryption to protect <br /> your data.{" "}
        <a
          className="underline"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our privacy policy
        </a>
      </h1>
      </div>
    </div>
  );
};

export default Encrypt;
