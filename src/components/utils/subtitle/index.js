import React from 'react'

function SubHeader({
    subtitle = "This is a demo question: what is your hobby? How are you?", textSize = '1rem', color = '#808080', }) {
    return (
        <>
            <p className='mx-auto my-0 max-w-lg px-4 py-4 w-full font-normal md:text-center leading-5 break-words'
                style={{ fontSize: textSize, color: color }}>
                {subtitle}
            </p>
        </>
    )
}

export default SubHeader
