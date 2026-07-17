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
    setCount(count + 1);

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

      {/* Optional: Display complete object */}
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </div>
  );
};

export default MyStateComponent;