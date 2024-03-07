import React, { useState } from "react";
import Header from "@/components/utils/header";

function Encrypt({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  handlePrev,
  handleNext,
  slideIndex = 0,
  slides,
}) {
  const [isValid, setIsValid] = useState(true);
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(enteredEmail));
  };

  const isButtonDisabled = !name || !email || !surName;

  return (

    <div className="w-full md:h-screen h-fillAvailable bg-[#5253F1] flex flex-col items-center">
      
      <div>
        <img
          src={"/assets/icons/LogoW.svg"}
          className=" mb-[15px] "
          alt="Logo"
        />
      </div>

      <div className="w-[380px]">
      <h1 className="text-[65px] ml-[30px]">🥳</h1>
      </div>

      <div className="">
        <h1 className="text-[43px]/[49px] text-[white] text-bold md:mt-[25px] w-[310px] ">
          We’ve found the perfect deal
        </h1>
        <h1 className="text-xl text-normal text-white mt-[20px] w-[230px] ">
          The best deals with 20GB, 200 talk and 400 SMS are ready for you!
        </h1>
      </div>

      <div className="items-center flex flex-col">
        <form className="flex mt-[25px] gap-2.5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            className="p-5 border rounded-lg w-[165px] h-[59px] inputClass"
            required
          />
          <input
            type="text"
            value={surName}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Last name"
            className="p-5 border rounded-lg w-[165px] h-[59px] inputClass"
            required
          />
        </form>
      </div>

      <div className="w-[375px] relative pt-5  flex flex-col items-center">
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
            required
          />
        </form>
      </div>

      <div className="py-[10px] text-[white]">
        We promise we wont spam!{" "}
        <a
          className="underline"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy policy
        </a>
      </div>

      <footer className="bottom-0 w-full  justify-center">
        <div className="flex justify-center space-x-4 max-w-[40rem] mx-auto">
          <button
            className={`bg-[#8687F5] text-white py-[1rem] lg:py-[1.5rem] px-4 rounded-full h-[60px] w-[340px] flex items-center justify-center ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
            disabled={isButtonDisabled}
            style={{ opacity: isButtonDisabled ? 0.5 : 1 }}
          >
            <span className="mr-1">see your deals</span>{" "}
          </button>
        </div>
      </footer>

    </div>
  );
}

export default Encrypt;
