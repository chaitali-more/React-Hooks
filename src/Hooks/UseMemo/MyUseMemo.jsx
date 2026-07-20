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
      <div className="card-top-header">
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

      <div className="demo-notes-card" style={{ marginTop: "2rem" }}>
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.15rem" }}>
            📘 Revision Notes: useMemo & useCallback Hooks
          </h3>
          <span className="badge-info">Performance Optimization</span>
        </div>

        {/* 1. What is useMemo */}
        <div style={{ margin: "1rem 0" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "0.35rem" }}>
            1. What is <code>useMemo</code>?
          </h4>
          <p style={{ color: "#e2e8f0", lineHeight: "1.6" }}>
            <code>useMemo</code> is a React Hook that <strong>memoizes (caches) the result of an expensive calculation</strong>. It recalculates the value <strong>only when its dependencies change</strong>, improving performance by avoiding unnecessary calculations during re-renders.
          </p>

          <h5 style={{ color: "#818cf8", fontSize: "0.9rem", marginTop: "0.75rem", marginBottom: "0.35rem" }}>
            Why do we use <code>useMemo</code>?
          </h5>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
            <li>Without <code>useMemo</code>, an expensive function runs <strong>on every render</strong>, even if the value it depends on hasn't changed.</li>
            <li>With <code>useMemo</code>, React stores the previous result and returns it without recalculating until a dependency changes.</li>
          </ul>
        </div>

        {/* 2. What is useCallback */}
        <div style={{ margin: "1.5rem 0 1rem 0" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "0.35rem" }}>
            2. What is <code>useCallback</code>?
          </h4>
          <p style={{ color: "#e2e8f0", lineHeight: "1.6" }}>
            <code>useCallback</code> is a React Hook that memoizes (caches) a <strong>function instance</strong>. It returns the same function reference between renders until one of its dependencies changes.
          </p>

          <h5 style={{ color: "#818cf8", fontSize: "0.9rem", marginTop: "0.75rem", marginBottom: "0.35rem" }}>
            Why do we use <code>useCallback</code>?
          </h5>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
            <li>Normally, whenever a component re-renders, <strong>all functions are recreated</strong> with a new function reference.</li>
            <li>If a recreated function is passed to a child component as a prop, React sees a new prop reference and triggers child re-renders or re-runs <code>useEffect</code>.</li>
            <li>With <code>useCallback</code>, React stores the function and returns the <strong>same function reference</strong>, preventing unnecessary child re-renders.</li>
          </ul>
        </div>

        {/* Difference Table */}
        <div style={{ margin: "1.5rem 0" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "0.75rem" }}>
            ⚖️ Difference: <code>useMemo</code> vs <code>useCallback</code>
          </h4>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", color: "#e2e8f0" }}>
              <thead>
                <tr style={{ background: "rgba(99, 102, 241, 0.15)", borderBottom: "1px solid var(--border-color)", textAlign: "left" }}>
                  <th style={{ padding: "0.6rem 0.8rem" }}>Feature</th>
                  <th style={{ padding: "0.6rem 0.8rem" }}><code>useMemo</code></th>
                  <th style={{ padding: "0.6rem 0.8rem" }}><code>useCallback</code></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>Caches What?</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>The <strong>result value</strong> of a calculation</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>The <strong>function definition / instance</strong> itself</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>Returns</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Returned value of <code>fn()</code></td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>The function <code>fn</code></td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>Primary Purpose</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Avoid expensive calculations on every render</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Prevent unnecessary child re-renders via stable props</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Code Example */}
        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          Code Example (MyUseMemo.jsx & PrintTable.jsx):
        </h4>
        <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`import React, { useCallback, useMemo, useState } from "react";
import PrintTable from "./PrintTable";

function expensiveFunction(number) {
  console.log("Calculating...");
  for (let a = 0; a < 1000000000; a++) {}
  return number * 3;
}

const MyUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // useCallback returns a memoized function reference
  const calculateTable = useCallback(()=>{
      return [number*2, number*3, number*4, number*5]
  }, [number])

  // useMemo returns the memoized result of expensive calculation
  const memoCalculation = useMemo(()=>{
      return expensiveFunction(number);
  },[number])

  return (
    <div>
      <h4>Calculation: {memoCalculation}</h4>
      <input type="number" onChange={(e) => setNumber(e.target.valueAsNumber)} />
      <PrintTable calculateTable={calculateTable}/>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
};

// PrintTable.jsx
const PrintTable = ({ calculateTable }) => {
  const [row, setRow] = useState([]);
  useEffect(() => {
    console.log("Print Table");
    setRow(calculateTable);
  }, [calculateTable]);
  return (
    <div>
      {row.map((number, index) => <p key={index}>{number}</p>)}
    </div>
  );
};`}
        </pre>
      </div>
    </div>
  );
};

export default MyUseMemo;
