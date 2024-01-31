import React from 'react'
import RadioCardLarge from "./RadioCardLarge";
import RadioCardVerticle from "./RadioCardVerticle";
import Brand from './Brand';
import Phone from './Phone';
import { useState, useEffect } from 'react';
import axios from 'axios';
import brandQuery from '@/components/utils/GSMArenaApI/GSM';


function Index({ radio, radioV }) {
    

    const [selectedCardID, setSelectedCardID] = useState();
    const [phoneData, setPhoneData] = useState([]);
    const handleCardSelect = (id) => {
        setSelectedCardID(id);
    }

    

    if (radio?.alignment == "grid") {
        return (
            <>

                <form className=" grid grid-cols-2 md:grid-cols-2 mt-[1rem] gap-x-[5px] gap-y-[5px] overflow-y-scroll ">
                    {radio?.radio?.map((card) => (
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
    } else if (radio?.alignment == "column") {
        return (
            <>
                <form className=" px-[2rem] grid grid-cols-1 mt-[1rem] gap-3 mx-4  2xl:mt-[3rem] md:w-[40rem] overflow-y-scroll md:overflow-y-hidden">
                    {radio?.radio?.map((card) => (
                        <RadioCardVerticle
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
    } else if (radio?.alignment == "GSMPhone"){
        return(
            <>
                <form className=" px-[5px]  grid grid-cols-2 md:grid-cols-2 mt-[1rem] gap-3 mx-4  2xl:mt-[3rem] md:w-[40rem] overflow-y-scroll md:overflow-y-hidden">
                    {radio?.radio?.map((card) => (
                        <Phone
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
    } else if (radio?.alignment == "GSMBrand") {
        return(
            <>
                <form className=" grid grid-cols-2 md:grid-cols-2 mt-[1rem] gap-x-[5px] gap-y-[10px] overflow-y-scroll ">
                    {radio?.radio?.map((card) => (
                        <Brand
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
}

export default Index;
