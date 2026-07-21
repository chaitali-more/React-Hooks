import React, { useEffect, useLayoutEffect, useState } from "react";

const MyUseEffect = () => {
  console.log("Rendering...");

  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);

  // Runs before the browser paints
  useLayoutEffect(() => {
    console.log("useLayoutEffect - Height");
    setHeight(200);
  }, []);

  // Runs after the browser paints
  useEffect(() => {
    console.log("useEffect - Width");
    setWidth(600);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
      {/* Interactive Demo Card */}
      <div className="hook-demo-card">
        <div className="card-top-header">
          <span className="badge-info">useEffect & useLayoutEffect Execution Order</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", justifyContent: "center", minHeight: "240px", background: "rgba(0, 0, 0, 0.15)", borderRadius: "12px", padding: "20px" }}>
          <div
            style={{
              width: `${width}px`,
              maxWidth: "100%",
              height: `${height}px`,
              background: "#3b82f6",
              color: "white",
              textAlign: "center",
              padding: "20px",
              transition: "width 1s",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              fontWeight: "600"
            }}
          >
            My useEffect & useLayoutEffect
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
            Check console log to see timing: <code>useLayoutEffect</code> runs first, followed by <code>useEffect</code>.
          </div>
        </div>
      </div>

      {/* Revision Notes Card */}
      <div className="demo-notes-card">
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.2rem" }}>
            💡 Revision Notes: useEffect & useLayoutEffect Hooks
          </h3>
          <span className="badge-info">Side Effect Hooks</span>
        </div>

        {/* Section 1: useEffect */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.4rem" }}>
            🔄 useEffect Hook
          </h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginTop: "0.75rem" }}>
            <li>React Hook used to perform <strong>side effects</strong> in functional components.</li>
            <li>Runs <strong>after the component renders and the browser paints the UI</strong>.</li>
            <li>Introduced in <strong>React 16.8</strong>.</li>
          </ul>
        </div>

        {/* Common Uses of useEffect */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.025rem", marginBottom: "0.5rem" }}>🎯 Common Uses</h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
              <li>API calls / Fetching data</li>
              <li>Timers (<code>setTimeout</code>, <code>setInterval</code>)</li>
              <li>Event listeners</li>
            </ul>
            <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6", margin: 0 }}>
              <li>Local Storage interaction</li>
              <li>Subscriptions</li>
              <li>Updating the document title</li>
            </ul>
          </div>
        </div>

        {/* Dependency Array Cases */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.025rem", marginBottom: "0.5rem" }}>📊 Dependency Array Scenarios</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <strong style={{ color: "#818cf8", fontSize: "0.9rem" }}>1. No Dependency Array</strong>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: "0.25rem 0 0 0", lineHeight: "1.5" }}>
                Runs after <strong>every render</strong> (runs on initial render and every subsequent re-render).
              </p>
            </div>
            
            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <strong style={{ color: "#34d399", fontSize: "0.9rem" }}>2. Empty Dependency Array (<code>{"[]"}</code>)</strong>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: "0.25rem 0 0 0", lineHeight: "1.5" }}>
                Runs <strong>only once</strong> after the initial render. Used for initialization tasks.
              </p>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.02)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <strong style={{ color: "#fb7185", fontSize: "0.9rem" }}>3. State/Props in Dependency Array (<code>{"[state]"}</code> or <code>{"[prop]"}</code>)</strong>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: "0.25rem 0 0 0", lineHeight: "1.5" }}>
                Runs on the initial render, and runs again <strong>only when the specified state or prop changes</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Cleanup Function & Important Points */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.025rem", marginBottom: "0.5rem" }}>🧹 Cleanup Function</h4>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
            The function returned inside the effect callback runs <strong>before the component unmounts or before the effect runs again</strong>. It is essential to prevent memory leaks by removing event listeners, clearing timers, and unsubscribing.
          </p>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.025rem", marginBottom: "0.5rem" }}>⭐ Important Points for useEffect</h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
            <li>Runs <strong>after</strong> the UI is displayed.</li>
            <li>Does <strong>not block</strong> the browser from painting the screen.</li>
            <li>Used for side effects, not UI rendering calculations.</li>
          </ul>
        </div>

        {/* Section 2: useLayoutEffect */}
        <div style={{ marginTop: "2.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.4rem" }}>
            📐 useLayoutEffect Hook
          </h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginTop: "0.75rem" }}>
            <li>React Hook used for <strong>DOM measurements and layout updates</strong>.</li>
            <li>Runs <strong>after React updates the DOM but before the browser paints the UI</strong>.</li>
            <li>Blocks the browser from painting until it finishes executing.</li>
          </ul>
        </div>

        {/* Common Uses of useLayoutEffect */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.025rem", marginBottom: "0.5rem" }}>🎯 Common Uses</h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
            <li>Measuring element size or position.</li>
            <li>Updating layout before display.</li>
            <li>Preventing UI flicker.</li>
            <li>Scroll position adjustments.</li>
            <li>Tooltip and modal positioning.</li>
          </ul>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.025rem", marginBottom: "0.5rem" }}>⭐ Important Points for useLayoutEffect</h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: "1.6" }}>
            <li>Runs <strong>before</strong> the browser paints the UI.</li>
            <li>Blocks painting until execution completes.</li>
            <li>Used when the UI must be updated before the user sees it to avoid visual artifacts.</li>
            <li>Avoid heavy operations because it can slow down rendering and cause performance lag.</li>
          </ul>
        </div>

        {/* Comparison Table */}
        <div style={{ marginTop: "2rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.1rem", marginBottom: "0.75rem" }}>⚖️ Difference: <code>useEffect</code> vs <code>useLayoutEffect</code></h4>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", color: "#e2e8f0" }}>
              <thead>
                <tr style={{ background: "rgba(99, 102, 241, 0.15)", borderBottom: "1px solid var(--border-color)", textAlign: "left" }}>
                  <th style={{ padding: "0.6rem 0.8rem" }}>Feature</th>
                  <th style={{ padding: "0.6rem 0.8rem" }}><code>useEffect</code></th>
                  <th style={{ padding: "0.6rem 0.8rem" }}><code>useLayoutEffect</code></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>Execution Timing</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Runs <strong>after</strong> the UI is painted.</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Runs <strong>before</strong> the UI is painted.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>UI Paint Blocking</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Does not block rendering.</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Blocks rendering until finished.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>Core Purpose</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Used for side effects.</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Used for DOM measurements and layout updates.</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0.8rem", fontWeight: "600", color: "#a5b4fc" }}>Best For</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>API calls, timers, event listeners.</td>
                  <td style={{ padding: "0.6rem 0.8rem" }}>Preventing flicker and measuring DOM size/position.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interview One-Liners */}
        <div style={{ background: "rgba(16, 185, 129, 0.1)", borderLeft: "4px solid #10b981", padding: "1.25rem", borderRadius: "8px", marginTop: "2rem" }}>
          <h4 style={{ color: "#a7f3d0", fontSize: "0.95rem", marginTop: 0, marginBottom: "0.5rem" }}>
            🎓 Interview One-Liners
          </h4>
          <ul style={{ paddingLeft: "1.25rem", color: "#d1fae5", fontSize: "0.88rem", margin: 0, lineHeight: "1.6" }}>
            <li>
              <strong><code>useEffect</code></strong>: Runs after the UI is rendered and is used for side effects like API calls, timers, event listeners, and subscriptions.
            </li>
            <li>
              <strong><code>useLayoutEffect</code></strong>: Runs after the DOM updates but before the browser paints the UI, making it ideal for DOM measurements and layout changes without visible flicker.
            </li>
          </ul>
        </div>

        {/* Code Snippet */}
        <div style={{ marginTop: "2.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.5rem" }}>📄 Code Example</h4>
          <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`import React, { useEffect, useLayoutEffect, useState } from "react";

const MyUseEffect = () => {
  console.log("Rendering...");

  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);

  // Runs before the browser paints
  useLayoutEffect(() => {
    console.log("useLayoutEffect - Height");
    setHeight(200);
  }, []);

  // Runs after the browser paints
  useEffect(() => {
    console.log("useEffect - Width");
    setWidth(600);
  }, []);

  return (
    <div
      style={{
        width: \`\${width}px\`,
        height: \`\${height}px\`,
        background: "blue",
        color: "white",
        textAlign: "center",
        padding: "20px",
        transition: "width 1s",
      }}
    >
      My useEffect & useLayoutEffect
    </div>
  );
};

export default MyUseEffect;`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MyUseEffect;