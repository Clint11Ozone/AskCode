import React, { useState } from "react";
// import emailSVG from "";

function Index({ Mail}){
    console.log(Mail);
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
  
    const handleEmailChange = (e) => {
      const enteredEmail = e.target.value;
      setEmail(enteredEmail);
  
      // Simple email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid(emailRegex.test(enteredEmail));
    };
  
    return (
      <div className="w-[375px] relative pt-5 pb-2.5 flex flex-col items-center">
        <form className="flex  w-[340px] relative">
          <img
            src="/assets/illustrations/Email.svg"
            alt=""
            className="absolute left-[20px] top-[18px] transform-translate-y-[-50%]"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-[340px] pl-[50px] h-[59px] rounded-lg border " // Adjust the width and padding as needed
            placeholder="Enter your email"
          />
        </form>
      </div>
    );
}

export default Index;