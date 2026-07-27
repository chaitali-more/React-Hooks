import React from "react";
import { useUserDetails } from "../context/UserContext";

const MyUseContext = () => {
  const { name, setName } = useUserDetails();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
      {/* Interactive Demo Card */}
      <div className="hook-demo-card">
        <div className="card-top-header">
          <span className="badge-info">useContext Interactive Demo</span>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Context Provider: <strong style={{ color: "#c084fc" }}>UserContextProvider</strong>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ padding: "1.25rem", background: "rgba(0, 0, 0, 0.2)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block" }}>
              Global State (Consumed from Context):
            </span>
            <h3 style={{ fontSize: "1.8rem", color: "#818cf8", marginTop: "0.25rem", marginBottom: 0 }}>
              Name: {name || "(empty)"}
            </h3>
          </div>

          <div className="form-field-group">
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.95rem" }}>
              Modify Global Name (Propagates instantly to Navbar and all pages):
            </label>
            <input
              type="text"
              className="custom-input"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Revision Notes Card */}
      <div className="demo-notes-card">
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.2rem" }}>
            💡 Revision Notes: Context API & useContext
          </h3>
          <span className="badge-info">Global State API</span>
        </div>
        {/* ✨ React 19 Feature Note */}
        <div style={{ background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "10px", padding: "1.25rem", marginTop: "1.5rem" }}>
          <div style={{ display: "flex", items: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "1.1rem" }}>✨</span>
            <h4 style={{ margin: 0, color: "#34d399", fontSize: "1rem", fontWeight: "700" }}>
              React 19 Improvement: Render <code style={{ background: "rgba(6, 78, 59, 0.6)", color: "#6ee7b7", padding: "0.15rem 0.4rem", borderRadius: "4px" }}>&lt;Context&gt;</code> directly as a Provider!
            </h4>
          </div>
          <p style={{ color: "#e2e8f0", fontSize: "0.9rem", lineHeight: "1.6", margin: "0.5rem 0" }}>
            Starting in <strong>React 19</strong>, you can render <code>&lt;Context&gt;</code> directly as a provider instead of writing <code>&lt;Context.Provider&gt;</code>!
          </p>
          <pre style={{ background: "#090d16", border: "1px solid rgba(16, 185, 129, 0.25)", padding: "0.75rem 1rem", borderRadius: "8px", color: "#34d399", fontSize: "0.85rem", overflowX: "auto", margin: "0.75rem 0 0.5rem 0" }}>
{`// React 19: <ThemeContext> rendered directly as provider!
const ThemeContext = createContext('');

function App({ children }) {
  return (
    <ThemeContext value="dark">
      {children}
    </ThemeContext>
  );
}`}
          </pre>
          <p style={{ color: "#a7f3d0", fontSize: "0.85rem", margin: "0.5rem 0 0 0" }}>
            💡 <strong>Note:</strong> In future React versions, <code>&lt;Context.Provider&gt;</code> will be deprecated. A codemod will convert existing providers automatically.
          </p>
        </div>

        {/* Section 1: Why Context API */}
        <div style={{ marginTop: "1.75rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.4rem" }}>
            ❓ Why do we need Context API?
          </h4>
          <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.6", marginTop: "0.75rem" }}>
            <li>Used to <strong>share data globally</strong> between components.</li>
            <li>Avoids <strong>prop drilling</strong> (passing props through many intermediate components).</li>
            <li>Context API is a React feature used to share data globally between components without prop drilling. It is implemented using <code>createContext()</code> to create a context, <code>Provider</code> to supply the data, and <code>useContext()</code> to consume it in any child component.</li>
          </ul>
        </div>

        {/* The 3 steps of Context */}
        <div style={{ marginTop: "1.5rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.75rem" }}>🛠️ Basic Implementation Steps</h4>
          
          {/* Step 1 */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h5 style={{ color: "#818cf8", fontSize: "0.95rem", margin: "0 0 0.35rem 0" }}>1. <code>createContext()</code></h5>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", margin: "0 0 0.5rem 0" }}>
              Creates a new Context object. Usually stored in a separate file.
            </p>
            <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "0.75rem", borderRadius: "6px", color: "#a5b4fc", fontSize: "0.82rem", overflowX: "auto" }}>
{`import { createContext } from "react";

export const userContext = createContext(null);`}
            </pre>
          </div>

          {/* Step 2 */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h5 style={{ color: "#fb7185", fontSize: "0.95rem", margin: "0 0 0.35rem 0" }}>2. <code>Provider</code></h5>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", margin: "0 0 0.5rem 0" }}>
              Makes data available to all child components. Wraps the components that need access. <strong>Remember:</strong> Data is passed using the <code>value</code> prop.
            </p>
            <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "0.75rem", borderRadius: "6px", color: "#a5b4fc", fontSize: "0.82rem", overflowX: "auto" }}>
{`const [name, setName] = useState("Chaitali");

<userContext.Provider value={{ name, setName }}>
  <App />
</userContext.Provider>`}
            </pre>
          </div>

          {/* Step 3 */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h5 style={{ color: "#34d399", fontSize: "0.95rem", margin: "0 0 0.35rem 0" }}>3. <code>useContext()</code></h5>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", margin: "0 0 0.5rem 0" }}>
              Reads the data from the nearest Provider. No need to pass props manually.
            </p>
            <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "0.75rem", borderRadius: "6px", color: "#a5b4fc", fontSize: "0.82rem", overflowX: "auto" }}>
{`const { name, setName } = useContext(userContext);`}
            </pre>
          </div>
        </div>

        {/* Tree structure comparison */}
        <div style={{ background: "rgba(255,255,255,0.03)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)", margin: "1.5rem 0" }}>
          <h5 style={{ color: "#ffffff", fontSize: "0.9rem", marginTop: 0, marginBottom: "0.5rem" }}>🌳 With Context API Component Hierarchy:</h5>
          <pre style={{ background: "#090d16", padding: "0.5rem", borderRadius: "4px", fontSize: "0.8rem", color: "#38bdf8", margin: 0 }}>
{`App (Provider)
 ├── Parent
 ├── Child
 └── GrandChild (useContext)`}
          </pre>
        </div>

        {/* Advanced usage custom hooks */}
        <div style={{ marginTop: "2rem" }}>
          <h4 style={{ color: "#ffffff", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.4rem" }}>
            🚀 Advanced Context API Usage: Creating Custom Hooks for Context
          </h4>
          <p style={{ color: "var(--text-main)", fontSize: "0.925rem", lineHeight: "1.6", marginTop: "0.75rem" }}>
            In advanced React Context API, we create a <strong>custom hook</strong> to consume the context and a <strong>separate Provider component</strong> to wrap the application. This keeps the code reusable, cleaner, and easier to maintain while avoiding repetitive <code>useContext()</code> calls and prop drilling.
          </p>

          <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto", marginTop: "1rem" }}>
{`// context/UserContext.jsx
import { createContext, useContext } from "react";

export const userContext = createContext(null);

// custom hook
export const useUserDetails = () => {
    const userContext1 = useContext(userContext);
    if(!userContext1){
        throw new Error("useUserDetails must be inside UserContextProvider")
    }
    return userContext1;
}

export const UserContextProvider  = ({ children, userDetails }) => {
  return (
    <userContext.Provider value={userDetails}>
        {children}
    </userContext.Provider>
  );
};

// App.jsx - Parent Component
const [name, setName] = useState("Chaitali More");
import { UserContextProvider } from "./context/UserContext";

<UserContextProvider userDetails={{ name, setName }}>
    <Parent />
</UserContextProvider>

// Child Component
import { useUserDetails } from "../../context/UserContext";

const { name, setName } = useUserDetails();`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MyUseContext;
