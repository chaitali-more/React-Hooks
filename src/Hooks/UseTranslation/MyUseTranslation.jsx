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
            📘 Revision Notes: useTranslation (i18n) Hook
          </h3>
          <span className="badge-info">Internationalization</span>
        </div>

        <p style={{ color: "#e2e8f0", lineHeight: "1.6", marginTop: "0.5rem" }}>
          <code>useTranslation</code> is a custom React hook from <code>react-i18next</code> that enables multi-language support (internationalization) in your React application.
        </p>

        <div style={{ background: "rgba(99, 102, 241, 0.1)", borderLeft: "3px solid #818cf8", padding: "0.85rem 1rem", borderRadius: "6px", margin: "1rem 0" }}>
          <p style={{ margin: 0, color: "#c7d2fe", fontSize: "0.9rem", lineHeight: "1.5" }}>
            <strong>Key Definition:</strong> It provides the translation function <code>t()</code> to look up localized string keys and the <code>i18n</code> instance to switch active languages dynamically.
          </p>
        </div>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginTop: "1.25rem", marginBottom: "0.5rem" }}>
          Why do we use <code>useTranslation</code>?
        </h4>
        <ul>
          <li>🌐 Supports multi-language internationalization (English, Hindi, etc.).</li>
          <li>⚡ Dynamic language switching without full page reloads.</li>
          <li>📦 Keeps translation content separate from component UI logic.</li>
        </ul>

        <h4 style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          Basic Code Example:
        </h4>
        <pre style={{ background: "#090d16", border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", color: "#a5b4fc", fontSize: "0.85rem", overflowX: "auto" }}>
{`import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button onClick={() => i18n.changeLanguage("hi")}>Hindi</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
    </div>
  );
};`}
        </pre>
      </div>
    </div>
  );
};

export default MyUseTranslation;