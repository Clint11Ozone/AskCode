import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const Foot = () => {

    const containerStyle = {
        position: 'absolute',
        top: '660px',
        bottom: '0px',
        height: '120px', 
      };
      const buttonStyle = {
        backgroundColor: '#5253F1',
        width: '340px',
        height: '60px',
        padding: '12px 171px 12px 171px',
        
      };
   
    return (
        <div style={containerStyle} className=" flex items-center h-screen">
          <button style={buttonStyle} className="flex flex-col items-center justify-center rounded-full text-white font-bold">
            <h1 className="flex space-x-2.5"><p>Continue </p><FaArrowRightLong  style={{ marginTop: '3px' }} size={20} /></h1>
          </button>
        </div>
      );

}

export default Foot;