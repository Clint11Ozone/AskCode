import React from "react";

function NameInputComponent({ firstName, setFirstName, lastName, setLastName }) {
  return (
    <div className="items-center flex flex-col">
      <form className="flex gap-2.5">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className="p-5 border rounded-lg w-[165px] h-[59px] inputClass"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          className="p-5 border rounded-lg w-[165px] h-[59px] inputClass"
          required
        />
      </form>
    </div>
  );
}


export default NameInputComponent;