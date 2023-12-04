import React from 'react'

function Header({ heading = "Demo Heading", textSize = '2rem', color = 'black', }) {
    return (
        <>
            <h1 className='mx-auto my-0 max-w-lg px-4 py-2 w-full font-bold break-words md:text-center leading-[3rem]'
                style={{ fontSize: textSize, color: color }}>
                {heading}
            </h1>
        </>
    )
}

export default Header
