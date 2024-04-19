import React from 'react'
// import Image from 'next/image'
// import EditIcon from "@/../../form-template/public/assets/icons/edit.svg"

function Index({ summary }) {
    console.log(summary);
    console.log("--------------------");

    const boxContainerP = {
        width: "350px",
        height: "116px",
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

    const phoneEdit = {
        width: "18px",
        height: "18px",
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
    
    return (
        <div
            className="flex border mb-[15px] rounded-xl items-center justify-center mx-auto relative"
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
