import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  age: "",
};

function reducer(state, actions) {
  switch (actions.type) {
    case "updateField":
      return {
        ...state,
        [actions.field]: actions.value,
      };
    case "reset":
      return initialState;

    default:
      state;
  }
}
const User = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", state)
  };

  const handleChange = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.name,
      value: e.target.value,
    });
  };
  return (
    <div className="hook-demo-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <span className="badge-info">useReducer Form Handling</span>
      </div>
      <form onSubmit={handleSubmit} className="form-layout">
        <div className="form-field-group">
          <label>Full Name</label>
          <input
            className="custom-input"
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-field-group">
          <label>Email Address</label>
          <input
            className="custom-input"
            type="email"
            name="email"
            value={state.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-field-group">
          <label>Age</label>
          <input
            className="custom-input"
            type="number"
            name="age"
            value={state.age}
            placeholder="Enter Age"
            onChange={handleChange}
          />
        </div>
        <div className="btn-group" style={{ justifyContent: "flex-start", marginTop: "0.5rem" }}>
          <button className="custom-btn custom-btn-primary">Submit Form</button>
          <button
            type="button"
            className="custom-btn custom-btn-danger"
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            Reset Form
          </button>
        </div>
      </form>

      <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
        <h4 style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Live Form State (reducer output):</h4>
        <pre style={{ color: "#a5b4fc", fontSize: "0.85rem", margin: 0, fontFamily: "monospace" }}>
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default User;
