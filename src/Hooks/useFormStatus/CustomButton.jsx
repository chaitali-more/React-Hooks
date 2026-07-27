import React from "react";
import { useFormStatus } from "react-dom";

const CustomButton = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Logging in..." : "Login"}
      </button>
      <p>{data ? `Requesting... ${data.get("email")}` : ""}</p>
    </div>
  );
};

export default CustomButton;
