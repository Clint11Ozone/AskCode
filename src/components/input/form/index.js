import React, {useState} from "react";
import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";

function Index({ form }) {
  console.log(form);
  const [phone, setPhone] = useState(''); // Use useState hook to manage state

  return (
    <div className="w-[375px] pt-5 pb-2.5 flex flex-col text-center items-center">
      <form className=" gap-2.5">

      <PhoneInput 
    
          country={'za'}
          value={phone}
          placeholder="665 881 29"
          onChange={(value) => setPhone(value)} // Update the state using setPhone
        />
      </form>
    </div>
  );
}

export default Index;
