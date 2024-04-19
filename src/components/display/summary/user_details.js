import React from 'react'
// import Image from 'next/image'
// import EditIcon from "@/../../form-template/public/assets/icons/edit.svg"

function Index({ summary }) {
    console.log(summary);
    console.log("--------------------");
    var phone_image = " ";
    var edit = " ";

    const boxContainerD = {
        width: "350px",
        height: "140px",
        padding: "20px",
    };
   
    const detailsicon = {
        width: "20px",
        height: "20px",
        margin: "20px",
        position: "absolute",
        // bottom: "87px",
        left: "0px",
        top: "0px",
    };
    const detailsEdit = {
        width: "18px",
        height: "18px",
    };
    const editContainerDetails = {
        width: "38px",
        height: "38px",
        Radius: "52px",
        position: "absolute",
        right: "10px",
        top: "10px",
        backgroundColor: "#F6F6F6",
    };
    


    return (
        <div
        className="flex border mt-5 rounded-xl items-center justify-center mx-auto relative"
        style={boxContainerD}
      >
        {/* Details */}
        <div className="flex">
          <img className="" style={detailsicon} src={summary?.user_image} alt="profile" />
          <div className="flex flex-col pr-20">
            <h1 className="">Details</h1>
            <p className="font-normal text-[#3A3A3A]/50 text-sm">Die Rand 70</p>
            <p className="font-normal text-[#3A3A3A]/50 text-sm">
              Stellenbosch <br />
            </p>
            <p className="font-thin text-[#3A3A3A]/50 text-xs">.</p>
            <p className="font-normal text-[#3A3A3A]/50 text-sm">
              john.doe@gmail.com
            </p>
            <p className="font-normal text-[#3A3A3A]/50 text-sm">
              +27 991 003 1992
            </p>
            
          </div>
          <div
            className="border rounded-full flex items-center pl-2.5"
            style={editContainerDetails}
          >
            <img style={detailsEdit} src={summary?.edit} alt="" />
          </div>
        </div>
      </div>
    )
}

export default Index
