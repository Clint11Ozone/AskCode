import React from 'react'

function Index({ listView }) {
    console.log(listView);
    return (
        // <div>{listView}</div>
        <>
            {
                listView?.map((item, index) => {
                    return <div className='flex flex-row gap-2 max-w-lg md:mx-auto mx-[1rem]'>
                        <div className='bg-black text-white w-5 h-5 flex items-center justify-center rounded-full'>{index}</div>
                        <div>{item}</div>
                    </div>
                })
            }
        </>
    )
}

export default Index
