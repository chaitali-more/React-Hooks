import React, { useOptimistic, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React 19 Hooks", pending: false },
    { text: "Master useOptimistic", pending: false }
  ]);

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
    setOptimisticTodo(newTodo);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setTodos((prev) => [...prev, { text: newTodo, pending: false }]);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>📝</span> Optimistic Todo List
      </h3>

      <form action={handleAddTodo} className="flex gap-2 mb-6">
        <input
          type="text"
          name="todo"
          placeholder="Add a new todo item..."
          required
          className="flex-1 bg-slate-900 border border-slate-700/80 text-slate-100 placeholder-slate-400 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-all flex items-center gap-1.5 shadow-lg shadow-indigo-600/20 active:scale-95 cursor-pointer"
        >
          Add Todo
        </button>
      </form>

      <div className="space-y-2.5 min-h-[160px]">
        {optimisticTodo.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-sm bg-slate-900/40 rounded-xl border border-slate-800/80">
            No items in todo list yet. Add one above!
          </div>
        ) : (
          optimisticTodo.map((todo, index) => {
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                  todo.pending
                    ? "bg-amber-950/20 border-amber-500/40 text-amber-200 animate-pulse"
                    : "bg-slate-900/60 border-slate-800 text-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={todo.pending ? "text-amber-400" : "text-emerald-400"}>
                    {todo.pending ? "⏳" : "✅"}
                  </span>
                  <span className="font-medium text-sm">{todo.text} </span>
                  {todo.pending && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    
                    Adding... (5s delay)
                  </span>
                )}
                </div>

                
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodoList;
