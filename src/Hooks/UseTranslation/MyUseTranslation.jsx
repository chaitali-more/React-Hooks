import React from "react";
import { useTranslation } from "react-i18next";

const MyUseTranslation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="hook-demo-card">
      <div className="card-top-header">
        <span className="badge-info">i18n Internationalization</span>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Current Language: <strong style={{ color: "#818cf8", textTransform: "uppercase" }}>{i18n.language}</strong></span>
      </div>

      <div style={{ padding: "1.5rem", background: "rgba(0, 0, 0, 0.25)", borderRadius: "12px", border: "1px solid var(--border-color)", textAlign: "left", margin: "0.5rem 0" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Translated Message key `t("welcome")`:</span>
        <h2 style={{ fontSize: "2.25rem", background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginTop: "0.5rem" }}>
          {t("welcome")}
        </h2>
      </div>

      <div className="btn-group" style={{ justifyContent: "flex-start", marginTop: "1rem" }}>
        <button
          className={`custom-btn ${i18n.language === "en" ? "custom-btn-primary" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          🇺🇸 English (EN)
        </button>

        <button
          className={`custom-btn ${i18n.language === "hi" ? "custom-btn-primary" : ""}`}
          onClick={() => changeLanguage("hi")}
        >
          🇮🇳 Hindi (HI)
        </button>
      </div>

      <div className="demo-notes-card" style={{ marginTop: "2rem" }}>
        <div className="card-top-header">
          <h3 style={{ margin: 0, color: "#a5b4fc", fontSize: "1.15rem" }}>
            📘 Revision Notes: useTransition Hook
          </h3>
          <span className="badge-info">React 18 Concurrent Feature</span>
        </div>

        <p style={{ color: "#e2e8f0", lineHeight: "1.6", marginTop: "0.5rem" }}>
          <code>useTransition</code> is a React Hook that lets you mark <strong>non-urgent state updates</strong> as transitions. It keeps the UI responsive while React performs expensive rendering in the background.
        </p>

        <div style={{ background: "rgba(99, 102, 241, 0.1)", borderLeft: "3px solid #818cf8", padding: "0.85rem 1rem", borderRadius: "6px", margin: "1rem 0" }}>
          <p style={{ margin: 0, color: "#c7d2fe", fontSize: "0.9rem", lineHeight: "1.5" }}>
            <strong>Key Definition:</strong> <code>useTransition</code> is a React Hook that allows non-urgent state updates to be performed in the background. It returns <code>isPending</code> and <code>startTransition</code>, helping keep the UI responsive while expensive rendering is in progress.
          </p>
        </div>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
          Why do we use <code>useTransition</code>?
        </h4>
        <ul style={{ paddingLeft: "1.25rem", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>
          <li>⚡ Keeps the UI responsive and interactive.</li>
          <li>❄️ Prevents the app from freezing during expensive updates.</li>
          <li>⏳ Shows a loading indicator while React updates the UI.</li>
          <li>🚀 Significantly improves user experience.</li>
        </ul>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          Code Example:
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

export default MyUseTranslation;