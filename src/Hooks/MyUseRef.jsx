import React, { useEffect, useRef, useState } from "react";

const MyUseRef = () => {
  // State: Stores input value and re-renders the component when updated
  const [name, setName] = useState("");

  // useRef: Stores a value without causing a re-render
  // Used here to count how many times the component renders
  const count = useRef(0);

  // useRef: Used to access the actual DOM element (input)
  const inpEle = useRef("");

  // Current value stored inside the ref
  console.log(count.current);

  // Runs after every render (no dependency array)
  useEffect(() => {
    // Increase render count
    // Updating useRef DOES NOT trigger another render
    count.current = count.current + 1;
  });

  // Function to access and modify the input element directly
  const handleClick = () => {
    console.log(inpEle.current);

    // Change input width
    inpEle.current.style.width = "300px";

    // Change text color
    inpEle.current.style.color = "red";

    // Change background color
    inpEle.current.style.background = "yellow";

    // Place cursor inside the input
    inpEle.current.focus();
  };

  /*
    If we use useState instead of useRef

    const [count, setCount] = useState(0);

    useEffect(() => {
      setCount(count + 1);
    }, [count]);

    Why Infinite Loop?

    1. Component renders.
    2. useEffect runs.
    3. setCount updates state.
    4. State update causes re-render.
    5. count changes.
    6. Dependency [count] changes.
    7. useEffect runs again.
    8. Loop continues forever.

    State update -> Re-render -> Effect runs -> State update -> Infinite Loop

    useRef avoids this because updating ref.current
    DOES NOT trigger a re-render.
  */

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
      {/* Interactive Demo Card */}
      <div className="hook-demo-card">
        <div className="card-top-header">
          <span className="badge-info">useRef Interactive Demo</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div className="form-field-group">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.95rem" }}>
              Enter Name (Updates state & triggers render):
            </label>
            <input
              type="text"
              className="custom-input"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={inpEle} // Reference to DOM element
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ padding: "1rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>useState (triggers re-render):</span>
              <h4 style={{ fontSize: "1.2rem", color: "#60a5fa", marginTop: "0.25rem", marginBottom: 0 }}>Name: {name || "(empty)"}</h4>
            </div>

            <div style={{ padding: "1rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>useRef Render Count (no re-render):</span>
              <h4 style={{ fontSize: "1.2rem", color: "#fbbf24", marginTop: "0.25rem", marginBottom: 0 }}>Render Count: {count.current}</h4>
            </div>
          </div>

          <div className="btn-group">
            <button className="custom-btn custom-btn-primary" onClick={handleClick}>
              🎯 Target Input (Manipulate DOM)
            </button>
          </div>
        </div>
      </div>

      {/* Revision Notes Card */}
      <div className="demo-notes-card">
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.2rem" }}>
            💡 Revision Notes: useRef Hook
          </h3>
          <span className="badge-info">Core Hook</span>
        </div>

        {/* Quick Intro */}
        <div style={{ marginTop: "1rem" }}>
          <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            <strong>One-Line Summary: </strong>
            <span style={{ color: "#38bdf8" }}>
              <code>useRef</code> is used to access DOM elements and store mutable values without causing the component to re-render.
            </span>
          </p>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li><code>useRef</code> allows us to directly access DOM Elements.</li>
            <li>Ideal for creating mutable variables which will not re-render the component when updated.</li>
          </ul>
        </div>

        {/* What is useRef */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>❓ What is <code>useRef</code>?</h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li><code>useRef</code> is a React Hook that stores a mutable value.</li>
            <li>Updating a <code>useRef</code> value <strong>does not re-render</strong> the component.</li>
            <li>It keeps the same value between renders.</li>
          </ul>
        </div>

        {/* Syntax */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>💻 Syntax</h4>
          <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "0.75rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`const ref = useRef(initialValue);`}
          </pre>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            Access the stored value using <code>ref.current</code>.
          </p>
        </div>

        {/* Uses of useRef */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>🎯 Uses of <code>useRef</code></h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <h5 style={{ color: "#818cf8", fontSize: "0.95rem", margin: "0 0 0.5rem 0" }}>1. Access DOM Elements</h5>
              <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
                <li>Directly access HTML elements.</li>
                <li>Focus an input.</li>
                <li>Change styles dynamically.</li>
                <li>Scroll to an element.</li>
                <li>Measure element size or position.</li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: "#f472b6", fontSize: "0.95rem", margin: "0 0 0.5rem 0" }}>2. Store Mutable Values</h5>
              <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
                <li>Store values without causing a re-render.</li>
                <li>Store previous state or prop values.</li>
                <li>Count component renders.</li>
                <li>Store timer IDs (<code>setTimeout</code>, <code>setInterval</code>).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Points */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>⭐ Important Points</h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li>Updating <code>ref.current</code> does <strong>not</strong> trigger a re-render.</li>
            <li>The value persists between renders.</li>
            <li>Used when you need to store data that doesn't affect the UI.</li>
            <li>Can hold any data type (number, string, object, array, DOM element, etc.).</li>
          </ul>
        </div>

        {/* useRef vs useState */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.75rem" }}>⚖️ <code>useRef</code> vs <code>useState</code></h4>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", color: "#e2e8f0" }}>
              <thead>
                <tr style={{ background: "rgba(99, 102, 241, 0.15)", borderBottom: "1px solid var(--border-color)", textAlign: "left" }}>
                  <th style={{ padding: "0.6rem 0.8rem" }}>Feature</th>
                  <th style={{ padding: "0.6rem 0.8rem" }}><code>useRef</code></th>
                  <th style={{ padding: "0.6rem 0.8rem" }}><code>useState</code></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>Re-render</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>❌ Does not re-render the component.</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>✅ Re-renders the component when updated.</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>Usage</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Used for DOM access and mutable values.</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Used for data that should update the UI.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic & Multiple Elements Ref Warning */}
        <div style={{ background: "rgba(244, 63, 94, 0.1)", borderLeft: "4px solid #f43f5e", padding: "1.25rem", borderRadius: "8px", marginTop: "1.75rem" }}>
          <h4 style={{ color: "#fda4af", fontSize: "0.95rem", marginTop: 0, marginBottom: "0.5rem" }}>
            ⚠️ Important Ref Usage with Multiple Elements
          </h4>
          <p style={{ color: "#ffe4e6", fontSize: "0.9rem", margin: 0, lineHeight: "1.5" }}>
            You <strong>cannot use the same <code>ref</code> object for multiple elements</strong> if you want to access each one separately.
          </p>
          <ul style={{ paddingLeft: "1.25rem", color: "#fda4af", fontSize: "0.85rem", marginTop: "0.5rem", marginBottom: 0, lineHeight: "1.6" }}>
            <li><strong>One element &rarr; One ref</strong></li>
            <li><strong>Many fixed elements &rarr; Multiple refs or an object</strong></li>
            <li><strong>Many dynamic elements (<code>.map()</code>) &rarr; Array of refs</strong></li>
          </ul>
        </div>

        {/* Interview Points */}
        <div style={{ background: "rgba(16, 185, 129, 0.1)", borderLeft: "4px solid #10b981", padding: "1.25rem", borderRadius: "8px", marginTop: "1.5rem" }}>
          <h4 style={{ color: "#a7f3d0", fontSize: "0.95rem", marginTop: 0, marginBottom: "0.5rem" }}>
            🎓 Interview Keypoints Checklist
          </h4>
          <ul style={{ paddingLeft: "1.25rem", color: "#d1fae5", fontSize: "0.85rem", margin: 0, lineHeight: "1.6" }}>
            <li><code>useRef</code> is used to access DOM elements and store mutable values.</li>
            <li>The value is stored in <code>ref.current</code>.</li>
            <li>Updating <code>ref.current</code> does not cause a re-render.</li>
            <li><code>useRef</code> persists the same value across renders.</li>
          </ul>
        </div>

        {/* Code Snippet */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>📄 Code Example</h4>
          <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`import React, { useEffect, useRef, useState } from "react";

const MyUseRef = () => {
  // State: Stores input value and re-renders the component when updated
  const [name, setName] = useState("");

  // useRef: Stores a value without causing a re-render
  // Used here to count how many times the component renders
  const count = useRef(0);

  // useRef: Used to access the actual DOM element (input)
  const inpEle = useRef("");

  // Current value stored inside the ref
  console.log(count.current);

  // Runs after every render (no dependency array)
  useEffect(() => {
    // Increase render count
    // Updating useRef DOES NOT trigger another render
    count.current = count.current + 1;
  });

  // Function to access and modify the input element directly
  const handleClick = () => {
    console.log(inpEle.current);

    // Change input width
    inpEle.current.style.width = "300px";

    // Change text color
    inpEle.current.style.color = "red";

    // Change background color
    inpEle.current.style.background = "yellow";

    // Place cursor inside the input
    inpEle.current.focus();
  };

  /*
    If we use useState instead of useRef

    const [count, setCount] = useState(0);

    useEffect(() => {
      setCount(count + 1);
    }, [count]);

    Why Infinite Loop?

    1. Component renders.
    2. useEffect runs.
    3. setCount updates state.
    4. State update causes re-render.
    5. count changes.
    6. Dependency [count] changes.
    7. useEffect runs again.
    8. Loop continues forever.

    State update -> Re-render -> Effect runs -> State update -> Infinite Loop

    useRef avoids this because updating ref.current
    DOES NOT trigger a re-render.
  */

  return (
    <div>
      <h3>My useRef Hook</h3>

      {/* Input element */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inpEle} // Reference to DOM element
      />

      {/* State value */}
      <h4>Name: {name}</h4>

      {/* Render count stored using useRef */}
      <h4>Render Count: {count.current}</h4>

      {/* Access input using useRef */}
      <button onClick={handleClick}>Target Input</button>
    </div>
  );
};

export default MyUseRef;`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MyUseRef;