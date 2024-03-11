import React, { useState, useEffect } from "react";
import Header from "@/components/utils/header";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import confetti from "canvas-confetti";

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

  const handleClick = () => {
    // Retrieve the selection from localStorage
    const userSelection = localStorage.getItem("userSelection");
    const brand = localStorage.getItem("Brand");
    const stream = localStorage.getItem("Netflix");
    const gaming = localStorage.getItem("Gaming");
    const videoCall = localStorage.getItem("videoCall");
    const talk = localStorage.getItem("Talk");
    const totalGB = (parseInt(stream) || 0) + (parseInt(gaming) || 0) + (parseInt(videoCall) || 0);

    // Redirect based on the user selection
    if (userSelection === "1") {
      window.location.href =
        `https://allplans.co.za/sim-only?data=${totalGB}?talk=${talk}`;
    } else if (userSelection === "2") {
      window.location.href = `https://allplans.co.za/mobiles/brands/${brand}?data=${totalGB}?talk=${talk}`;
    } else if (userSelection === "3") {
      window.location.href = `https://allplans.co.za/internet/lte?data=${totalGB}?talk=${talk}`;
    }
  };


  const [stream, setStream] = useState(null);
  const [gaming, setGaming] = useState(null);
  const [videoCall, setVideoCall] = useState(null);
  const [totalGB, setTotalGB] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    // Trigger confetti on component mount
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const localStorageAvailable = typeof localStorage !== "undefined";
    if (localStorageAvailable) {
      const streamValue = localStorage.getItem("Netflix");
      const gamingValue = localStorage.getItem("Gaming");
      const videoCallValue = localStorage.getItem("videoCall");
      const talk = localStorage.getItem("Talk");

      // Convert retrieved values to integers
      const streamGB = streamValue ? parseInt(streamValue, 10) : 0;
      const gamingGB = gamingValue ? parseInt(gamingValue, 10) : 0;
      const videoCallGB = videoCallValue ? parseInt(videoCallValue, 10) : 0;
      const talkGB = talk ? parseInt(talk, 10) : 0;


      // Update states
      setStream(streamGB);
      setGaming(gamingGB);
      setVideoCall(videoCallGB);
      setMinutes(talkGB)
      setTotalGB(streamGB + gamingGB + videoCallGB);
    }
    
  }, []);



  const talk = typeof localStorage !== "undefined" ? localStorage.getItem("Talk") : null;

  return (
    <div className="w-full md:h-screen min-h-screen h-fillAvailable bg-[#5253F1] flex flex-col items-center">
      <div>
        <img
          src={"/assets/icons/LogoW.svg"}
          className=" my-[15px] "
          height={30}
          width={120}
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
          The best deals with {totalGB}GB, {minutes} talk and 400 SMS are ready for you!
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

      <div className="gap-4  mr-[00px] flex flex-row py-[10px] text-[white] ">
        <div className="flex items-center space-x-2">
          <img
            src={"/assets/icons/ShieldWhite.svg"}
            width="16px"
            className="mt-1"
            alt="Logo"
          />
          <div className="flex flex-row items-center space-x-2">
            <h1 className="text-xs">We promise we won't spam!</h1>
            <a
              className="underline text-xs"
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
          </div>
        </div>
      </div>

      <footer className="bottom-0 w-full  justify-center">
        <div className="flex justify-center space-x-4 max-w-[40rem] mx-auto">
          <button
            className={`bg-[#8687F5] text-white py-[1rem] lg:py-[1.5rem] mt-auto px-4 rounded-full h-[60px] w-[340px] flex items-center justify-center ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleClick}
            disabled={isButtonDisabled}
            style={{ opacity: isButtonDisabled ? 0.5 : 1 }}
          >
            <span className="mr-1 text-black">see your deals</span>{" "}
            <img
              src={"/assets/icons/arrow-right.svg"}
              width="16px"
              className="mt-1"
              alt="Logo"
            />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Encrypt;
