import React, { useState, useEffect } from "react";

function Index({ content }) {
  console.log(content);
  console.log("--------------------");

  const boxContainerP = {
    width: "350px",
    height: "116px",
    padding: "20px",
  };

  const imgPhone = {
    width: "36px",
    height: "45px",
    margin: "20px",
    position: "absolute",
    left: "0px",
    top: "0px",
  };

  const phoneEdit = {
    width: "18px",
    height: "18px",
  };

  const editContainerPhone = {
    width: "38px",
    height: "38px",
    Radius: "52px",
    backgroundColor: "#F6F6F6",
    position: "absolute",
    right: "10px",
    top: "10px",
  };

  let cache = {};
  const [fetchedFromLocalStorage, setFetchedFromLocalStorage] = useState(false);

  function getData(key) {
    // Check if data has already been fetched from local storage
    if (cache[key]) {
      console.log("Fetching from cache");
      return cache[key]; // Return data from cache
    }
  
    // Fetch data from local storage only if not previously fetched
    const item = localStorage.getItem(key);
    if (item) {
      console.log("Fetching from local storage");
      const data = JSON.parse(item);
      // Check if data is an array and access the first item
      const firstItem = Array.isArray(data) ? data[0] : data;
      cache[key] = firstItem; // Store data in cache
      setFetchedFromLocalStorage(true); // Update the flag
      return firstItem;
    }
  
    return null; // Return null if the data is not found
  }
  

  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const data = getData("sim");
    setMyData(data);
  }, []);

  console.log(myData); // Data from local storage or cache

  return (
   myData ? (<div
      className="flex border mt-[15px] rounded-xl items-center justify-center mx-auto relative"
      style={boxContainerP}
    >
      {/* Phone */}
      <div className="flex">
        <img className="" style={imgPhone} src={content?.img} alt="phone " />
        <div className="flex flex-col pl-3">
          <h1 className="">Problem</h1>
          <p className="font-normal text-[#3A3A3A]/50 text-sm">
            {myData ? myData : "Loading..."}
          </p>
          <p className="font-normal text-[#3A3A3A]/50 text-sm">
          {myData ? myData : "Loading..."}
          </p>
        </div>
        <div
          className="border rounded-full flex items-center pl-2.5"
          style={editContainerPhone}
        >
          <img style={phoneEdit} src={content?.edit} alt="" />
        </div>
      </div>
    </div>): (
      <div>Loading...</div> // This can be styled as needed or replaced with a loading spinner
    )
  );
}

export default Index;