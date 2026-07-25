import React, { useEffect, useState } from "react";

// User's Functional Component implementation
export const MyFunctionComponentDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect: Mounting");
    // only runs once
  }, []);

  useEffect(() => {
    console.log("useEffect: Re-render"); // whenever state update it will run

    return () => {
      console.log("Removed Component from DOM");
    };
  }, [count]);

  return (
    <div className="demo-card-container">
      <h3 className="text-lg font-bold text-white mb-2">MyFunctionComponent</h3>
      <h4 className="text-slate-200 text-base mb-3">Count: {count}</h4>
      <div className="btn-group">
        <button
          className="custom-btn custom-btn-primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          className="custom-btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
      <p className="text-sm text-slate-300 mt-3 m-0">
        💡 Open browser console (<code>F12</code> → Console) to observe logs: <code>useEffect: Mounting</code>, <code>useEffect: Re-render</code>, and cleanup <code>Removed Component from DOM</code>!
      </p>
    </div>
  );
};

const MyFunctionComponent = () => {
  return (
    <div className="use-action-state-page">
      {/* Live Interactive Functional Component Demo */}
      <div className="action-state-grid">
        <div className="action-state-card new-way">
          <span className="card-badge-tag success">
            ✨ Live Functional Component Lifecycle Demo
          </span>
          <MyFunctionComponentDemo />
        </div>

        {/* Dependency Array Rules Card */}
        <div className="action-state-card old-way">
          <span className="card-badge-tag warning">
            📌 useEffect Dependency Array Rules
          </span>
          <h4 className="text-white font-bold text-base mb-2">How useEffect Controls Lifecycle</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 font-mono">
              <span className="text-emerald-400 font-bold">1. useEffect(fn, []):</span> Runs ONCE on mount (componentDidMount)
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 font-mono">
              <span className="text-amber-400 font-bold">2. useEffect(fn, [count]):</span> Runs on mount + whenever count changes (componentDidUpdate)
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 font-mono">
              <span className="text-rose-400 font-bold">3. return () =&gt; &#123;...&#125;:</span> Cleanup function runs before unmount/re-effect (componentWillUnmount)
            </div>
          </div>
        </div>
      </div>

      {/* useEffect Lifecycle Variations Breakdown */}
      <div className="demo-notes-card mt-0">
        <h3>🔍 Understanding Functional Component Lifecycles with useEffect</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-emerald-300 font-bold text-sm">1. Empty Array [] (Mounting)</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              <code>useEffect(() =&gt; &#123;...&#125;, [])</code><br />
              Runs only once after the initial component render. Perfect for API calls and subscriptions.
            </p>
          </div>

          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-amber-300 font-bold text-sm">2. With Dependencies [state] (Updating)</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              <code>useEffect(() =&gt; &#123;...&#125;, [count])</code><br />
              Runs on initial mount and re-runs whenever <code>count</code> updates.
            </p>
          </div>

          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-rose-300 font-bold text-sm">3. Cleanup Return Function (Unmounting)</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              <code>return () =&gt; &#123; console.log("Removed") &#125;</code><br />
              Executes when component unmounts or before the effect re-runs on state change.
            </p>
          </div>

          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">4. No Dependency Array (Every Render)</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              <code>useEffect(() =&gt; &#123;...&#125;)</code><br />
              Runs after every single render and re-render of the component.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison: Class Lifecycle vs Functional useEffect */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white m-0">📊 Class Component Lifecycles vs Functional useEffect</h3>

        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Lifecycle Phase</th>
                <th>Class Component Method</th>
                <th>Functional Component Hook</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mounting (Initial Render)</strong></td>
                <td><code>componentDidMount()</code></td>
                <td><code>useEffect(() =&gt; &#123;...&#125;, [])</code></td>
              </tr>
              <tr>
                <td><strong>Updating (State/Props Change)</strong></td>
                <td><code>componentDidUpdate(prevProps, prevState)</code></td>
                <td><code>useEffect(() =&gt; &#123;...&#125;, [state])</code></td>
              </tr>
              <tr>
                <td><strong>Unmounting (Cleanup)</strong></td>
                <td><code>componentWillUnmount()</code></td>
                <td><code>useEffect(() =&gt; &#123; return () =&gt; cleanup &#125;, [])</code></td>
              </tr>
              <tr>
                <td><strong>Every Render</strong></td>
                <td><code>componentDidMount() + componentDidUpdate()</code></td>
                <td><code>useEffect(() =&gt; &#123;...&#125;)</code> (No array)</td>
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
          &ldquo;<strong>In functional components, <code>useEffect</code> replaces class lifecycle methods (<code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>) with a unified declarative Hook controlled by the dependency array and an optional cleanup function.</strong>&rdquo;
        </blockquote>
      </div>

      {/* Complete Code Reference Block */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          💻 Complete Code Reference
        </h3>
        <p className="text-sm text-slate-300 mt-1 mb-4">
          Full source code of <code>MyFunctionComponent.jsx</code> implementation:
        </p>

        <pre className="code-block-box">
{`import React, { useEffect, useState } from "react";

const MyFunctionComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect: Mounting");
    // only runs once
  }, []);

  useEffect(() => {
    console.log("useEffect: Re-render"); // whenever state update it will run

    return ()=>{
      console.log("Removed Component from DOM");
      
    }
  }, [count]);

  return (
    <div>
      <h1>MyFunctionComponent</h1>
      <h4>Count: {count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default MyFunctionComponent;`}
        </pre>
      </div>
    </div>
  );
};

export default MyFunctionComponent;
