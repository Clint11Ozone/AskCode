import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { SlReload } from "react-icons/sl";
import { BsQuestionCircle } from "react-icons/bs";
import  reload  from "../assets/reload.svg";
import back from "../assets/back.svg";
import logo from "../assets/Logo.svg";

const NavBar = () => {
  return (
    <div className="sticky px-5 py-5 w-screen h-16 top-0 z-[20] mx-auto flex  items-center justify-between border-b border-gray-300 p-8">
      {/* <div><HiOutlineArrowLeft size={24} /></div> */}
      <img src={back} alt="" />
      {/* <div>Logo here</div> */}
      <img src={logo} alt="" />
      <div className="flex space-x-5">
        <img src={reload} alt="" />
        <BsQuestionCircle size={24} />
      </div>
    </div>
  );
};

export default NavBar;
