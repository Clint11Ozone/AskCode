import React from 'react'
// import allplansLogo from "@/../../form-template/public/assets/icons/Allplans-logo.svg";
// import back from "@/../../form-template/public/assets/icons/back-button.svg";
// import refresh from "@/../../form-template/public/assets/icons/refresh-button.svg";
// import help from "@/../../form-template/public/assets/icons/help-button.svg";
import Image from 'next/image';

function Index({ handlePrev, handleNext, slideIndex = 0, slides }) {
    return (
        <>
    <div className="sticky bg-white px-5 py-5 w-screen h-16 top-0 z-[20] mx-auto flex  items-center justify-between border-b border-gray-300 p-8">
               {slideIndex != 0 && <Image src={'/assets/icons/back-button.svg'} height={30} width={30} onClick={handlePrev}/>}
                <Image src={"/assets/icons/Allplans-logo.svg"} height={30} width={120} />
                <div className='flex flex-row items-center gap-[1rem]'>
                    <Image src={"/assets/icons/refresh-button.svg"} height={30} width={30} />
                    <Image src={"/assets/icons/help-button.svg"} height={30} width={30} />
                </div>

            </div>
        </>
    )
}

export default Index
