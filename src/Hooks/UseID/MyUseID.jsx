import React from 'react'
import { useId } from 'react'

const MyUseID = () => {
const id = useId();
  return (
    <div className="hook-demo-card" style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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