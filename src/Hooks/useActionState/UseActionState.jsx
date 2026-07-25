import React from "react";
import Login from "./Login";
import LoginUseAction from "./LoginUseAction";

const UseActionState = () => {
  return (
    <div className="use-action-state-page">
      {/* Test Credentials Helper */}
      <div
        style={{
          background: "rgba(99, 102, 241, 0.1)",
          border: "1px solid rgba(99, 102, 241, 0.25)",
          borderRadius: "10px",
          padding: "0.85rem 1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.9rem",
          color: "#e2e8f0",
        }}
      >
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
          <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-color)" }}>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
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
          <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-color)" }}>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              Uses React 19 <code>useActionState</code> hook with <code>&lt;form action=&#123;submitAction&#125;&gt;</code> and built-in <code>isPending</code> status.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Summary Banner */}
      <div className="benefits-banner">
        <h3 style={{ margin: 0, color: "#ffffff", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          🚀 Key Benefits of React 19 <code>useActionState</code>
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginTop: "0.35rem", marginBottom: "1rem" }}>
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
      <div className="demo-notes-card" style={{ marginTop: 0 }}>
        <h3>🔍 Hook Signature Breakdown</h3>
        <div className="code-block-box">
          <code>const [state, submitAction, isPending] = useActionState(actionFunction, initialState);</code>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
          <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <span style={{ color: "#a5b4fc", fontWeight: "700" }}>1. state</span>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem", margin: 0 }}>
              Stores the current value returned by the action function (e.g. <code>&#123; error: null, data: response &#125;</code>).
            </p>
          </div>
          <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <span style={{ color: "#a5b4fc", fontWeight: "700" }}>2. submitAction</span>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem", margin: 0 }}>
              Action function passed directly to <code>&lt;form action=&#123;submitAction&#125;&gt;</code>.
            </p>
          </div>
          <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <span style={{ color: "#a5b4fc", fontWeight: "700" }}>3. isPending</span>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem", margin: 0 }}>
              Boolean flag that becomes <code>true</code> automatically while the async action function is executing.
            </p>
          </div>
          <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "0.85rem", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
            <span style={{ color: "#a5b4fc", fontWeight: "700" }}>4. actionFunction</span>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem", margin: 0 }}>
              Async function with signature <code>(previousState, formData) =&gt; newState</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Execution Flow Diagram Comparison */}
      <div style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.5rem" }}>
        <h3 style={{ margin: 0, color: "#ffffff", fontSize: "1.15rem" }}>🔄 Execution Flow Comparison</h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
          Notice how React 19 eliminates manual event handling steps.
        </p>

        <div className="flow-diagram-container">
          {/* Old Flow */}
          <div className="flow-box">
            <span style={{ color: "#fbbf24", fontWeight: "700", fontSize: "0.9rem" }}>Old Way (onSubmit)</span>
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
            <span style={{ color: "#34d399", fontWeight: "700", fontSize: "0.9rem" }}>React 19 Way (action)</span>
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
      <div className="demo-notes-card" style={{ marginTop: 0, borderLeftColor: "#a855f7" }}>
        <h3 style={{ color: "#c084fc" }}>💡 What is FormData?</h3>
        <p>
          <strong><code>FormData</code></strong> is a built-in <strong>Browser Web API</strong> object used to collect form input values as key-value pairs. It is <em>not</em> part of React.
        </p>
        <ul style={{ margin: 0 }}>
          <li>In <strong>React 18</strong>, we had to manually construct it using <code>new FormData(e.currentTarget)</code> inside the <code>onSubmit</code> event handler.</li>
          <li>In <strong>React 19</strong>, when using <code>&lt;form action=&#123;submitAction&#125;&gt;</code> or <code>useActionState</code>, React automatically passes the <code>FormData</code> object as the second argument to your action function!</li>
        </ul>
      </div>

      {/* Feature Comparison Table */}
      <div style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.5rem" }}>
        <h3 style={{ margin: 0, color: "#ffffff", fontSize: "1.15rem" }}>📊 Summary Comparison Table</h3>
        
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
        <h4 style={{ margin: 0, color: "#d8b4fe", fontSize: "1.05rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          ⭐ Interview One-Liner
        </h4>
        <blockquote style={{ margin: "0.5rem 0 0 0", color: "#f3f4f6", fontSize: "0.95rem", fontStyle: "italic", lineHeight: "1.6" }}>
          &ldquo;<strong><code>action</code> automatically provides <code>FormData</code> and manages pending state via <code>useActionState</code>, making form handling simpler and eliminating the need for <code>e.preventDefault()</code> and manual <code>new FormData()</code> creation.</strong>&rdquo;
        </blockquote>
      </div>

      {/* Full Code Reference Section */}
      <div style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid var(--border-color)", borderRadius: "14px", padding: "1.5rem" }}>
        <h3 style={{ margin: 0, color: "#ffffff", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          💻 Complete Code Reference
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.25rem", marginBottom: "1.25rem" }}>
          Inspect the complete source code comparison and helper function implementations below.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Old Way Code Box */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
              <span style={{ color: "#fbbf24", fontWeight: "700", fontSize: "0.9rem" }}>1. Login.jsx (React 18 - Old Way)</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>onSubmit + useState + e.preventDefault()</span>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
              <span style={{ color: "#818cf8", fontWeight: "700", fontSize: "0.9rem" }}>2. api/user.js (Fake Async API Call)</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Mock API Promise</span>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
              <span style={{ color: "#34d399", fontWeight: "700", fontSize: "0.9rem" }}>3. LoginUseAction.jsx (React 19 - useActionState)</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>form action + useActionState</span>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
              <span style={{ color: "#c084fc", fontWeight: "700", fontSize: "0.9rem" }}>4. Quick Array Destructuring Reference</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Parameter Mapping</span>
            </div>
            <pre className="code-block-box" style={{ background: "rgba(168, 85, 247, 0.08)", borderColor: "rgba(168, 85, 247, 0.25)" }}>
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
