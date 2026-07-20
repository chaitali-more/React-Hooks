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
      <div className="card-top-header">
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

      {/* Educational Revision Notes */}
      <div className="demo-notes-card" style={{ marginTop: "2rem" }}>
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.15rem" }}>
            📘 Revision Notes: useReducer for Forms
          </h3>
          <span className="badge-info">Form State Management</span>
        </div>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginTop: "1rem", marginBottom: "0.5rem" }}>
          Why use <code>useReducer</code> for forms?
        </h4>
        <ul>
          <li>📋 Best when a form has <strong>multiple input fields</strong>.</li>
          <li>📦 Keeps all form data in <strong>one state object</strong>.</li>
          <li>⚡ Updates fields using <strong>actions</strong> instead of multiple <code>useState</code> hooks.</li>
        </ul>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
          🔄 Execution Flowchart:
        </h4>
        <div style={{ background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.2)", padding: "1rem", borderRadius: "8px", margin: "0.5rem 0 1.25rem 0" }}>
          <pre style={{ margin: 0, color: "#c7d2fe", fontSize: "0.85rem", lineHeight: "1.5", fontFamily: "monospace", overflowX: "auto" }}>
{`User types in input
        ↓
handleChange()
        ↓
dispatch({
   type: "updateField",
   field,
   value
})
        ↓
Reducer receives action
        ↓
Updates only that field
        ↓
Returns new state
        ↓
React re-renders component
        ↓
Input shows updated value`}
          </pre>
        </div>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          Code Implementation Example:
        </h4>
        <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`import React, { useReducer } from "react";

// Initial state of the form
const initialState = {
  name: "",
  email: "",
  age: "",
};

// Reducer function: receives current state & action, returns updated state
function reducer(state, actions) {
  switch (actions.type) {

    // Update a specific field dynamically
    case "updateField":
      return {
        ...state,                       // Keep existing values
        [actions.field]: actions.value, // Update only changed field
      };

    // Reset the form back to initial values
    case "reset":
      return initialState;

    default:
      return state;
  }
}

const User = () => {
  // state -> Current form data
  // dispatch -> Sends actions to the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Data", state);
  };

  // Runs whenever user types in an input
  const handleChange = (e) => {
    dispatch({
      type: "updateField",     // Action type
      field: e.target.name,    // name / email / age
      value: e.target.value,   // User entered value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={state.name} onChange={handleChange} />
      <input type="email" name="email" value={state.email} onChange={handleChange} />
      <input type="number" name="age" value={state.age} onChange={handleChange} />
      <button>Submit</button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </form>
  );
};`}
        </pre>
      </div>
    </div>
  );
};

export default User;
