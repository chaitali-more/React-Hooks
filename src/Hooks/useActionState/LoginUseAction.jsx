import React, { useActionState, useState } from "react";
import { loginUser } from "../../api/user";

const LoginUseAction = () => {
  const [user, submitAction, isPending] = useActionState(login, {
    error: null,
    data: null,
  });

  async function login(previousState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await loginUser(email, password);
      return { error: null, data: response.data };
    } catch (error) {
      return { ...previousState, error: error.error };
    }
  }
  return (
    <div>
      <h3>Login using useActionState</h3>
      <form action={submitAction}>
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

        {user.data && (
          <p className="text-green-600">Logged in: {user.data.email}</p>
        )}
        {user.error && <p className="text-red-600">{user.error}</p>}
      </form>
    </div>
  );
};

export default LoginUseAction;
