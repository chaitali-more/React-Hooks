import React, { useContext, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import { userContext, useUserDetails } from "../../context/UserContext";

const Parent = () => {
  // const [name, setName] = useState("");
  // const {name,setName} = useContext(userContext);
  const {name,setName} = useUserDetails();

  const inputRef = useRef("");
  console.log(inputRef.current);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
      {/* Interactive Demo Card */}
      <div className="hook-demo-card">
        <div className="card-top-header">
          <span className="badge-info">Context API & forwardRef Demo</span>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Context Provider: <strong style={{ color: "#c084fc" }}>UserContextProvider</strong>
          </span>
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
            onClick={() => { inputRef.current.focusInput(); }}
          >
            🎯 Focus Input (ref.focusInput)
          </button>

          <button
            className="custom-btn custom-btn-danger"
            onClick={() => { inputRef.current.clearInput(); }}
          >
            🧹 Clear Input (ref.clearInput)
          </button>
        </div>
      </div>

      {/* Revision Notes Card */}
      <div className="demo-notes-card">
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.2rem" }}>
            💡 Revision Notes: forwardRef & useImperativeHandle
          </h3>
          <span className="badge-info">Advanced Ref APIs</span>
        </div>

        {/* Section 1: forwardRef */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.4rem" }}>
            🔗 React.forwardRef API
          </h4>
          <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "0.75rem" }}>
            <code>forwardRef</code> is a React API that lets a parent component pass a <code>ref</code> through a custom component to one of its child DOM elements.
          </p>
          
          <div style={{ background: "rgba(99, 102, 241, 0.1)", borderLeft: "4px solid #818cf8", padding: "0.75rem 1rem", borderRadius: "6px", margin: "1rem 0" }}>
            <strong style={{ color: "#a5b4fc" }}>Remember: </strong>
            <span style={{ color: "#e2e8f0", fontSize: "0.9rem" }}>
              <code>forwardRef</code> simply <strong>forwards the ref from the parent to the child DOM element.</strong>
            </span>
          </div>

          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            It is commonly used when the parent needs to access DOM methods like <code>focus()</code>, <code>blur()</code>, or <code>scrollIntoView()</code> on an element inside a reusable child component.
          </p>
        </div>

        {/* With vs Without forwardRef */}
        <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div style={{ background: "rgba(239, 68, 68, 0.05)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(239, 68, 68, 0.15)" }}>
            <h5 style={{ color: "#fca5a5", margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>❌ Without forwardRef</h5>
            <pre style={{ background: "#090d16", padding: "0.5rem", borderRadius: "4px", fontSize: "0.8rem", color: "#f87171" }}>
{`<CustomInput ref={inputRef} />`}
            </pre>
            <p style={{ fontSize: "0.8rem", color: "#fca5a5", marginTop: "0.5rem", marginBottom: 0 }}>
              Does not work because <code>ref</code> cannot be attached directly to a custom component instance.
            </p>
          </div>

          <div style={{ background: "rgba(16, 185, 129, 0.05)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.15)" }}>
            <h5 style={{ color: "#a7f3d0", margin: "0 0 0.5rem 0", fontSize: "0.9rem" }}>✅ With forwardRef</h5>
            <pre style={{ background: "#090d16", padding: "0.5rem", borderRadius: "4px", fontSize: "0.8rem", color: "#34d399" }}>
{`const CustomInput = forwardRef((props, ref) => (
  <input ref={ref} />
));`}
            </pre>
            <p style={{ fontSize: "0.8rem", color: "#a7f3d0", marginTop: "0.5rem", marginBottom: 0 }}>
              The parent can now access and manipulate the underlying <code>&lt;input&gt;</code> element directly.
            </p>
          </div>
        </div>

        {/* Why use forwardRef & The underscore parameter */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>🤔 Why use <code>forwardRef</code>?</h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li>Focus an input field.</li>
            <li>Clear an input field's contents.</li>
            <li>Access standard DOM methods (<code>focus()</code>, <code>blur()</code>, <code>scrollIntoView()</code>).</li>
            <li>Create reusable components that still expose their DOM element.</li>
          </ul>
        </div>

        <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "1.25rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)", marginTop: "1.5rem" }}>
          <h4 style={{ color: "#fb7185", fontSize: "0.95rem", marginTop: 0, marginBottom: "0.5rem" }}>
            ❓ Q. What does <code>_</code> mean in <code>{"forwardRef((_, ref) => {})"}</code>?
          </h4>
          <p style={{ color: "var(--text-main)", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>
            <code>_</code> is simply a placeholder for the first parameter (<code>props</code>). It indicates that the component receives props but does not use them. The second parameter, <code>ref</code>, is the forwarded ref from the parent.
          </p>
          <p style={{ color: "#fda4af", fontSize: "0.88rem", marginTop: "0.5rem", marginBottom: 0, fontWeight: "600" }}>
            Here, <code>_</code> means "I don't need the <code>props</code> parameter."
          </p>
        </div>

        {/* Code Snippet for Pure forwardRef */}
        <div style={{ marginTop: "1.5rem" }}>
          <h5 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>📄 Code Example: Pure <code>forwardRef</code> (Direct Access)</h5>
          <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`// Parent Component
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
      <button onClick={() => { inputRef.current.focus(); }}>
        Focus Input
      </button>
      <button onClick={() => { inputRef.current.value = ""; }}>
        Clear Input
      </button>
    </>
  );
};

export default Parent;

// Custom Input Component
import React, { forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  console.log(props, ref);
  return (
    <>
      <input type='text' placeholder='name' ref={ref} onChange={props.onChange}/>
    </>
  );
});

export default CustomInput;`}
          </pre>
        </div>

        {/* Section 2: useImperativeHandle */}
        <div style={{ marginTop: "2.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.4rem" }}>
            🛡️ useImperativeHandle Hook
          </h4>
          <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "0.75rem" }}>
            <code>useImperativeHandle</code> is a React Hook used <strong>with <code>forwardRef</code></strong> to control <strong>what the parent component can access</strong> through a <code>ref</code>.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1rem 0" }}>
            <div style={{ padding: "1rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <span style={{ fontSize: "0.8rem", color: "#818cf8", fontWeight: "600", display: "block" }}>1. forwardRef Role:</span>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: "0.25rem 0 0 0" }}>Passes the ref down to the child component.</p>
            </div>
            <div style={{ padding: "1rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <span style={{ fontSize: "0.8rem", color: "#f472b6", fontWeight: "600", display: "block" }}>2. useImperativeHandle Role:</span>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: "0.25rem 0 0 0" }}>Decides what methods/values the parent can use through that ref.</p>
            </div>
          </div>

          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            Instead of giving the parent direct, unchecked access to the DOM element (which breaks encapsulation), it allows you to expose only specific custom methods, such as <code>focusInput()</code> or <code>clearInput()</code>, keeping the component secure and modular.
          </p>
        </div>

        {/* Why use useImperativeHandle */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>🤔 Why use it?</h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li>Create custom methods for the parent to invoke.</li>
            <li>Hide the actual internal DOM element from external manipulation.</li>
            <li>Expose only what is absolutely needed.</li>
          </ul>
        </div>

        {/* Code Snippet for useImperativeHandle */}
        <div style={{ marginTop: "1.5rem" }}>
          <h5 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>📄 Code Example: forwardRef + useImperativeHandle (Controlled Exposure)</h5>
          <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`// Custom Input Component exposing specific methods
import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputEl = useRef();
  
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputEl.current.focus();
    },
    clearInput: () => {
      inputEl.current.value = "";
    }
  }));

  return (
    <>
      <input type='text' placeholder='name' ref={inputEl} onChange={props.onChange}/>
    </>
  );
});

export default CustomInput;

// Parent Component
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
      <button onClick={() => { inputRef.current.focusInput(); }}>
        Focus
      </button>
      <button onClick={() => { inputRef.current.clearInput(); }}>
        Clear
      </button>
    </>
  );
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Parent;

