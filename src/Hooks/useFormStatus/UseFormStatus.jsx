import React from "react";
import LoginFormStatus from "./LoginFormStatus";

const UseFormStatus = () => {
  return (
    <div className="use-action-state-page">
      {/* Test Credentials Helper */}
      <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-3.5 flex items-center gap-3 text-sm text-slate-200">
        <span>💡 <strong>Test Credentials for Demo:</strong> Email: <code>test@gmail.com</code> | Password: <code>pass</code></span>
      </div>

      {/* Live Interactive Demo */}
      <div className="action-state-grid">
        <div className="action-state-card new-way">
          <div>
            <span className="card-badge-tag success">
              ✨ React 19 useFormStatus Demo
            </span>
            <LoginFormStatus />
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700/40">
            <p className="text-xs text-slate-400 m-0">
              Notice how <code>CustomButton</code> disables itself automatically using <code>useFormStatus()</code> without receiving <code>isPending</code> as a prop!
            </p>
          </div>
        </div>

        {/* Quick Rule Card */}
        <div className="action-state-card old-way">
          <div>
            <span className="card-badge-tag warning">
              ⚠️ Important Rule for useFormStatus
            </span>
            <h4 className="text-white font-bold text-base mb-2">Must be inside a Parent &lt;form&gt;</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              <code>useFormStatus</code> only works when called inside a child component that is rendered <strong>within a &lt;form&gt; element</strong>.
            </p>
            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs text-amber-300 font-mono">
              ❌ Does NOT work inside component rendering &lt;form&gt;<br />
              ✅ Works inside child components (e.g. &lt;CustomButton /&gt;)
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Summary Banner */}
      <div className="benefits-banner">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          🚀 Key Benefits of React 19 <code>useFormStatus</code>
        </h3>
        <p className="text-sm text-slate-400 mt-1 mb-4">
          Imported from <code>react-dom</code>, <code>useFormStatus</code> provides automatic status tracking for parent form actions.
        </p>

        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">🚫</span>
            <span><strong>No Prop Passing</strong> (no <code>isPending</code> prop)</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🛑</span>
            <span><strong>Avoids Prop Drilling</strong> to nested buttons</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🤖</span>
            <span><strong>Auto Context</strong> reads parent <code>&lt;form&gt;</code></span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🧹</span>
            <span><strong>Clean & Reusable</strong> UI components</span>
          </div>
        </div>
      </div>

      {/* Signature & Return Values Breakdown */}
      <div className="demo-notes-card mt-0">
        <h3>🔍 Hook Signature & Return Object</h3>
        <div className="code-block-box">
          <code>import &#123; useFormStatus &#125; from "react-dom";</code><br />
          <code>const &#123; pending, data, method, action &#125; = useFormStatus();</code>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold">1. pending</span>
            <p className="text-xs text-slate-400 mt-1 m-0">
              Boolean flag. Becomes <code>true</code> while the parent form is currently submitting an action.
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold">2. data</span>
            <p className="text-xs text-slate-400 mt-1 m-0">
              <code>FormData</code> object containing data submitted by the parent form (or <code>null</code> when idle).
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold">3. method</span>
            <p className="text-xs text-slate-400 mt-1 m-0">
              HTTP method (<code>"get"</code> or <code>"post"</code>) used by the form submission.
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold">4. action</span>
            <p className="text-xs text-slate-400 mt-1 m-0">
              Reference to the function or URL passed to the parent form's <code>action</code> prop.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white m-0">📊 Props vs useFormStatus Comparison</h3>
        
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional Prop Passing</th>
                <th>React 19 (<code>useFormStatus</code>)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Hook Source</strong></td>
                <td>N/A (manual state)</td>
                <td><code>import &#123; useFormStatus &#125; from "react-dom"</code></td>
              </tr>
              <tr>
                <td><strong>State Passing</strong></td>
                <td><code>&lt;CustomButton isPending=&#123;isPending&#125; /&gt;</code></td>
                <td><code>&lt;CustomButton /&gt;</code> (No props needed)</td>
              </tr>
              <tr>
                <td><strong>Deeply Nested Inputs</strong></td>
                <td>Requires prop drilling through every level</td>
                <td>Child hook reads parent form status automatically</td>
              </tr>
              <tr>
                <td><strong>Parent Form Dependence</strong></td>
                <td>Tight coupling with parent state</td>
                <td>Reusable button component across any form</td>
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
          &ldquo;<strong><code>useFormStatus</code> is a React 19 hook imported from <code>react-dom</code> that gives child components automatic access to a parent form&apos;s submission status (like <code>pending</code>), eliminating the need for prop drilling loading states.</strong>&rdquo;
        </blockquote>
      </div>

      {/* Complete Code Reference Section */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          💻 Complete Code Reference
        </h3>
        <p className="text-sm text-slate-400 mt-1 mb-5">
          Inspect the full code implementation of <code>CustomButton.jsx</code> and <code>LoginFormStatus.jsx</code> below.
        </p>

        <div className="flex flex-col gap-6">
          {/* CustomButton Box */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-emerald-400 font-bold text-sm">1. CustomButton.jsx (Child Component)</span>
              <span className="text-xs text-slate-400">uses useFormStatus() from react-dom</span>
            </div>
            <pre className="code-block-box">
{`import React from "react";
import { useFormStatus } from "react-dom";

const CustomButton = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Logging in..." : "Login"}
      </button>
    </div>
  );
};

export default CustomButton;`}
            </pre>
          </div>

          {/* Parent Component Box */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-indigo-400 font-bold text-sm">2. LoginFormStatus.jsx (Parent Component)</span>
              <span className="text-xs text-slate-400">renders &lt;CustomButton /&gt; inside &lt;form action&gt;</span>
            </div>
            <pre className="code-block-box">
{`import React, { useActionState } from "react";
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
        {/* CustomButton automatically reads pending status from form above */}
        <CustomButton />

        {user.data && (
          <p className="text-green-600">Logged in: {user.data.email}</p>
        )}
        {user.error && <p className="text-red-600">{user.error}</p>}
      </form>
    </div>
  );
};

export default LoginFormStatus;`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseFormStatus;
