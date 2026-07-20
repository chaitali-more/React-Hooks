import React, { useEffect, useLayoutEffect, useState } from "react";

const MyUseEffect = () => {
  console.log("Rendering...");

  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);

  // Runs before the browser paints
  useLayoutEffect(() => {
    console.log("useLayoutEffect - Height");
    setHeight(200);
  }, []);

  // Runs after the browser paints
  useEffect(() => {
    console.log("useEffect - Width");
    setWidth(600);
  }, []);

  return (
    <div
      style={{
        width: `${width}px`,
        maxWidth: "100%",
        height: `${height}px`,
        background: "#3b82f6",
        borderRadius: "8px",
        color: "white",
        textAlign: "center",
        padding: "20px",
        transition: "width 1s",
        boxSizing: "border-box"
      }}
    >
      My useEffect & useLayoutEffect
    </div>
  );
};

export default MyUseEffect;