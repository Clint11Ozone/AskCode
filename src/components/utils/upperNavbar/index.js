import React from 'react';
import Image from 'next/image';

function Index({ handlePrev, handleNext, slideIndex = 0, slides }) {
    // Function to refresh the page
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <>
            <div className="sticky bg-white px-5 py-5 w-screen h-16 top-0 z-[20] mx-auto flex items-center justify-between border-b border-gray-300 p-8">
                <Image src={'/assets/icons/back-button.svg'} height={30} width={30} onClick={handlePrev} />
                <Image src={"/assets/icons/logo.svg"} className="ml-[50px]" height={30} width={120} />
                <div className='flex flex-row items-center gap-[1rem]'>
                    <Image src={"/assets/icons/refresh-button.svg"} height={30} width={30} onClick={refreshPage} />
                    <Image src={"/assets/icons/help-button.svg"} height={30} width={30} />
                </div>
            </div>
        </>
    );
}

export default Index;
