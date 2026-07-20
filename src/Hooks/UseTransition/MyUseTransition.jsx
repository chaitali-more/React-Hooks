import React, { useState, useTransition } from "react";

// Generate dummy product list for heavy rendering demo
const bigProductList = Array.from({ length: 5000 }, (_, i) => `Product #${i + 1} - High Performance Item`);

const MyUseTransition = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleLoadProducts = () => {
    startTransition(() => {
      setProducts(bigProductList);
    });
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value); // Urgent update: immediate input typing feedback
    startTransition(() => {
      // Non-urgent update: filtering big list in background
      const filtered = bigProductList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(filtered);
    });
  };

  const handleReset = () => {
    setProducts([]);
    setFilter("");
  };

  return (
    <div className="hook-demo-card">
      <div className="card-top-header">
        <span className="badge-info">useTransition Concurrent Hook</span>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Status: <strong style={{ color: isPending ? "#f59e0b" : "#10b981" }}>{isPending ? "⏳ Transition Pending..." : "✅ UI Ready"}</strong>
        </span>
      </div>

      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
        <code>useTransition</code> allows non-urgent state updates to run in the background, keeping the UI responsive while rendering large lists.
      </p>

      <div className="btn-group" style={{ marginTop: "0.5rem" }}>
        <button className="custom-btn custom-btn-primary" onClick={handleLoadProducts}>
          📦 Load 5,000 Products (startTransition)
        </button>
        <button className="custom-btn custom-btn-danger" onClick={handleReset}>
          🧹 Clear List
        </button>
      </div>

      {products.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <div className="form-field-group" style={{ maxWidth: "400px", marginBottom: "1rem" }}>
            <label>Filter Products (Non-urgent update):</label>
            <input
              className="custom-input"
              type="text"
              placeholder="Search products..."
              value={filter}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      )}

      {isPending ? (
        <div style={{ padding: "1.5rem", background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", borderRadius: "8px", color: "#fbbf24", textAlign: "center" }}>
          ⏳ <strong>Updating UI in background...</strong> Input stays responsive!
        </div>
      ) : products.length > 0 ? (
        <div style={{ marginTop: "1rem" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Showing <strong>{products.length}</strong> items:
          </span>
          <div style={{ maxHeight: "200px", overflowY: "auto", background: "rgba(0, 0, 0, 0.3)", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border-color)", marginTop: "0.5rem" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {products.slice(0, 50).map((item, index) => (
                <li key={index} style={{ padding: "0.3rem 0", color: "#e2e8f0", fontSize: "0.85rem", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  {item}
                </li>
              ))}
            </ul>
            {products.length > 50 && (
              <p style={{ color: "#818cf8", fontSize: "0.8rem", marginTop: "0.5rem", fontStyle: "italic" }}>
                ...and {products.length - 50} more items rendered in background without freezing UI!
              </p>
            )}
          </div>
        </div>
      ) : null}

      {/* Educational Revision Notes */}
      <div className="demo-notes-card" style={{ marginTop: "2rem" }}>
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.15rem" }}>
            📘 Revision Notes: useTransition Hook
          </h3>
          <span className="badge-info">React 18 Concurrent Feature</span>
        </div>

        <p style={{ color: "#e2e8f0", lineHeight: "1.6", marginTop: "0.5rem" }}>
          <code>useTransition</code> is a React Hook introduced in <strong>React 18</strong> that lets you mark <strong>non-urgent state updates</strong> as transitions. It keeps the UI responsive while React performs expensive rendering in the background.
        </p>

        <div style={{ background: "rgba(99, 102, 241, 0.1)", borderLeft: "3px solid #818cf8", padding: "0.85rem 1rem", borderRadius: "6px", margin: "1rem 0" }}>
          <p style={{ margin: 0, color: "#c7d2fe", fontSize: "0.9rem", lineHeight: "1.5" }}>
            <strong>Key Definition:</strong> <code>useTransition</code> is a React Hook that allows non-urgent state updates to be performed in the background. It returns <code>isPending</code> and <code>startTransition</code>, helping keep the UI responsive while expensive rendering is in progress.
          </p>
        </div>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
          Why do we use <code>useTransition</code>?
        </h4>
        <ul>
          <li>⚡ Keeps the UI responsive and interactive during heavy updates.</li>
          <li>❄️ Prevents the app from freezing during expensive renders.</li>
          <li>⏳ Shows a loading indicator while React updates the UI.</li>
          <li>🚀 Significantly improves user experience.</li>
        </ul>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          Basic Code Example:
        </h4>
        <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`const [products, setProducts] = useState([]);
const [isPending, startTransition] = useTransition();

<button
  onClick={() =>
    startTransition(() => {
      setProducts(bigProductList);
    })
  }
>
  Load Products
</button>

{isPending ? <p>Loading...</p> : <ProductList products={products} />}`}
        </pre>
      </div>
    </div>
  );
};

export default MyUseTransition;
