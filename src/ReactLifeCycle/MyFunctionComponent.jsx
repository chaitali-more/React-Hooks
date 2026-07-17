import React, { useEffect, useState } from "react";

const MyFunctionComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect: Mounting");
    // only runs once
  }, []);

  useEffect(() => {
    console.log("useEffect: Re-render"); // whenever state update it will run

    return ()=>{
      console.log("Removed Component from DOM");
      
    }
  }, [count]);

  return (
    <div>
      <h1>MyFunctionComponent</h1>
      <h4>Count: {count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default MyFunctionComponent;
