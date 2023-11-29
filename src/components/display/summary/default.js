import React from 'react'
import Image from 'next/image'
import EditIcon from "@/../../form-template/public/assets/icons/edit.svg"

function Index({ }) {
    return (
        <div className="p-2 border-[1px] flex mt-2 rounded-[10px] bg-white">
            <div className="m-3">
                <Image src={UserIcon} alt='ico' />
            </div>
            <div className="flex-grow text-[0.7rem] md:text-[0.9rem] text-[#9a9a9a]">
                <h1 className="text-[1rem] text-black font-semibold mt-2 mb-1">Details</h1>
                <p className="lg:max-w-[10rem] max-w-[7rem]">
                    {data.formData.appertment} {data.formData.house_no}{" "}
                </p>
                <p className=" lg:max-w-[10rem] max-w-[7rem]">{data.formData.street}, {data.formData.zip}</p>
                <p className=" lg:max-w-[10rem] max-w-[7rem]">{data.formData.city}</p>
                <p className="mt-4 lg:max-w-[10rem] max-w-[7rem]">{data?.formData?.email}</p>
                <p className="lg:max-w-[10rem] max-w-[7rem]">{data?.formData?.phone}</p>
            </div>
            <div className="flex">
                <Image objectFit="" src={EditIcon} alt='' />
            </div>
        </div>
    )
}

export default Index
