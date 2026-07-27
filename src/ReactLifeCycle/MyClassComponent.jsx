import React, { Component } from 'react';

// User's Class Component implementation
export class MyClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    console.log("1️⃣ Constructor: Initial Setup");
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("3️⃣ componentDidMount: Component added to DOM first time");
  }

  componentDidUpdate(prevProp, prevState) {
    console.log("4️⃣ componentDidUpdate: State/props change ", prevState);
  }

  componentWillUnmount() {
    console.log("5️⃣ componentWillUnmount: component removed from DOM");
  }

  render() {
    console.log("2️⃣ Render: UI Render");

    return (
      <div className="demo-card-container space-y-4" style={{ padding: "2rem 1.75rem" }}>
        <h3 className="text-xl font-bold text-white mb-2" style={{ marginBottom: "1rem" }}>Class Component Demo</h3>
        <h4 className="text-slate-200 text-lg font-semibold mb-4" style={{ marginBottom: "1.25rem" }}>Count: <span className="text-indigo-400 font-mono font-bold">{this.state.count}</span></h4>
        <div className="btn-group flex gap-3" style={{ gap: "0.75rem", marginBottom: "1rem" }}>
          <button
            className="custom-btn custom-btn-primary"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Increase
          </button>
          <button
            className="custom-btn"
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            Decrease
          </button>
        </div>
        <p className="text-sm text-slate-300 pt-3 border-t border-slate-800 leading-relaxed m-0" style={{ paddingTop: "1rem", marginTop: "1rem" }}>
          💡 Open browser console (<code>F12</code> → Console) to observe lifecycle order: <code>Constructor</code> → <code>Render</code> → <code>componentDidMount</code> / <code>componentDidUpdate</code>!
        </p>
      </div>
    );
  }
}

