import React from 'react'

function Index({ form }) {
    console.log(form);
    return (
        <>
            <div>
                {
                    form?.map(
                        (item) => {
                            return <input placeholder={item?.placeholder} className={`border border-black mx-2 p-2 py-3 rounded ${item?.size == "half" ? "w-[45%]" : "w-[90%]" }`}></input>
                        }
                    )
                }
            </div>
        </>
    )
}

export default Index
