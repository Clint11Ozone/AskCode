import React from 'react'
import RadioCardLarge from "./RadioCardLarge";
import { useState } from 'react';


function Index({ radio }) {
    const [selectedCardID, setSelectedCardID] = useState();

    const handleCardSelect = (id) => {
        setSelectedCardID(id);
    }

    return (
        <>
            <form className="w-full px-[2rem] grid grid-cols-2 md:grid-cols-2 mt-[1rem] gap-3 mx-4  2xl:mt-[3rem] md:w-[40rem] overflow-y-scroll md:overflow-y-hidden">
                {radio.map((card) => (
                    <RadioCardLarge
                        key={card?.id}
                        id={card?.id}
                        icon={card?.icon}
                        text={card?.text}
                        desc={card?.desc}
                        selected={selectedCardID === card?.id}
                        onSelect={handleCardSelect}
                    />
                ))}

            </form>
        </>
    )
}

export default Index
