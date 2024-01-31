import React from "react";
import X from "../assets/X.svg";
import Uploadicon from "../assets/Upload.svg";
import PClip from "../assets/PClip.svg";
import Plus from "../assets/plus.svg";

const Upload = () => {
  const containerStyle = {
    position: "absolute",
    top: "90px",
    // padding: "0px 0px 0px 0px",
    width: "350px",
  };

  const box = {
    padding: "20px 25px 20px 25px",
  };
  const RadioPadding = {
    padding: "20px 25px",
  };
  const circle = {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "9px",
    top: "10px",
  };
  const UploadBox = {
    position: "absolute",
    top: "410px",
  };
  const SVGstyle = {
    backgroundColor: "#5253F1",
    borderRadius: "30px",
  };

  return (
    <div style={containerStyle} className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold">Tell us, whats wrong?</h1>
      <p className="text-sm font-light">
        Find our how much you can save today! Leave your{" "}
      </p>
      <p className="text-sm font-light">
        email to stay up to dae on the latest and hottest deals
      </p>

      <div className="relative flex min-h-screen justify-center overflow-hidden ">
        <div className="mx-auto max-w-md " style={box}>
          <ul>
            <fieldset>
              <div
                style={RadioPadding}
                className="mb-2.5 w-340 flex relative bg-white border rounded-lg py-5"
              >
                <input
                  style={circle}
                  type="radio"
                  id="software"
                  name="productOption"
                  value="software"
                />
                <label for="software" className="flex">
                  <img className="w-6 h-6" src={X} alt="" />
                  <h1 className="px-25">No I do not</h1>
                </label>
              </div>
              <div
                style={RadioPadding}
                className="mb-2.5 w-340 flex relative bg-white border rounded-lg py-5"
              >
                <input
                  style={circle}
                  type="radio"
                  id="audio"
                  name="productOption"
                  value="audio"
                />
                <label for="audio" className="flex">
                  <img className="w-6 h-6" src={PClip} alt="" />
                  <h1 className="px-25">Yes, on paper</h1>
                </label>
              </div>
              <div
                style={RadioPadding}
                className="mb-2.5 w-340 flex relative bg-white border rounded-lg py-5"
              >
                <input
                  style={circle}
                  type="radio"
                  id="camera"
                  name="productOption"
                  value="camera"
                />
                <label for="camera" className="flex">
                  <img className="w-6 h-6" src={Uploadicon} alt="" />
                  <h1 className="px-25">Yes, digitally</h1>
                </label>
              </div>
            </fieldset>
          </ul>
        </div>
      </div>
      {/* <div style={UploadBox} className="border  ">
        <div>
          <img src={Plus} style={SVGstyle} alt="" className="rounded-full" />
          <h1>Upload file</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Upload;
