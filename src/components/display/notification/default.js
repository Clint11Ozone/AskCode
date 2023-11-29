import React from 'react'
import Image from "next/image"
import shield from "@/../../form-template/public/assets/icons/shield.svg"

function Index({ notification }) {
    return (
        <div className='bg-slate-200 m-[1rem] p-[0.8rem] rounded-lg flex flex-row gap-[0.5rem] items-center'>
            <div className="">
                <Image src={shield} height={50} width={50} />
            </div>
            <div className=''>{notification}</div>
        </div>

    )
}

export default Index
