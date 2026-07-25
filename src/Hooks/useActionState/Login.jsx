import React, { useState } from "react";
import { loginUser } from "../../api/user";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, SetIsPending] = useState(false);

  const handleSubmit = async (e) => {
    console.log(e.currentTarget);
    e.preventDefault();
    SetIsPending(true);
    setUser(null);
    setError(null);
    const formData = new FormData(e.currentTarget);
    console.log(formData);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await loginUser(email, password);
      setUser(response.data);
    } catch (error) {
      setError(error.error);
    } finally {
      SetIsPending(false);
    }
  };
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter Email" required />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>

        {user && <p className="text-green-600">Logged in: {user.email}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
