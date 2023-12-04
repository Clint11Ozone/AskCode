import React from 'react'
import Image from 'next/image'
import EditIcon from "@/../../form-template/public/assets/icons/edit.svg"

function Index({ summary }) {
    console.log(summary);
    console.log("--------------------");
    var phone_image = " ";
    var edit = " ";

    const containerStyle = {
        position: "absolute",
        top: "80px",
        padding: "0px 0px  0px 0px",
        width: "385px",
    };
    const boxContainerP = {
        width: "350px",
        height: "116px",
        padding: "20px",
    };
    const boxContainerD = {
        width: "350px",
        height: "140px",
        padding: "20px",
    };
    const boxContainerProblem = {
        width: "350px",
        height: "122px",
        padding: "20px",
    };
    const imgPhone = {
        width: "36px",
        height: "45px",
        margin: "20px",
        position: "absolute",
        // bottom: "34px",
        left: "18px",
        top: "94px",
    };
    const detailsicon = {
        width: "20px",
        height: "20px",
        margin: "20px",
        position: "absolute",
        // bottom: "87px",
        left: "18px",
        top: "223px",
    };
    const detailsEdit = {
        width: "18px",
        height: "18px",
    };
    const phoneEdit = {
        width: "18px",
        height: "18px",
    };
    const ProblemEdit = {
        width: "18px",
        height: "18px",
    }
    const AudioStyle = {
        width: "24px",
        height: "24px"
    }
    const editContainerDetails = {
        width: "38px",
        height: "38px",
        Radius: "52px",
        position: "absolute",
        right: "25px",
        top: "235px",
        backgroundColor: "#F6F6F6",
    };
    const editContainerPhone = {
        width: "38px",
        height: "38px",
        Radius: "52px",
        backgroundColor: "#F6F6F6",
        position: "absolute",
        right: "25px",
        top: "100px",
    };
    const editContainerProblem = {
        width: "38px",
        height: "38px",
        Radius: "52px",
        backgroundColor: "#F6F6F6",
        position: "absolute",
        right: "25px",
        bottom: "75px",
    };
    const h1Left = {
        marginLeft: "0px"
    }


    return (
        <div
        className="flex border mt-5 rounded-xl items-center justify-center mx-auto"
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
