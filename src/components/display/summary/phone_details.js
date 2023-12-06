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
        left: "0px",
        top: "0px",
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
        right: "10px",
        top: "10px",
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
            className="flex border rounded-xl items-center justify-center mx-auto relative"
            style={boxContainerP}
        >
            {/* Phone */}
            <div className="flex">
                <img className="" style={imgPhone} src={summary?.phone_image} alt="phone " />
                <div className="flex flex-col pl-3">
                    <h1 className="">Apple</h1>
                    <p className="font-normal text-[#3A3A3A]/50 text-sm">
                        iPhone 14 Pro Max
                    </p>
                    <p className="font-normal text-[#3A3A3A]/50 text-sm">
                        Warranty: Uploaded document
                    </p>
                    <p className="font-normal text-[#3A3A3A]/50 text-sm">
                        IMEI: 2022 9992 22229 2992
                    </p>

                </div>
                <div
                    className="border rounded-full flex items-center pl-2.5"
                    style={editContainerPhone}
                >
                    <img style={phoneEdit} src={summary?.edit} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Index
