import React from "react";
import TodoList from "./TodoList";

const UseOptimistic = () => {
  return (
    <div className="use-action-state-page">
      {/* Informational Header Helper */}
      <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-3.5 flex items-center gap-3 text-sm text-slate-200">
        <span>💡 <strong>Live Demo note:</strong> Adding a todo triggers an instant optimistic update with <code>pending: true</code> state. The server simulation completes after a <strong>5-second delay</strong>.</span>
      </div>

      {/* Live Interactive Demo Section */}
      <div className="action-state-grid">
        {/* Main Todo Demo Card */}
        <div className="action-state-card new-way">
          <div>
            <span className="card-badge-tag success">
              ✨ React 19 useOptimistic Live Demo
            </span>
            <TodoList />
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700/40">
            <p className="text-sm text-slate-300 m-0 leading-normal">
              Notice how the item appears <strong>instantly</strong> in the list as <code>"Adding... (5s delay)"</code> before the server action actually finishes!
            </p>
          </div>
        </div>

        {/* Concept Card */}
        <div className="action-state-card old-way">
          <div>
            <span className="card-badge-tag warning">
              🧠 How Optimistic UI Works
            </span>
            <h4 className="text-white font-bold text-base mb-2">Instant Feedback + Auto Sync</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              Traditional web apps wait for the server response before updating the UI, making users feel latency.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              <strong><code>useOptimistic</code></strong> allows React to show temporary state <em>immediately</em> while an asynchronous request is in flight. Once the server confirms (or rejects), React automatically updates to the true final state!
            </p>
            <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 text-xs text-amber-300 font-mono">
              ⚡ UI updates in 0ms (instant)<br />
              ⏳ Server saves in background<br />
              🔄 Auto-sync when finished
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Summary Banner */}
      <div className="benefits-banner">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          🚀 Key Benefits of React 19 <code>useOptimistic</code>
        </h3>
        <p className="text-sm text-slate-300 mt-1 mb-4">
          React 19 makes optimistic UI updates declarative and effortless without complex state management.
        </p>

        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span><strong>Zero Latency Perception</strong> for users</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🔁</span>
            <span><strong>Automatic Fallback/Rollback</strong> if server fails</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📦</span>
            <span><strong>Declarative State</strong> linked directly to server action</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🧹</span>
            <span><strong>Clean Code</strong> without manual temporary array manipulation</span>
          </div>
        </div>
      </div>

      {/* Hook Signature Breakdown */}
      <div className="demo-notes-card mt-0">
        <h3>🔍 Hook Signature Breakdown</h3>
        <div className="code-block-box">
          <code>const [optimisticState, setOptimisticState] = useOptimistic(passthroughState, updateFn);</code>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">1. passthroughState</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              The real state value (e.g. <code>todos</code> state from <code>useState</code>). When no action is pending, this is returned.
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">2. updateFn</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Function <code>(currentState, optimisticValue) =&gt; nextOptimisticState</code> that combines existing state with optimistic item.
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">3. optimisticState</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              The state to render in UI. Contains optimistic items while async action runs, or actual state when idle.
            </p>
          </div>
          <div className="bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
            <span className="text-indigo-300 font-bold text-sm">4. setOptimisticState</span>
            <p className="text-sm text-slate-300 mt-1 m-0">
              Function dispatched inside server action to instantly apply temporary optimistic update.
            </p>
          </div>
        </div>
      </div>

      {/* Execution Flow Diagram */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white m-0">🔄 Execution Flow Comparison</h3>
        <p className="text-sm text-slate-300 mt-1">
          See how <code>useOptimistic</code> improves perceived performance over traditional async updating.
        </p>

        <div className="flow-diagram-container">
          {/* Traditional Flow */}
          <div className="flow-box">
            <span className="text-amber-400 font-bold text-sm">Traditional Async Flow</span>
            <div className="flow-steps">
              <div className="flow-step">1. User clicks Add Todo</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">2. Show loading spinner / disable UI</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">3. Wait 5 seconds for API response</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">4. <code>setTodos()</code> updates UI (5s delay)</div>
            </div>
          </div>

          {/* Optimistic Flow */}
          <div className="flow-box">
            <span className="text-emerald-400 font-bold text-sm">React 19 Optimistic Flow</span>
            <div className="flow-steps">
              <div className="flow-step">1. User clicks Add Todo</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">2. <code>setOptimisticTodo()</code> renders instantly (0ms)</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">3. API request runs in background (5s)</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-step">4. <code>setTodos()</code> confirms state (Auto sync)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Comparison Table */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white m-0">📊 State vs useOptimistic Comparison</h3>

        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Standard State (<code>useState</code>)</th>
                <th>React 19 (<code>useOptimistic</code>)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>UI Update Trigger</strong></td>
                <td>Waits for network / async promise to complete</td>
                <td>Triggers immediately when action is dispatched</td>
              </tr>
              <tr>
                <td><strong>Perceived Speed</strong></td>
                <td>Slower (depends on network speed)</td>
                <td>Instant (0ms response time)</td>
              </tr>
              <tr>
                <td><strong>Pending State Handling</strong></td>
                <td>Manual temporary array / pending flags</td>
                <td>Declarative <code>updateFn</code> handles pending state automatically</td>
              </tr>
              <tr>
                <td><strong>Reversion / Cleanup</strong></td>
                <td>Requires manual rollback catch blocks</td>
                <td>Automatically reverts back to actual state if action completes or fails</td>
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
          &ldquo;<strong><code>useOptimistic</code> is a React 19 hook that allows you to optimistically update the UI while an async operation is underway, providing instant responsiveness to users and automatically reverting or syncing with actual state when finished.</strong>&rdquo;
        </blockquote>
      </div>

      {/* Complete Code Reference Section */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 m-0">
          💻 Complete Code Reference
        </h3>
        <p className="text-sm text-slate-300 mt-1 mb-5">
          Inspect the full code implementation of <code>TodoList.jsx</code> below.
        </p>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-emerald-400 font-bold text-sm">1. TodoList.jsx</span>
              <span className="text-sm text-slate-400">useOptimistic + Form Action + Simulated Async API</span>
            </div>
            <pre className="code-block-box">
{`import React, { useOptimistic, useState } from "react";

const TodoList = () => {
  // Actual state from backend/database
  const [todos, setTodos] = useState([
    { text: "Learn React 19 Hooks", pending: false },
    { text: "Master useOptimistic", pending: false }
  ]);

  // useOptimistic(passthroughState, updateFn)
  const [optimisticTodo, setOptimisticTodo] = useOptimistic(
    todos,
    (oldTodo, newTodo) => [
      ...oldTodo,
      {
        text: newTodo,
        pending: true,
      },
    ],
  );

  const handleAddTodo = async (formData) => {
    const newTodo = formData.get("todo");
    if (!newTodo || !newTodo.trim()) return;

    // 1. Immediately update UI optimistically
    setOptimisticTodo(newTodo);

    // 2. Simulate 5-second backend network request
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // 3. Update actual state after server confirmation
    setTodos((prev) => [...prev, { text: newTodo, pending: false }]);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-white mb-4">Optimistic Todo List</h3>

      <form action={handleAddTodo} className="flex gap-2 mb-6">
        <input
          type="text"
          name="todo"
          placeholder="Add Todo Item"
          required
        />
        <button type="submit">Add Todo</button>
      </form>

      {optimisticTodo.map((todo, index) => (
        <div key={index} className={todo.pending ? "pending-item" : "done-item"}>
          {todo.text}
          {todo.pending && <span>Adding... (5s delay)</span>}
        </div>
      ))}
    </div>
  );
};

export default TodoList;`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseOptimistic;
