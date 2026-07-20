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
    </div>
  )
}

export default Counter