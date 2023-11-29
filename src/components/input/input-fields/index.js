import React from 'react'
import { FaLeaf } from 'react-icons/fa'


function InputFields({ textSize = '1rem', textColor = 'black', backgroundColor = 'white', backgroundImage, icon = FaLeaf }) {
    return (
        <div className='border-black border-[1px] relative md:py-4 py-2 px-2 m-2 rounded-xl w-1/2 flex items-center ' style={{ backgroundColor: backgroundColor }}>
            {/* TODO: add a value attribute */}
            <input
                style={{ backgroundColor: backgroundColor, color: textColor, fontSize: textSize }}
                className='bg-transparent m-2 text-xl -lg w-10/12 outline-none' name='' placeholder='Input Box' disabled={false} readOnly={false} type='text' autoComplete='false' />
            <img className='absolute right-3 max-h-[4rem] min-h-[2rem] min-w-[2rem] max-w-[4rem] h-2/12 w-2/12 p-2' src="/search1.png" alt='logo' />
        </div>
    )
}

export default InputFields
