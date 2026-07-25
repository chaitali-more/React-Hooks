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
      <div className="demo-card-container">
        <h3 className="text-lg font-bold text-white mb-2">Class Component Demo</h3>
        <h4 className="text-slate-200 text-base mb-3">Count: {this.state.count}</h4>
        <div className="btn-group">
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
        <p className="text-sm text-slate-300 mt-3 m-0">
          💡 Open browser console (<code>F12</code> → Console) to observe lifecycle order: <code>Constructor</code> → <code>Render</code> → <code>componentDidMount</code> / <code>componentDidUpdate</code>!
        </p>
      </div>
    );
  }
}

const MyClassComponent = () => {
  return (
    <div className="use-action-state-page">
      {/* Live Interactive Class Component Demo */}
      <div className="action-state-grid">
        <div className="action-state-card new-way">
          <span className="card-badge-tag success">
            ⚡ Live Class Component Lifecycle Demo
          </span>
          <MyClassComponentDemo />
        </div>

        {/* Quick Lifecycle Rules Card */}
        <div className="action-state-card old-way">
          <span className="card-badge-tag warning">
            📌 3 Main Lifecycle Phases
          </span>
          <h4 className="text-white font-bold text-base mb-2">Class Component Lifecycle Order</h4>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 font-mono">
              <span className="text-emerald-400 font-bold">1. Mounting:</span> constructor → render → componentDidMount
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 font-mono">
              <span className="text-amber-400 font-bold">2. Updating:</span> render → componentDidUpdate
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 font-mono">
              <span className="text-rose-400 font-bold">3. Unmounting:</span> componentWillUnmount
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Methods Detailed Breakdown */}
      <div className="demo-notes-card mt-0">
        <h3>🔍 Class Component Lifecycle Methods Explained</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">1. constructor(props)</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Runs first before component mounts. Used to initialize <code>this.state</code> and bind event handler methods.
            </p>
          </div>

          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-emerald-300 font-bold text-sm">2. componentDidMount()</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Invoked immediately after component is inserted into the DOM. Ideal for API data fetching, subscriptions, and timers.
            </p>
          </div>

          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-amber-300 font-bold text-sm">3. componentDidUpdate()</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Invoked after state or prop updates happen. Provides access to <code>prevProps</code> and <code>prevState</code>.
            </p>
          </div>

          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-rose-300 font-bold text-sm">4. componentWillUnmount()</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Invoked immediately before component is destroyed/removed. Used for cleanup (clearing intervals, cancelling network requests).
            </p>
          </div>
        </div>
      </div>

      {/* Comparison: Class Component vs Functional Component (Hooks) */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white m-0">📊 Class Component Methods vs React Hooks</h3>

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
      <div className="interview-banner">
        <h4 className="text-purple-300 font-bold text-base flex items-center gap-1.5 m-0">
          ⭐ Interview One-Liner
        </h4>
        <blockquote className="text-slate-100 text-sm italic leading-relaxed mt-2 m-0">
          &ldquo;<strong>Class component lifecycles manage Mounting, Updating, and Unmounting using explicit methods (<code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>), whereas Functional Components simplify these into the unified <code>useEffect</code> Hook.</strong>&rdquo;
        </blockquote>
      </div>

      {/* Complete Code Reference Block */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          💻 Complete Code Reference
        </h3>
        <p className="text-sm text-slate-300 mt-1 mb-4">
          Full source code of <code>MyClassComponent.jsx</code> implementation:
        </p>

        <pre className="code-block-box">
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
