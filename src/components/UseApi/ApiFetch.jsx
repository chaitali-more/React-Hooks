import React, { use, useEffect, useState } from "react";

// Promise created outside the component to avoid re-fetching on every re-render
const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (response) => response.json(),
);

// Loading Fallback Component styled with Tailwind CSS for Suspense
export const LoadingFallback = () => {
  return (
    <div className="api-fetch-container animate-pulse" style={{ padding: "2rem 1rem" }}>
      {/* Header Skeleton */}
      <div className="api-fetch-header" style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div className="h-8 w-56 bg-slate-800 rounded-lg"></div>
          <div className="h-4 w-80 bg-slate-800/60 rounded-md"></div>
        </div>
        <div className="h-9 w-36 bg-indigo-950/60 border border-indigo-800/50 rounded-full"></div>
      </div>

      {/* Grid Skeleton */}
      <div className="api-fetch-grid" style={{ gap: "2.25rem" }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="api-fetch-card"
            style={{ minHeight: "220px", gap: "1.5rem" }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="h-8 w-12 bg-slate-800 rounded-lg"></div>
              <div className="h-6 bg-slate-800 rounded-md flex-1"></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
              <div className="h-4 bg-slate-800/60 rounded w-full"></div>
              <div className="h-4 bg-slate-800/60 rounded w-5/6"></div>
              <div className="h-4 bg-slate-800/60 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ApiFetch = () => {
  // --- OLD WAY (React 18 & Earlier) ---
  // const [posts, setPosts] = useState(null);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data);
  //       setLoading(false);
  //     });
  // }, []);
  //
  // if (loading) {
  //   return <div>Loading Posts...</div>;
  // }

  // --- NEW REACT 19 WAY ---
  // Read promise directly inside component without useEffect + useState!
  const posts = use(fetchPost);

  return (
    <div className="api-fetch-container" style={{ paddingTop: "1.5rem", paddingBottom: "3rem" }}>
      {/* Component Header Bar */}
      <div className="api-fetch-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem", paddingBottom: "1.75rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <h2 style={{ fontSize: "1.85rem", fontWeight: "700", color: "#ffffff", margin: 0 }}>All Posts</h2>
            <span className="api-fetch-badge" style={{ padding: "0.35rem 0.85rem", borderRadius: "9999px", background: "rgba(16, 185, 129, 0.15)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.3)", fontSize: "0.75rem", fontWeight: "600" }}>
              React 19 use() API
            </span>
          </div>
          <p className="api-fetch-subtitle" style={{ color: "#94a3b8", fontSize: "0.95rem", margin: "0.5rem 0 0 0", lineHeight: "1.6" }}>
            Fetched directly using React 19 <code style={{ background: "rgba(30, 27, 75, 0.9)", color: "#a5b4fc", padding: "0.2rem 0.5rem", borderRadius: "6px", border: "1px solid rgba(99, 102, 241, 0.4)" }}>use(promise)</code> + <code style={{ background: "rgba(30, 27, 75, 0.9)", color: "#a5b4fc", padding: "0.2rem 0.5rem", borderRadius: "6px", border: "1px solid rgba(99, 102, 241, 0.4)" }}>&lt;Suspense&gt;</code>
          </p>
        </div>
        
        <div className="api-fetch-total-badge" style={{ padding: "0.65rem 1.25rem", borderRadius: "12px", background: "rgba(30, 41, 59, 0.8)", border: "1px solid rgba(255, 255, 255, 0.12)", color: "#94a3b8", fontSize: "0.88rem", marginTop: "0.5rem" }}>
          Total Posts: <strong style={{ color: "#818cf8", marginLeft: "0.4rem", fontWeight: "700" }}>{posts?.length || 0}</strong>
        </div>
      </div>

      {/* Code Comparison Box */}
      <div className="api-fetch-comparison" style={{ marginBottom: "3rem", padding: "2rem", borderRadius: "18px", background: "rgba(15, 23, 42, 0.75)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <div className="api-fetch-comparison-header" style={{ fontSize: "1rem", fontWeight: "600", color: "#818cf8", marginBottom: "1.5rem" }}>
          💡 Why this code is cleaner:
        </div>
        <div className="api-fetch-comparison-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.75rem" }}>
          <div className="api-fetch-comparison-box old-way" style={{ padding: "1.5rem", borderRadius: "14px", background: "rgba(127, 29, 29, 0.25)", border: "1px solid rgba(239, 68, 68, 0.35)", color: "#fca5a5", lineHeight: "1.7" }}>
            <strong style={{ color: "#f87171", display: "block", marginBottom: "0.5rem", fontSize: "0.95rem" }}>❌ Old Way (React 18):</strong>
            Requires <code style={{ background: "rgba(185, 28, 28, 0.4)", color: "#fca5a5", padding: "0.2rem 0.5rem", borderRadius: "6px" }}>useState</code> + <code style={{ background: "rgba(185, 28, 28, 0.4)", color: "#fca5a5", padding: "0.2rem 0.5rem", borderRadius: "6px" }}>useEffect</code> + manual <code style={{ background: "rgba(185, 28, 28, 0.4)", color: "#fca5a5", padding: "0.2rem 0.5rem", borderRadius: "6px" }}>loading state</code> checking.
          </div>
          <div className="api-fetch-comparison-box new-way" style={{ padding: "1.5rem", borderRadius: "14px", background: "rgba(6, 78, 59, 0.25)", border: "1px solid rgba(16, 185, 129, 0.35)", color: "#6ee7b7", lineHeight: "1.7" }}>
            <strong style={{ color: "#34d399", display: "block", marginBottom: "0.5rem", fontSize: "0.95rem" }}>✅ New Way (React 19):</strong>
            Just <code style={{ background: "rgba(4, 120, 87, 0.4)", color: "#6ee7b7", padding: "0.2rem 0.5rem", borderRadius: "6px", fontFamily: "monospace" }}>const posts = use(fetchPost);</code> wrapped in <code style={{ background: "rgba(4, 120, 87, 0.4)", color: "#6ee7b7", padding: "0.2rem 0.5rem", borderRadius: "6px" }}>&lt;Suspense&gt;</code>!
          </div>
        </div>
      </div>

      {/* Posts Cards Grid (2 Columns per Row) */}
      <div className="api-fetch-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2.25rem", marginTop: "2.5rem" }}>
        {posts.map((post) => {
          return (
            <div 
              key={post.id}
              className="api-fetch-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                padding: "2.25rem 2rem",
                marginBottom: "0.5rem"
              }}
            >
              <div>
                <div className="api-fetch-card-header" style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", marginBottom: "1.5rem" }}>
                  <span className="api-fetch-card-id" style={{ width: "2.5rem", height: "2.5rem", borderRadius: "12px", background: "rgba(30, 27, 75, 0.85)", border: "1px solid rgba(99, 102, 241, 0.45)", color: "#818cf8", fontWeight: "700", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", flexShrink: 0 }}>
                    #{post.id}
                  </span>
                  <h3 className="api-fetch-card-title" style={{ fontSize: "1.15rem", fontWeight: "600", color: "#f8fafc", lineHeight: "1.5", margin: 0, textTransform: "capitalize" }}>
                    {post.title}
                  </h3>
                </div>
                <p className="api-fetch-card-body" style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.75", margin: "1.25rem 0 2rem 0", textTransform: "capitalize" }}>
                  {post.body}
                </p>
              </div>
              
              <div className="api-fetch-card-footer" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.5rem", marginTop: "auto", display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#64748b" }}>
                <span>User ID: {post.userId}</span>
                <span>JSONPlaceholder</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApiFetch;
