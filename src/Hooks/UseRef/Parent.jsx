import React, { useRef, useState } from "react";
import CustomInput from "./CustomInput";

const Parent = () => {
  const [name, setName] = useState("");
  const inputRef = useRef("");
  console.log(inputRef.current);

  return (
    <>
      <h4>Name: {name}</h4>
      <CustomInput ref={inputRef} onChange={(e) => setName(e.target.value)} />
      <button
      onClick={()=>{inputRef.current.focusInput()}}
      >Focus</button>

       <button
      onClick={()=>{inputRef.current.clearInput()}}
      >Clear</button>

      {/* <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus Input
      </button>
      <button
        onClick={() => {
          inputRef.current.value = "";
        }}
      >
        Clear Input
      </button> */}
    </>
  );
};

export default Parent;
