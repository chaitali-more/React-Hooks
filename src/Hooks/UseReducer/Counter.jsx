import React, { useReducer } from 'react'

const initialState = {count:0}

function reducer(state, action){
    switch (action.type){
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        case "reset":
            return {count: 0}
        default:
            return state
    }
}

const Counter = () => {
 const [state, dispatch] =   useReducer(reducer, initialState);
  return (
    <div className="hook-demo-card counter-wrapper">
        <span className="badge-info">useReducer State Management</span>
        <h1 className="counter-value-display">Count: {state.count}</h1>
        <div className="btn-group">
          <button
            className="custom-btn custom-btn-primary"
            onClick={()=>{
                dispatch({type: "increment"})
            }}
          >
              + Increment
          </button>
          <button
            className="custom-btn"
            onClick={()=>{
                dispatch({type: "decrement"})
            }}
          >
              - Decrement
          </button>
          <button
            className="custom-btn custom-btn-danger"
            onClick={()=>{
                dispatch({type: "reset"})
            }}
          >
              ↺ Reset
          </button>
        </div>

        {/* Educational Revision Notes */}
        <div className="demo-notes-card" style={{ marginTop: "2rem", width: "100%", textAlign: "left" }}>
          <div className="card-top-header">
            <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.15rem" }}>
              📘 Revision Notes: useReducer Counter
            </h3>
            <span className="badge-info">State Management</span>
          </div>

          <div style={{ margin: "1rem 0" }}>
            <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.35rem" }}>
              What is <code>useReducer</code>?
            </h4>
            <ul>
              <li>🧮 Used to manage <strong>complex state logic</strong>.</li>
              <li>🔄 Good alternative to <code>useState</code> when state has <strong>multiple actions</strong>.</li>
              <li>⚛️ Think of it as a <strong>mini Redux</strong> inside a component.</li>
            </ul>
          </div>

          <div style={{ margin: "1.25rem 0" }}>
            <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.35rem" }}>
              Syntax:
            </h4>
            <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "0.75rem 1rem", borderRadius: "8px", color: "#818cf8", fontSize: "0.85rem", overflowX: "auto" }}>
              const [state, dispatch] = useReducer(reducer, initialState);
            </pre>
            <ul style={{ marginTop: "0.5rem" }}>
              <li><strong>state</strong> → Current state value.</li>
              <li><strong>dispatch</strong> → Function to send an action object.</li>
              <li><strong>reducer</strong> → Pure function that decides how state changes based on action.</li>
              <li><strong>initialState</strong> → Starting value of state.</li>
            </ul>
          </div>

          <div style={{ margin: "1.25rem 0" }}>
            <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.35rem" }}>
              Key Terms:
            </h4>
            <ul>
              <li><strong>State</strong> → Current component data.</li>
              <li><strong>Action</strong> → Object describing what happened (e.g. <code>{"{ type: 'increment' }"}</code>).</li>
              <li><strong>Dispatch</strong> → Sends action to reducer.</li>
              <li><strong>Reducer</strong> → Updates state based on action.type.</li>
              <li><strong>Initial State</strong> → Starting state value.</li>
            </ul>
          </div>

          <div style={{ margin: "1.25rem 0" }}>
            <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.35rem" }}>
              When to use <code>useReducer</code>?
            </h4>
            <ul>
              <li>✅ Multiple state updates</li>
              <li>✅ Complex state logic</li>
              <li>✅ Many actions (Add, Delete, Edit, Reset)</li>
              <li>✅ State depends on previous state</li>
            </ul>
          </div>

          <div style={{ background: "rgba(99, 102, 241, 0.1)", borderLeft: "3px solid #818cf8", padding: "0.85rem 1rem", borderRadius: "6px", margin: "1.25rem 0" }}>
            <h5 style={{ margin: "0 0 0.35rem 0", color: "#a5b4fc", fontSize: "0.85rem", textTransform: "uppercase" }}>
              💡 Interview One-Liner:
            </h5>
            <p style={{ margin: 0, color: "#c7d2fe", fontSize: "0.9rem", lineHeight: "1.5" }}>
              "<code>useReducer</code> is a React Hook used to manage complex state by updating it through actions sent to a reducer function. It is useful when state logic becomes more complex than what <code>useState</code> can comfortably handle."
            </p>
          </div>

          <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
            Code Implementation Example:
          </h4>
          <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`import React, { useReducer } from 'react'

const initialState = {count:0}

function reducer(state, action){
    switch (action.type){
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        case "reset":
            return {count: 0}
        default:
            return state
    }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>Count is {state.count}</h1>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  )
}`}
          </pre>
        </div>
    </div>
  )
}

export default Counter