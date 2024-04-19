import React, { useState, useRef } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const FUp = () => {
  const inputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    } else {
      console.error("No file selected or files array is empty.");
    }
  };
  
  const onChooseFile = () => {
    inputRef.current.click();
  };

  const onRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <>
      <div className="file-upload w-[288px] h-[123px] border">
        <form className="circle-container flex justify-center items-center gap-[15px] pt-[15px]">
          {/* Trigger file selection when clicking either the circle or the link */}
          <div
            className="circle-content bg-[#5253F1] rounded-full w-[44px] h-[44px] flex justify-center items-center"
            onClick={onChooseFile}
          >
            <img
              src="/assets/icons/plus.svg"
              alt="plus-icon"
              className="icon w-[24px] h-[24px]"
            />
          </div>
          <input
            type="file"
            id="fileInput"
            ref={inputRef}
            className="input-field"
            hidden // Keep the input hidden
            onChange={handleFileChange}
          />
          <a className="file-link" href="#" onClick={onChooseFile}>
            Upload File
          </a>
        </form>
      </div>
      {selectedFile && (
        <section className="flex items-center gap-4">
          <img src="assets/icons/uploaded.svg" alt="Uploaded file icon" />
          <span className="flex gap-2">
            Uploaded:{" "}
            <span className="text-[#989898]">{selectedFile.name}</span>
          </span>
        </section>
      )}
    </>
  );
};

export default FUp;
