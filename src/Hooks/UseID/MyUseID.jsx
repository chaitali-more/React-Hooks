import React, { useId } from 'react';

export const MyUseIDNotes = () => {
  return (
    <div className="demo-notes-card" style={{ marginTop: "2rem" }}>
      <div className="card-top-header">
        <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.15rem" }}>
          📘 Revision Notes: useId Hook
        </h3>
        <span className="badge-info">React 18 Accessibility Feature</span>
      </div>

      <p style={{ color: "#e2e8f0", lineHeight: "1.6", marginTop: "0.5rem" }}>
        <code>useId</code> is a React Hook introduced in <strong>React 18</strong> that generates a <strong>unique and stable ID</strong> for accessibility attributes such as <code>id</code> and <code>htmlFor</code>.
      </p>

      <div style={{ background: "rgba(99, 102, 241, 0.1)", borderLeft: "3px solid #818cf8", padding: "0.85rem 1rem", borderRadius: "6px", margin: "1rem 0" }}>
        <p style={{ margin: 0, color: "#c7d2fe", fontSize: "0.9rem", lineHeight: "1.5" }}>
          <strong>Key Definition:</strong> <code>useId</code> is a React Hook introduced in React 18 that generates unique, stable IDs for accessibility and form elements. It helps link elements like labels and inputs, prevents duplicate IDs, and works correctly with Server-Side Rendering (SSR).
        </p>
      </div>

      <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
        Code Example:
      </h4>
      <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`import React from 'react'
import { useId } from 'react'

const MyUseID = () => {
const id = useId();
  return (
    <div>
        <input type='checkbox' id={id}/>
        <label htmlFor={id}>Accept Terms and conditions</label>
    </div>
  )
}

export default MyUseID

// Will use different unique IDs for both instances:
   <MyUseID />
   <MyUseID />`}
      </pre>
    </div>
  );
};

const MyUseID = () => {
const id = useId();
  return (
    <div className="hook-demo-card" style={{ marginBottom: "1rem" }}>
      <div className="card-top-header">
        <span className="badge-info">useId Accessibility Hook</span>
        <span className="id-badge">Generated ID: {id}</span>
      </div>
      <div className="checkbox-label-container">
        <input className="checkbox-input" type='checkbox' id={id}/>
        <label htmlFor={id} style={{ cursor: "pointer", color: "#e2e8f0", fontWeight: "500" }}>
          Accept Terms and Conditions (Bound to input ID: <code style={{ color: "#818cf8" }}>{id}</code>)
        </label>
      </div>
    </div>
  )
}

export default MyUseID