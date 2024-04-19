import React from "react";
import RadioCardLarge from "./RadioCardLarge";
import RadioCardVerticle from "./RadioCardVerticle";
import Invincible from "./invincible"
import Brand from "./Brand";
import Phone from "./Phone";
import { useState, useEffect } from "react";
import axios from "axios";
import brandQuery from "@/components/utils/GSMArenaApI/GSM";
import Device from "@/components/input/radio/Brand"

function Index({ radio, radioV }) {
  const [selectedCardID, setSelectedCardID] = useState();
  const handleCardSelect = (id) => {
    setSelectedCardID(id);
  };

  const [device, setDevice] = useState([])
  const [spec, setSpec] = useState(null)
  const [devType, setDevType] = useState(null)
  const [brand, setBrand] = useState(null)

  useEffect(() => {

    const LSDevice = JSON.parse(localStorage.getItem("deviceType"))
    
    async function getDevice(brand, type) {
      try {
        const response = await axios.get(`http://127.0.0.1:4000/brand/${brand}`);
        const itemsArray = response.data.data;
        console.log(itemsArray);
        const filteredItems = itemsArray.filter(item => item.description.toLowerCase().includes(type.toLowerCase()));
        console.log(filteredItems);
        return filteredItems || itemsArray; // Return the filteredItems or the entire itemsArray if no filter match
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    if (radio?.alignment === "Device") { // Only fetch data if the alignment is "Device"
      const fetchData = async () => {
        const data = await getDevice('apple-phones-48', LSDevice);
        if (data) {
          setDevice(data); // Set device only if data is available
        }
      };
      fetchData(); // Call the fetchData function
    }
  }, [radio?.alignment]); // Dependency array includes radio?.alignment to trigger re-execution when it changes
  


  

  if (radio?.alignment == "grid") {
    return (
      <>
        <div className="">
          <form className="grid grid-cols-2 gap-x-3 gap-y-4 max-h-[450px] ">
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
        </div>
      </>
    );
  } else if (radio?.alignment == "column") {
    return (
      <>
      <div className="overflow-y-scroll">
        <form className="  grid grid-cols-1  max-h-[700px] gap-3 mx-4  2xl:mt-[3rem] md:w-[40rem] md:mb-[10px]">
          {radio?.radio?.map((card) => (
            <RadioCardVerticle
              key={card?.id}
              id={card?.id}
              icon={card?.icon}
              text={card?.text}
              desc={card?.desc}
              selected={selectedCardID === card?.id}
              value={card?.value}
              onSelect={handleCardSelect}
            />
          ))}
        </form>
        </div>
      </>
    );
  }else if (radio?.alignment == "columnV") {
    return (
      <>
      <div className="overflow-y-scroll">
        <form className="  grid grid-cols-1  max-h-[700px] gap-3 mx-4  2xl:mt-[3rem] md:w-[40rem] md:mb-[10px]">
          {radio?.radio?.map((card) => (
            <Invincible
              key={card?.id}
              id={card?.id}
              icon={card?.icon}
              text={card?.text}
              desc={card?.desc}
              selected={selectedCardID === card?.id}
              value={card?.value}
              onSelect={handleCardSelect}
            />
          ))}
        </form>
        </div>
      </>
    );
  } else if (radio?.alignment == "GSMPhone") {
    return (
      <>
        <form className=" grid grid-cols-2 md:grid-cols-2 mt-[1rem] gap-x-[5px]  gap-y-[10px] md:mb-[10px] mb-[70px] h-dvh overflow-y-scroll ">
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
    );
  } else if (radio?.alignment === "GSMBrand") {
    return (
      <>
        <div className="overflow-y-scroll">
          <form className="grid grid-cols-2 gap-x-3 gap-y-5 p-[1px]">
            {radio?.radio?.map((card) => (
              <Brand
                key={card?.id}
                id={card?.id}
                icon={card?.icon}
                text={card?.text}
                desc={card?.desc}
                value={card?.value}
                selected={selectedCardID === card?.id}
                onSelect={handleCardSelect}
              />
            ))}
          </form>
        </div>
      </>
    );
  } else if (radio?.alignment === "Device") {
    return (
      <>
        <div className="overflow-y-scroll">
          <form className="grid grid-cols-2 gap-x-3 gap-y-5 p-[1px]">
          {
          device?.slice(0, 6).map((card, index) =>(
            <Device key={index} id={card.name} icon={card.img} value={"Device"} text={card.name} selected={selectedCardID === card.name} onSelect={handleCardSelect}  />
          ))
        }
          </form>
        </div>
      </>
    );
  }
  
}

export default Index;

// grid grid-cols-2 gap-x-3 gap-y-4 overflow-y-scroll p-2 mb-[0px] md:mb-1