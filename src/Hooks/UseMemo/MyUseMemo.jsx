import React, { useCallback, useMemo, useState, useTransition } from "react";
import PrintTable from "./PrintTable";

function expensiveFunction(number) {
  console.log("Calculating...");
  for (let a = 0; a < 1000000000; a++) {}
  return number * 3;
}

const MyUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
const [pending, startTransition] = useTransition();

  const cssStyle = {
    backgroundColor: dark ? "rgba(30, 27, 75, 0.75)" : "rgba(17, 25, 40, 0.65)",
    border: dark ? "1px solid rgba(129, 140, 248, 0.4)" : "1px solid var(--border-color)",
    padding: "2rem",
    borderRadius: "16px",
    backdropFilter: "blur(12px)",
    boxShadow: "var(--card-shadow)",
    transition: "all 0.3s ease",
  };

  const calculateTable = useCallback(()=>{
    return [number*2, number*3, number*4, number*5]
  }, [number])

  const memoCalculation = useMemo(()=>{
    return expensiveFunction(number);
  },[number])

  return (
    <div className="memo-container" style={cssStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <span className="badge-info">useMemo & useCallback Optimization</span>
        <button className="custom-btn" onClick={() => setDark(!dark)}>
          Theme Mode: {dark ? "Indigo Glow" : "Dark Slate"}
        </button>
      </div>

      {pending ? (
        <h4 style={{ color: "#818cf8" }}>Calculating expensive value...</h4>
      ) : (
        <div style={{ margin: "1rem 0" }}>
          <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Memoized Expensive Calculation Result (number x 3):</span>
          <h2 style={{ fontSize: "2rem", color: "#60a5fa", marginTop: "0.25rem" }}>{memoCalculation}</h2>
        </div>
      )}
     
      <div className="form-field-group" style={{ maxWidth: "300px", margin: "1rem 0" }}>
        <label>Enter Calculation Input Number:</label>
        <input
          className="custom-input"
          type="number"
          value={number}
          onChange={(e) => 
            startTransition(()=>setNumber(e.target.valueAsNumber || 0))
          }
        />
      </div>

      <PrintTable calculateTable={calculateTable}/>
    </div>
  );
};

export default MyUseMemo;
