import React, { useContext, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import { userContext, useUserDetails } from "../../context/UserContext";

const Parent = () => {
  // const [name, setName] = useState("");
  // const {name,setName} = useContext(userContext);
const {name,setName} = useUserDetails()

  const inputRef = useRef("");
  console.log(inputRef.current);

  return (
    <div className="hook-demo-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
        <span className="badge-info">Context API & forwardRef Demo</span>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Context Provider: <strong style={{ color: "#c084fc" }}>UserContextProvider</strong></span>
      </div>

      <div style={{ padding: "1.25rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "1px solid var(--border-color)", margin: "0.5rem 0" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Global State from `useUserDetails()` Context:</span>
        <h3 style={{ fontSize: "1.5rem", color: "#818cf8", marginTop: "0.25rem" }}>Name: {name || "(empty)"}</h3>
      </div>

      <div className="form-field-group">
        <label>Controlled Input via forwardRef (CustomInput):</label>
        <CustomInput ref={inputRef} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="btn-group" style={{ justifyContent: "flex-start", marginTop: "0.5rem" }}>
        <button
          className="custom-btn custom-btn-primary"
          onClick={()=>{inputRef.current.focusInput()}}
        >
          🎯 Focus Input (ref.focusInput)
        </button>

        <button
          className="custom-btn custom-btn-danger"
          onClick={()=>{inputRef.current.clearInput()}}
        >
          🧹 Clear Input (ref.clearInput)
        </button>
      </div>
    </div>
  );
};

export default Parent;
