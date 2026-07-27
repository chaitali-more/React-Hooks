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
    <div className="demo-card-container space-y-4" style={{ padding: "2rem 1.75rem" }}>
      <h3 className="text-xl font-bold text-white mb-2" style={{ marginBottom: "1rem" }}>MyFunctionComponent</h3>
      <h4 className="text-slate-200 text-lg font-semibold mb-4" style={{ marginBottom: "1.25rem" }}>Count: <span className="text-emerald-400 font-mono font-bold">{count}</span></h4>
      <div className="btn-group flex gap-3" style={{ gap: "0.75rem", marginBottom: "1rem" }}>
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
      <p className="text-sm text-slate-300 pt-3 border-t border-slate-800 leading-relaxed m-0" style={{ paddingTop: "1rem", marginTop: "1rem" }}>
        💡 Open browser console (<code>F12</code> → Console) to observe logs: <code>useEffect: Mounting</code>, <code>useEffect: Re-render</code>, and cleanup <code>Removed Component from DOM</code>!
      </p>
    </div>
  );
};

const MyFunctionComponent = () => {
  return (
    <div className="use-action-state-page space-y-8" style={{ padding: "1.5rem 0" }}>
      {/* Live Interactive Functional Component Demo */}
      <div className="action-state-grid grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gap: "1.75rem", marginBottom: "2rem" }}>
        <div className="action-state-card new-way" style={{ padding: "2rem 1.75rem" }}>
          <span className="card-badge-tag success" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
            ✨ Live Functional Component Lifecycle Demo
          </span>
          <MyFunctionComponentDemo />
        </div>

        {/* Dependency Array Rules Card */}
        <div className="action-state-card old-way" style={{ padding: "2rem 1.75rem" }}>
          <span className="card-badge-tag warning" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
            📌 useEffect Dependency Array Rules
          </span>
          <h4 className="text-white font-bold text-lg mb-3" style={{ marginTop: "0.5rem", marginBottom: "1.25rem" }}>How useEffect Controls Lifecycle</h4>
          <div className="flex flex-col gap-3 text-sm text-slate-300" style={{ gap: "1rem" }}>
            <div className="bg-slate-950/70 border border-slate-800/80 font-mono leading-relaxed" style={{ padding: "1.25rem 1.5rem", borderRadius: "12px" }}>
              <span className="text-emerald-400 font-bold block mb-1" style={{ marginBottom: "0.4rem" }}>1. useEffect(fn, []):</span> Runs ONCE on mount (componentDidMount)
            </div>
            <div className="bg-slate-950/70 border border-slate-800/80 font-mono leading-relaxed" style={{ padding: "1.25rem 1.5rem", borderRadius: "12px" }}>
              <span className="text-amber-400 font-bold block mb-1" style={{ marginBottom: "0.4rem" }}>2. useEffect(fn, [count]):</span> Runs on mount + whenever count changes (componentDidUpdate)
            </div>
            <div className="bg-slate-950/70 border border-slate-800/80 font-mono leading-relaxed" style={{ padding: "1.25rem 1.5rem", borderRadius: "12px" }}>
              <span className="text-rose-400 font-bold block mb-1" style={{ marginBottom: "0.4rem" }}>3. return () =&gt; &#123;...&#125;:</span> Cleanup function runs before unmount/re-effect (componentWillUnmount)
            </div>
          </div>
        </div>
      </div>

      {/* useEffect Lifecycle Variations Breakdown */}
      <div className="demo-notes-card" style={{ padding: "2.25rem 2rem", marginTop: "2.5rem", marginBottom: "2.5rem" }}>
        <h3 className="text-xl font-bold text-indigo-300 flex items-center gap-2" style={{ marginBottom: "1.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          🔍 Understanding Functional Component Lifecycles with useEffect
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ gap: "1.75rem", marginTop: "1.75rem" }}>
          <div className="bg-slate-900/90 border border-slate-800/90 shadow-md" style={{ padding: "1.75rem 1.5rem", borderRadius: "16px", minHeight: "190px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="text-emerald-400 font-bold text-base block" style={{ marginBottom: "0.85rem", display: "block" }}>1. Empty Array [] (Mounting)</span>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
                <code style={{ background: "rgba(15, 23, 42, 0.9)", color: "#34d399", padding: "0.2rem 0.5rem", borderRadius: "6px", display: "inline-block", marginBottom: "0.5rem" }}>useEffect(() =&gt; &#123;...&#125;, [])</code><br />
                Runs only once after the initial component render. Perfect for API calls and subscriptions.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/90 shadow-md" style={{ padding: "1.75rem 1.5rem", borderRadius: "16px", minHeight: "190px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="text-amber-400 font-bold text-base block" style={{ marginBottom: "0.85rem", display: "block" }}>2. With Dependencies [state] (Updating)</span>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
                <code style={{ background: "rgba(15, 23, 42, 0.9)", color: "#fbbf24", padding: "0.2rem 0.5rem", borderRadius: "6px", display: "inline-block", marginBottom: "0.5rem" }}>useEffect(() =&gt; &#123;...&#125;, [count])</code><br />
                Runs on initial mount and re-runs whenever <code>count</code> updates.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/90 shadow-md" style={{ padding: "1.75rem 1.5rem", borderRadius: "16px", minHeight: "190px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="text-rose-400 font-bold text-base block" style={{ marginBottom: "0.85rem", display: "block" }}>3. Cleanup Return Function (Unmounting)</span>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
                <code style={{ background: "rgba(15, 23, 42, 0.9)", color: "#f87171", padding: "0.2rem 0.5rem", borderRadius: "6px", display: "inline-block", marginBottom: "0.5rem" }}>return () =&gt; &#123; cleanup &#125;</code><br />
                Executes when component unmounts or before the effect re-runs on state change.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/90 shadow-md" style={{ padding: "1.75rem 1.5rem", borderRadius: "16px", minHeight: "190px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="text-indigo-400 font-bold text-base block" style={{ marginBottom: "0.85rem", display: "block" }}>4. No Dependency Array (Every Render)</span>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
                <code style={{ background: "rgba(15, 23, 42, 0.9)", color: "#818cf8", padding: "0.2rem 0.5rem", borderRadius: "6px", display: "inline-block", marginBottom: "0.5rem" }}>useEffect(() =&gt; &#123;...&#125;)</code><br />
                Runs after every single render and re-render of the component.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison: Class Lifecycle vs Functional useEffect */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl" style={{ padding: "2.25rem 2rem", margin: "2.5rem 0" }}>
        <h3 className="text-xl font-bold text-white" style={{ marginBottom: "1.5rem" }}>📊 Class Component Lifecycles vs Functional useEffect</h3>

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
      <div className="interview-banner" style={{ padding: "2rem", margin: "2.5rem 0", borderRadius: "18px" }}>
        <h4 className="text-purple-300 font-bold text-base flex items-center gap-1.5" style={{ margin: 0, marginBottom: "0.75rem" }}>
          ⭐ Interview One-Liner
        </h4>
        <blockquote className="text-slate-100 text-sm italic leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
          &ldquo;<strong>In functional components, <code>useEffect</code> replaces class lifecycle methods (<code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>) with a unified declarative Hook controlled by the dependency array and an optional cleanup function.</strong>&rdquo;
        </blockquote>
      </div>

      {/* Complete Code Reference Block */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl" style={{ padding: "2.25rem 2rem", margin: "2.5rem 0" }}>
        <h3 className="text-xl font-bold text-white flex items-center gap-2" style={{ marginBottom: "1.25rem" }}>
          💻 Complete Code Reference
        </h3>
        <p className="text-sm text-slate-300" style={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}>
          Full source code of <code>MyFunctionComponent.jsx</code> implementation:
        </p>

        <pre className="code-block-box" style={{ padding: "1.5rem", borderRadius: "14px" }}>
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
