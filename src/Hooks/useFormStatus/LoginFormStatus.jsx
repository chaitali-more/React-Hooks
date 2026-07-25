import React, { useActionState } from "react";
import { loginUser } from "../../api/user";
import CustomButton from "./CustomButton";

const LoginFormStatus = () => {
  const [user, submitAction] = useActionState(login, {
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
      <h3>Login using useFormStatus & useActionState</h3>
      <form action={submitAction}>
        <input type="email" name="email" placeholder="Enter Email" required />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <CustomButton />
        {user.data && (
          <p className="text-green-600">Logged in: {user.data.email}</p>
        )}
        {user.error && <p className="text-red-600">{user.error}</p>}
      </form>
    </div>
  );
};

export default LoginFormStatus;
