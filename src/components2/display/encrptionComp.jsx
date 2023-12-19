import React from "react";
import { GoShieldCheck } from "react-icons/go";

const Encrypt = () => {
  // const containerStyle = {
  //   position: "absolute",
  //   top: "474px",
  //   // left: '18px',
  //   padding: "20px",
  //   marginBottom: "100px",
  //   backgroundColor: "#F6F6F6", // Set the background color
  // };
  return (
    <div className="w-340 mt-[20px] p-5  bg-[#F6F6F6] space-x-6 flex" >
      <GoShieldCheck size={35} />
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
  );
};

export default Encrypt;
