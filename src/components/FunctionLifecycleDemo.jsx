import React, { useState } from "react";
import MyFunctionComponent from "../ReactLifeCycle/MyFunctionComponent";

const FunctionLifecycleDemo = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="demo-wrapper-lifecycle">
      <div className="toggle-controls">
        <button onClick={() => setShow(!show)}>
          {show ? "Unmount Component" : "Mount Component"}
        </button>
        <div className="toggle-status-group">
          <span className="toggle-status">Status:</span>
          <span className={`status-badge ${show ? "active" : "inactive"}`}></span>
          <span className="toggle-status">{show ? "Mounted (Active)" : "Unmounted (Removed)"}</span>
        </div>
      </div>
      
      {show ? (
        <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
          <MyFunctionComponent />
        </div>
      ) : (
        <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)", fontStyle: "italic" }}>
          Component has been unmounted. Check console logs for "Removed Component from DOM".
        </div>
      )}
    </div>
  );
};

export default FunctionLifecycleDemo;
