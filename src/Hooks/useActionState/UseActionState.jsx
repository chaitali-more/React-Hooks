import React from "react";
import Login from "./Login";
import LoginUseAction from "./LoginUseAction";

const UseActionState = () => {
  return (
    <div className="use-action-state-page">
      {/* Test Credentials Helper */}
      <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-3.5 flex items-center gap-3 text-sm text-slate-200">
        <span>💡 <strong>Test Credentials for Demo:</strong> Email: <code>test@gmail.com</code> | Password: <code>pass</code></span>
      </div>

      {/* Live Interactive Demos */}
      <div className="action-state-grid">
        {/* Old Way Component */}
        <div className="action-state-card old-way">
          <div>
            <span className="card-badge-tag warning">
              ⚠️ React 18 & Previous (Old Way)
            </span>
            <Login />
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700/40">
            <p className="text-sm text-slate-300 m-0 leading-normal">
              Uses <code>onSubmit</code>, <code>e.preventDefault()</code>, manual <code>new FormData(e.currentTarget)</code>, and custom <code>isPending</code> state.
            </p>
          </div>
        </div>

        {/* New Way Component */}
        <div className="action-state-card new-way">
          <div>
            <span className="card-badge-tag success">
              ✨ React 19 useActionState (New Way)
            </span>
            <LoginUseAction />
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700/40">
            <p className="text-sm text-slate-300 m-0 leading-normal">
              Uses React 19 <code>useActionState</code> hook with <code>&lt;form action=&#123;submitAction&#125;&gt;</code> and built-in <code>isPending</code> status.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Summary Banner */}
      <div className="benefits-banner">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          🚀 Key Benefits of React 19 <code>useActionState</code>
        </h3>
        <p className="text-sm text-slate-300 mt-1 mb-4">
          React 19 simplifies form handling by integrating state management directly with form actions.
        </p>

        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🚫</span>
            <span><strong>No <code>onSubmit</code></strong> handler needed</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🛑</span>
            <span><strong>No <code>e.preventDefault()</code></strong> required</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📦</span>
            <span><strong>No <code>new FormData()</code></strong> manual creation</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⏳</span>
            <span><strong>Built-in <code>isPending</code></strong> loading state</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🧹</span>
            <span><strong>Less Code</strong> & less state boilerplate</span>
          </div>
        </div>
      </div>

      {/* Signature & Parameter Breakdown */}
      <div className="demo-notes-card mt-0">
        <h3>🔍 Hook Signature Breakdown</h3>
        <div className="code-block-box">
          <code>const [state, submitAction, isPending] = useActionState(actionFunction, initialState);</code>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">1. state</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Stores the current value returned by the action function (e.g. <code>&#123; error: null, data: response &#125;</code>).
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">2. submitAction</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Action function passed directly to <code>&lt;form action=&#123;submitAction&#125;&gt;</code>.
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">3. isPending</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Boolean flag that becomes <code>true</code> automatically while the async action function is executing.
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">4. actionFunction</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Async function with signature <code>(previousState, formData) =&gt; newState</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Execution Flow Diagram Comparison */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white m-0">🔄 Execution Flow Comparison</h3>
        <p className="text-sm text-slate-300 mt-1">
          Notice how React 19 eliminates manual event handling steps.
        </p>

        <div className="flow-diagram-container">
          {/* Old Flow */}
          <div className="flow-box">
            <span className="text-amber-400 font-bold text-sm">Old Way (onSubmit)</span>
            <div className="flow-steps">
              <div className="flow-step">1. User Clicks Submit (triggers <code>onSubmit</code>)</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">2. <code>e.preventDefault()</code> (Stop page reload)</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">3. <code>new FormData(e.currentTarget)</code> (Extract inputs)</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">4. Manual <code>setIsPending(true)</code> & API Call</div>
            </div>
          </div>

          {/* New Flow */}
          <div className="flow-box">
            <span className="text-emerald-400 font-bold text-sm">React 19 Way (action)</span>
            <div className="flow-steps">
              <div className="flow-step">1. User Clicks Submit (triggers <code>form action</code>)</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">2. React 19 automatically sets <code>isPending = true</code></div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">3. React passes <code>(previousState, formData)</code> directly</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">4. Action returns <code>newState</code> (Auto-updated)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Understanding FormData Note */}
      <div className="demo-notes-card mt-0 border-l-purple-500">
        <h3 className="text-purple-400">💡 What is FormData?</h3>
        <p>
          <strong><code>FormData</code></strong> is a built-in <strong>Browser Web API</strong> object used to collect form input values as key-value pairs. It is <em>not</em> part of React.
        </p>
        <ul className="m-0">
          <li>In <strong>React 18</strong>, we had to manually construct it using <code>new FormData(e.currentTarget)</code> inside the <code>onSubmit</code> event handler.</li>
          <li>In <strong>React 19</strong>, when using <code>&lt;form action=&#123;submitAction&#125;&gt;</code> or <code>useActionState</code>, React automatically passes the <code>FormData</code> object as the second argument to your action function!</li>
        </ul>
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white m-0">📊 Summary Comparison Table</h3>
        
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>React 18 & Previous (<code>onSubmit</code>)</th>
                <th>React 19 (<code>useActionState</code>)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Form Trigger</strong></td>
                <td><code>&lt;form onSubmit=&#123;handleSubmit&#125;&gt;</code></td>
                <td><code>&lt;form action=&#123;submitAction&#125;&gt;</code></td>
              </tr>
              <tr>
                <td><strong>Prevent Page Reload</strong></td>
                <td>Requires <code>e.preventDefault()</code></td>
                <td>Handled automatically by React 19</td>
              </tr>
              <tr>
                <td><strong>FormData Access</strong></td>
                <td>Manual <code>new FormData(e.currentTarget)</code></td>
                <td>Passed automatically as 2nd parameter</td>
              </tr>
              <tr>
                <td><strong>Loading State</strong></td>
                <td>Manual <code>useState(false)</code> tracking</td>
                <td>Built-in <code>isPending</code> boolean state</td>
              </tr>
              <tr>
                <td><strong>State Updates</strong></td>
                <td>Multiple <code>setUser()</code>, <code>setError()</code> calls</td>
                <td>Return value of action becomes new state</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interview One-Liner Banner */}
      <div className="interview-banner">
        <h4 className="text-purple-300 font-bold text-base flex items-center gap-1.5 m-0">
          ⭐ Interview One-Liner
        </h4>
        <blockquote className="text-slate-100 text-sm italic leading-relaxed mt-2 m-0">
          &ldquo;<strong><code>action</code> automatically provides <code>FormData</code> and manages pending state via <code>useActionState</code>, making form handling simpler and eliminating the need for <code>e.preventDefault()</code> and manual <code>new FormData()</code> creation.</strong>&rdquo;
        </blockquote>
      </div>

      {/* Full Code Reference Section */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          💻 Complete Code Reference
        </h3>
        <p className="text-sm text-slate-300 mt-1 mb-5">
          Inspect the complete source code comparison and helper function implementations below.
        </p>

        <div className="flex flex-col gap-6">
          {/* Old Way Code Box */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-amber-400 font-bold text-sm">1. Login.jsx (React 18 - Old Way)</span>
              <span className="text-sm text-slate-400">onSubmit + useState + e.preventDefault()</span>
            </div>
            <pre className="code-block-box">
{`import React, { useState } from "react";
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
        <input type="password" name="password" placeholder="Enter Password" required />
        <button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>

        {user && <p className="text-green-600">Logged in: {user.email}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default Login;`}
            </pre>
          </div>

          {/* Fake API Promise Box */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-indigo-400 font-bold text-sm">2. api/user.js (Fake Async API Call)</span>
              <span className="text-sm text-slate-400">Mock API Promise</span>
            </div>
            <pre className="code-block-box">
{`// loginUser.jsx / api/user.js
export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@gmail.com" && password === "pass") {
        resolve({
          success: true,
          data: {
            email,
            username: "TEST",
            token: "cgfhjkjlkjasidxgvasjdb"
          }
        });
      } else {
        reject({ success: false, error: "Invalid Credentials" });
      }
    }, 1000);
  });
};`}
            </pre>
          </div>

          {/* New Way Code Box */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-emerald-400 font-bold text-sm">3. LoginUseAction.jsx (React 19 - useActionState)</span>
              <span className="text-sm text-slate-400">form action + useActionState</span>
            </div>
            <pre className="code-block-box">
{`import React, { useActionState } from "react";
import { loginUser } from "../../api/user";

const LoginUseAction = () => {
  // useActionState(actionFunction, initialState)
  // user -> stores returned state
  // submitAction -> pass to form action
  // isPending -> true while action is running
  const [user, submitAction, isPending] = useActionState(login, {
    error: null,
    data: null,
  });

  // previousState -> previous returned state
  // formData -> automatically provided by React 19
  async function login(previousState, formData) {
    // Get form values
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      // Call fake API
      const response = await loginUser(email, password);

      // Return new state (Success)
      // Whatever you return becomes the new 'user' state
      return {
        error: null,
        data: response.data,
      };
    } catch (error) {
      // Return new state (Failure)
      return {
        ...previousState,
        error: error.error,
      };
    }
  }

  return (
    <div>
      <h3>Login using useActionState</h3>

      {/* action automatically calls submitAction */}
      <form action={submitAction}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />

        {/* Button disabled while request is running */}
        <button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>

        {/* Show success */}
        {user.data && (
          <p className="text-green-600">
            Logged in: {user.data.email}
          </p>
        )}

        {/* Show error */}
        {user.error && (
          <p className="text-red-600">{user.error}</p>
        )}
      </form>
    </div>
  );
};

export default LoginUseAction;`}
            </pre>
          </div>

          {/* Quick Mapping Summary Box */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-purple-400 font-bold text-sm">4. Quick Array Destructuring Reference</span>
              <span className="text-sm text-slate-400">Parameter Mapping</span>
            </div>
            <pre className="code-block-box bg-purple-950/20 border-purple-800/40">
{`[state, action, isPending]

state                 → Current form state
action - submitAction → Connect to <form action={action}>, function reference
isPending             → Loading state (boolean)
login                 → Action function (previousState, formData)`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseActionState;
