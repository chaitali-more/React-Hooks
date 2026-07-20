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
    </div>
  );
};

export default MyUseTranslation;