import React, { useState } from "react";

const MyStateComponent = () => {
  // State to store name (String)
  const [name, setName] = useState("Chaitali");

  // State to show/hide the name (Boolean)
  const [flag, setFlag] = useState(true);

  // State to store counter value (Number)
  const [count, setCount] = useState(0);

  // State to store multiple names (Array)
  const [names, setNames] = useState([]);

  // State to store user details (Object)
  const [user, setUser] = useState({});

  // Change the name
  const changeName = () => {
    setName("Chaitali More");
  };

  // Toggle between showing and hiding the name
  const toggleName = () => {
    setFlag(!flag);
  };

  // Increment counter
  const increment = () => {
    // Logs old value because state updates are asynchronous
    console.log(count);

    // Functional update
    // Each callback gets the latest updated value
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // Count increases by 2
  };

  // Decrement counter
  const decrement = () => {
    // Prevent counter from going below 0
    count > 0 && setCount(count - 1);
  };

  // Add name to array
  const addNames = (e) => {
    // Prevent page refresh
    e.preventDefault();

    // Add new object into existing array
    setNames([
      ...names, // Copy old array
      {
        id: Date.now(), // Unique id
        name: name, // Store current name
      },
    ]);

    // Clear textbox
    setName("");
  };

  // Submit user form
  const addUser = (e) => {
    // Prevent form refresh
    e.preventDefault();

    // Display user object in console
    console.log(user);

    // Clear only the HTML form inputs
    // This works because these are UNCONTROLLED inputs
    // (No value prop is used)
    // The user state remains unchanged.
    e.target.reset();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
      
      {/* Interactive Demo Container */}
      <div className="hook-demo-card">
        <div className="card-top-header">
          <span className="badge-info">useState Interactive Playground</span>
        </div>

        {/* Section 1: String & Boolean State */}
        <div style={{ padding: "1.25rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
          <h4 style={{ margin: "0 0 0.75rem 0", color: "#a5b4fc", fontSize: "0.95rem" }}>💬 String & Boolean State</h4>
          <h2 style={{ fontSize: "1.8rem", color: "#60a5fa", marginBottom: "1rem" }}>
            Hello {flag ? name : ""}
          </h2>
          <div className="btn-group">
            <button className="custom-btn custom-btn-primary" onClick={changeName}>
              🖊️ Change Name
            </button>
            <button className="custom-btn" onClick={toggleName}>
              👁️ Toggle Visibility
            </button>
          </div>
        </div>

        {/* Section 2: Number & Functional Updates */}
        <div style={{ padding: "1.25rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
          <h4 style={{ margin: "0 0 0.75rem 0", color: "#fca5a5", fontSize: "0.95rem" }}>🔢 Number State (Functional Updates +2)</h4>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <h2 className="counter-value-display" style={{ margin: 0, fontSize: "3rem" }}>{count}</h2>
            <div className="btn-group">
              <button className="custom-btn custom-btn-primary" onClick={increment}>
                ➕ Increment (+2)
              </button>
              <button className="custom-btn custom-btn-danger" onClick={decrement}>
                ➖ Decrement (-1)
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Arrays & Objects Form */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          
          {/* Form 1: Array State (Controlled Inputs) */}
          <div style={{ padding: "1.25rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <h4 style={{ margin: "0 0 0.75rem 0", color: "#34d399", fontSize: "0.95rem" }}>📚 Array State (Controlled Input)</h4>
            <form onSubmit={addNames} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <input
                className="custom-input"
                type="text"
                placeholder="Enter item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button className="custom-btn custom-btn-primary" style={{ width: "100%" }}>
                ➕ Add to List
              </button>
            </form>
            
            <ul style={{ marginTop: "1rem", maxHeight: "150px", overflowY: "auto", paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              {names.map((item) => (
                <li key={item.id} style={{ marginBottom: "0.35rem" }}>• {item.name}</li>
              ))}
            </ul>
          </div>

          {/* Form 2: Object State (Uncontrolled Inputs) */}
          <div style={{ padding: "1.25rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <h4 style={{ margin: "0 0 0.75rem 0", color: "#fb7185", fontSize: "0.95rem" }}>👤 Object State (Uncontrolled Inputs)</h4>
            <form onSubmit={addUser} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <input
                className="custom-input"
                type="text"
                placeholder="Enter First Name"
                onChange={(e) =>
                  setUser({
                    ...user,
                    firstName: e.target.value,
                  })
                }
              />
              <input
                className="custom-input"
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) =>
                  setUser({
                    ...user,
                    lastName: e.target.value,
                  })
                }
              />
              <input
                className="custom-input"
                type="number"
                placeholder="Enter Age"
                onChange={(e) =>
                  setUser({
                    ...user,
                    age: e.target.value,
                  })
                }
              />
              <button className="custom-btn custom-btn-primary" style={{ width: "100%" }}>
                💾 Save Profile
              </button>
            </form>

            <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "0.75rem" }}>
              <div><strong>First Name:</strong> {user.firstName || "-"}</div>
              <div><strong>Last Name:</strong> {user.lastName || "-"}</div>
              <div><strong>Age:</strong> {user.age || "-"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Revision Notes Card */}
      <div className="demo-notes-card">
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.2rem" }}>
            💡 Revision Notes: useState Hook
          </h3>
          <span className="badge-info">State Hook</span>
        </div>

        {/* Intro */}
        <div style={{ marginTop: "1rem" }}>
          <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            <strong>What is <code>useState</code>?</strong>
          </p>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li>React Hook used to store and update state in functional components.</li>
            <li>Can store different types of data, such as <strong>strings, numbers, booleans, arrays, and objects</strong>.</li>
            <li>When the state changes, React automatically <strong>re-renders</strong> the component and updates the UI.</li>
          </ul>
        </div>

        {/* State Updates */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>📝 How to Update State Variables</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <h5 style={{ color: "#818cf8", fontSize: "0.95rem", margin: "0 0 0.5rem 0" }}>1. Strings, Numbers, & Booleans</h5>
              <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
                <li><strong>Strings:</strong> Update values by passing a new string to the setter function.</li>
                <li><strong>Booleans:</strong> Toggle values between <code>true</code> and <code>false</code> (e.g. <code>setFlag(!flag)</code>).</li>
                <li><strong>Numbers (Functional updates):</strong> Use functional updates <code>prev =&gt; prev + 1</code> when the new state depends on the previous state.</li>
              </ul>
            </div>
            
            <div>
              <h5 style={{ color: "#f472b6", fontSize: "0.95rem", margin: "0 0 0.5rem 0" }}>2. Arrays & Objects (Spread Operator)</h5>
              <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
                <li><strong>Arrays:</strong> Use the spread operator (<code>...</code>) to clone and add items without mutating the original state array directly.</li>
                <li><strong>Objects:</strong> Use the spread operator to update specific properties while maintaining and copying the rest of the object.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Controlled vs Uncontrolled Components */}
        <div style={{ marginTop: "1.75rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>⚖️ Controlled vs Uncontrolled Components</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ background: "rgba(99, 102, 241, 0.05)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(99,102,241,0.15)" }}>
              <h5 style={{ color: "#a5b4fc", margin: "0 0.5rem 0.5rem 0", fontSize: "0.9rem" }}>🧠 Controlled Components</h5>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.5" }}>
                Inputs managed directly by React state. The state acts as the "single source of truth". Uses <code>value</code> and <code>onChange</code> props.
              </p>
            </div>
            
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <h5 style={{ color: "#e2e8f0", margin: "0 0.5rem 0.5rem 0", fontSize: "0.9rem" }}>⚙️ Uncontrolled Components</h5>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0, lineHeight: "1.5" }}>
                Inputs managed directly by the DOM. No <code>value</code> prop is used. You can query values using <code>ref</code> or capture values on submit.
              </p>
            </div>
          </div>
        </div>

        {/* Forms, Event Handling, and Keys */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>💡 Best Practices: Forms & Lists</h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <li>Use <code>e.preventDefault()</code> inside submit handlers to prevent the default page refresh behavior.</li>
            <li>Use <code>e.target.reset()</code> to clear input elements inside uncontrolled forms.</li>
            <li>Always provide a unique <code>key</code> prop (e.g. <code>key={"{item.id}"}</code>) when rendering dynamic lists using <code>map()</code> to help React efficiently identify, track, and update list items.</li>
          </ul>
        </div>

        {/* Code Snippet */}
        <div style={{ marginTop: "2rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>📄 Code Example</h4>
          <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`import React, { useState } from "react";

const MyStateComponent = () => {
  // State to store name (String)
  const [name, setName] = useState("Chaitali");

  // State to show/hide the name (Boolean)
  const [flag, setFlag] = useState(true);

  // State to store counter value (Number)
  const [count, setCount] = useState(0);

  // State to store multiple names (Array)
  const [names, setNames] = useState([]);

  // State to store user details (Object)
  const [user, setUser] = useState({});

  // Change the name
  const changeName = () => {
    setName("Chaitali More");
  };

  // Toggle between showing and hiding the name
  const toggleName = () => {
    setFlag(!flag);
  };

  // Increment counter
  const increment = () => {
    // Logs old value because state updates are asynchronous
    console.log(count);
    // setCount(count + 1);
    // setCount(count + 4); // count increases by 4 takes last one

    // Functional update
    // Each callback gets the latest updated value
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // Count increases by 2
  };

  // Decrement counter
  const decrement = () => {
    // Prevent counter from going below 0
    count > 0 && setCount(count - 1);
  };

  // Add name to array
  const addNames = (e) => {
    // Prevent page refresh
    e.preventDefault();

    // Add new object into existing array
    setNames([
      ...names, // Copy old array
      {
        id: Date.now(), // Unique id
        name: name, // Store current name
      },
    ]);

    // Clear textbox
    setName("");
  };

  // Submit user form
  const addUser = (e) => {
    // Prevent form refresh
    e.preventDefault();

    // Display user object in console
    console.log(user);

    // Clear only the HTML form inputs
    // This works because these are UNCONTROLLED inputs
    // (No value prop is used)
    // The user state remains unchanged.
    e.target.reset();
  };

  return (
    <div>
      <h3>useState Hook</h3>

      {/* Show name only if flag is true */}
      <h4>Hello {flag ? name : ""}</h4>

      {/* Change name */}
      <button onClick={changeName}>Change Name</button>

      {/* Toggle name visibility */}
      <button onClick={toggleName}>Toggle Name</button>

      <hr />

      {/* Increase count */}
      <button onClick={increment}>Increment</button>

      {/* Display count */}
      <div>
        <h2>{count}</h2>
      </div>

      {/* Decrease count */}
      <button onClick={decrement}>Decrement</button>

      <hr />

      {/* Form Example using String + Array */}
      <form onSubmit={addNames}>
        {/* Controlled Input
            value comes from React state
            onChange updates the state */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Button inside form is submit by default */}
        <button>Add Name</button>
      </form>

      {/* Display array data */}
      <ul>
        {names.map((item) => {
          return (
            // key helps React identify each item uniquely
            <li key={item.id}>{item.name}</li>
          );
        })}
      </ul>

      <hr />

      {/* Object Example */}
      <form onSubmit={addUser}>
        {/* Uncontrolled Input
            No value prop
            Updates only the object state */}
        <input
          type="text"
          placeholder="Enter Your First Name"
          onChange={(e) =>
            setUser({
              ...user, // Copy existing object properties
              firstName: e.target.value, // Add/Update firstName
            })
          }
        />

        <input
          type="text"
          placeholder="Enter Your Last Name"
          onChange={(e) =>
            setUser({
              ...user, // Keep previous properties
              lastName: e.target.value, // Add/Update lastName
            })
          }
        />

        <input
          type="number"
          placeholder="Enter Your Age"
          onChange={(e) =>
            setUser({
              ...user, // Keep previous properties
              age: e.target.value, // Add/Update age
            })
          }
        />

        <button>Add User</button>
      </form>

      <hr />

      {/* Display object values */}
      <h4>User FirstName: {user?.firstName}</h4>
      <h4>User LastName: {user?.lastName}</h4>
      <h4>User Age: {user?.age}</h4>
    </div>
  );
};

export default MyStateComponent;`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MyStateComponent;