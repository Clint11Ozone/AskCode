import React, { useState, useEffect } from "react";

// Define the child component, NameInputComponent, that handles the input fields
function NameInputComponent({ firstName, setFirstName, lastName, setLastName }) {
  useEffect(() => {
    localStorage.setItem('firstName', JSON.stringify(firstName));
    localStorage.setItem('lastName', JSON.stringify(lastName));
  }, [firstName, lastName]);

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

// Define the parent component, ParentComponent, that manages state and handles initialization
function ParentComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const storedFirstName = JSON.parse(localStorage.getItem('firstName'));
    const storedLastName = JSON.parse(localStorage.getItem('lastName'));
    if (storedFirstName) setFirstName(storedFirstName);
    if (storedLastName) setLastName(storedLastName);
  }, []);

  return <NameInputComponent 
           firstName={firstName} 
           setFirstName={setFirstName} 
           lastName={lastName} 
           setLastName={setLastName} 
         />;
}

export default ParentComponent;