const MyClassComponent = () => {
  return (
    <div className="use-action-state-page space-y-8" style={{ padding: "1.5rem 0" }}>
      {/* Live Interactive Class Component Demo */}
      <div className="action-state-grid grid grid-cols-1 md:grid-cols-2 gap-6" style={{ gap: "1.75rem", marginBottom: "2rem" }}>
        <div className="action-state-card new-way" style={{ padding: "2rem 1.75rem" }}>
          <span className="card-badge-tag success" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
            ⚡ Live Class Component Lifecycle Demo
          </span>
          <MyClassComponentDemo />
        </div>

        {/* Quick Lifecycle Rules Card */}
        <div className="action-state-card old-way" style={{ padding: "2rem 1.75rem" }}>
          <span className="card-badge-tag warning" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
            📌 3 Main Lifecycle Phases
          </span>
          <h4 className="text-white font-bold text-lg mb-3" style={{ marginTop: "0.5rem", marginBottom: "1.25rem" }}>Class Component Lifecycle Order</h4>
          <div className="flex flex-col gap-3 text-sm text-slate-300" style={{ gap: "1rem" }}>
            <div className="bg-slate-950/70 border border-slate-800/80 font-mono leading-relaxed" style={{ padding: "1.25rem", borderRadius: "12px" }}>
              <span className="text-emerald-400 font-bold block mb-1" style={{ marginBottom: "0.4rem" }}>1. Mounting:</span> constructor → render → componentDidMount
            </div>
            <div className="bg-slate-950/70 border border-slate-800/80 font-mono leading-relaxed" style={{ padding: "1.25rem", borderRadius: "12px" }}>
              <span className="text-amber-400 font-bold block mb-1" style={{ marginBottom: "0.4rem" }}>2. Updating:</span> render → componentDidUpdate
            </div>
            <div className="bg-slate-950/70 border border-slate-800/80 font-mono leading-relaxed" style={{ padding: "1.25rem", borderRadius: "12px" }}>
              <span className="text-rose-400 font-bold block mb-1" style={{ marginBottom: "0.4rem" }}>3. Unmounting:</span> componentWillUnmount
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Methods Detailed Breakdown */}
      <div className="demo-notes-card" style={{ padding: "2.25rem 2rem", marginTop: "2.5rem", marginBottom: "2.5rem" }}>
        <h3 className="text-xl font-bold text-indigo-300 flex items-center gap-2" style={{ marginBottom: "1.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          🔍 Class Component Lifecycle Methods Explained
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ gap: "1.75rem", marginTop: "1.75rem" }}>
          <div className="bg-slate-900/90 border border-slate-800/90 shadow-md" style={{ padding: "1.75rem 1.5rem", borderRadius: "16px", minHeight: "190px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="text-indigo-400 font-bold text-base block" style={{ marginBottom: "0.85rem", display: "block" }}>1. constructor(props)</span>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
                Runs first before component mounts. Used to initialize <code className="bg-slate-950 px-1.5 py-0.5 rounded text-indigo-300" style={{ padding: "0.15rem 0.45rem", borderRadius: "6px" }}>this.state</code> and bind event handler methods.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/90 shadow-md" style={{ padding: "1.75rem 1.5rem", borderRadius: "16px", minHeight: "190px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="text-emerald-400 font-bold text-base block" style={{ marginBottom: "0.85rem", display: "block" }}>2. componentDidMount()</span>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
                Invoked immediately after component is inserted into the DOM. Ideal for API data fetching, subscriptions, and timers.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/90 shadow-md" style={{ padding: "1.75rem 1.5rem", borderRadius: "16px", minHeight: "190px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="text-amber-400 font-bold text-base block" style={{ marginBottom: "0.85rem", display: "block" }}>3. componentDidUpdate()</span>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
                Invoked after state or prop updates happen. Provides access to <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300" style={{ padding: "0.15rem 0.45rem", borderRadius: "6px" }}>prevProps</code> and <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300" style={{ padding: "0.15rem 0.45rem", borderRadius: "6px" }}>prevState</code>.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800/90 shadow-md" style={{ padding: "1.75rem 1.5rem", borderRadius: "16px", minHeight: "190px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="text-rose-400 font-bold text-base block" style={{ marginBottom: "0.85rem", display: "block" }}>4. componentWillUnmount()</span>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ margin: 0, lineHeight: "1.7" }}>
                Invoked immediately before component is destroyed/removed. Used for cleanup (clearing intervals, cancelling network requests).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison: Class Component vs Functional Component (Hooks) */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl" style={{ padding: "2.25rem 2rem", margin: "2.5rem 0" }}>
        <h3 className="text-xl font-bold text-white" style={{ marginBottom: "1.5rem" }}>📊 Class Component Methods vs React Hooks</h3>

        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Class Component Method</th>
                <th>Functional Component Hook Equivalent</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>constructor() / this.state</code></td>
                <td><code>useState()</code> / <code>useReducer()</code></td>
                <td>Initialize component state</td>
              </tr>
              <tr>
                <td><code>componentDidMount()</code></td>
                <td><code>useEffect(() =&gt; &#123;...&#125;, [])</code></td>
                <td>Run once after initial DOM render</td>
              </tr>
              <tr>
                <td><code>componentDidUpdate()</code></td>
                <td><code>useEffect(() =&gt; &#123;...&#125;, [state])</code></td>
                <td>Run after state/prop changes</td>
              </tr>
              <tr>
                <td><code>componentWillUnmount()</code></td>
                <td><code>useEffect(() =&gt; &#123; return () =&gt; cleanup &#125;, [])</code></td>
                <td>Cleanup resources before unmounting</td>
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
          &ldquo;<strong>Class component lifecycles manage Mounting, Updating, and Unmounting using explicit methods (<code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>), whereas Functional Components simplify these into the unified <code>useEffect</code> Hook.</strong>&rdquo;
        </blockquote>
      </div>

      {/* Complete Code Reference Block */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl" style={{ padding: "2.25rem 2rem", margin: "2.5rem 0" }}>
        <h3 className="text-xl font-bold text-white flex items-center gap-2" style={{ marginBottom: "1.25rem" }}>
          💻 Complete Code Reference
        </h3>
        <p className="text-sm text-slate-300" style={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}>
          Full source code of <code>MyClassComponent.jsx</code> implementation:
        </p>

        <pre className="code-block-box" style={{ padding: "1.5rem", borderRadius: "14px" }}>
{`import React, { Component } from 'react';
// rcc

export default class MyClassComponent extends Component {

  constructor(props){
    super(props);
    console.log("1️⃣ Constructor: Initial Setup");
    this.state = {count: 0}
  }
   
  componentDidMount(){
    console.log("3️⃣ componentDidMount: Component added to DOM first time");  
  }

  componentDidUpdate(prevProp, prevState){
    console.log("4️⃣ componentDidUpdate: State/props change ", prevState); 
  }

  componentWillUnmount(){
    console.log("5️⃣ componentWillUnmount: component removed from DOM");
    
  }
  render() {
    console.log("2️⃣ Render: UI Render");
    
    return (
      <div>
        <h1>Class Component</h1>

        <h4>Count: {this.state.count}</h4>
        <button
        onClick={()=>{this.setState({count:this.state.count + 1})}}
        >Increase</button>
        <button
        onClick={()=>{this.setState({count:this.state.count - 1})}}
        >
          Decrease
        </button>
      </div>
    )
  }
}`}
        </pre>
      </div>
    </div>
  );
};

export default MyClassComponent;
