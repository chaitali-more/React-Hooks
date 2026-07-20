import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    {
      title: "useState Hook",
      description: "Manage component state with arrays, booleans, counter functions, and objects. Demonstrates asynchronous batch updates and state change logging.",
      tag: "Hook",
      path: "/use-state",
      icon: "⚡",
    },
    {
      title: "useEffect Hook",
      description: "Perform side effects, set dimensions, and contrast the behavior of layout effects with standard post-render effects.",
      tag: "Hook",
      path: "/use-effect",
      icon: "🌊",
    },
    {
      title: "useRef Hook",
      description: "Create mutable variables that do not trigger re-renders, and directly select, style, or focus elements in the DOM.",
      tag: "Hook",
      path: "/use-ref",
      icon: "🎯",
    },
    {
      title: "forwardRef & Context API",
      description: "Expose child functions up to parent components with custom refs and pass global user state down using React Context API (`UserContextProvider`).",
      tag: "Hook & Context",
      path: "/forward-ref",
      icon: "🔑",
    },
    {
      title: "useReducer (Counter)",
      description: "Manage complex state transitions cleanly using pure reducer functions and action dispatches for increment, decrement, and reset.",
      tag: "Hook",
      path: "/use-reducer-counter",
      icon: "🧮",
    },
    {
      title: "useReducer (Form)",
      description: "Handle dynamic multi-field form state updates with a centralized reducer action handler and clean state reset functionality.",
      tag: "Hook",
      path: "/use-reducer-form",
      icon: "📋",
    },
    {
      title: "useMemo & useCallback",
      description: "Optimize application performance by memoizing expensive calculation results and preserving callback function references.",
      tag: "Hook",
      path: "/use-memo",
      icon: "🚀",
    },
    {
      title: "useID Hook",
      description: "Generate unique, SSR-safe accessibility identifiers to link form labels with inputs reliably across renders.",
      tag: "Hook",
      path: "/use-id",
      icon: "🆔",
    },
    {
      title: "useTranslation Hook",
      description: "Implement internationalization (i18n) and smooth language switching (English / Hindi) dynamically across your app.",
      tag: "Hook",
      path: "/use-translation",
      icon: "🌐",
    },
    {
      title: "useTransition Hook",
      description: "Mark non-urgent state updates as background transitions to prevent application UI freezes during heavy rendering.",
      tag: "Hook",
      path: "/use-transition",
      icon: "⏳",
    },
    {
      title: "Class Component Lifecycle",
      description: "See classical React lifecycle phases in action (constructor setup, mount triggers, state updates, and unmount logs).",
      tag: "Lifecycle",
      path: "/class-component",
      icon: "🏗️",
    },
    {
      title: "Function Component Lifecycle",
      description: "Modern lifecycle tracking showing how cleanup functions run when unmounting or changing specific state dependencies.",
      tag: "Lifecycle",
      path: "/function-component",
      icon: "⏱️",
    },
  ];

  return (
    <div className="home-page">
      <div className="dashboard-header">
        <h1>React Hooks & Lifecycle Lab</h1>
        <p>Interactive dashboard to explore React mechanisms, rendering cycles, and custom ref handles.</p>
      </div>

      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <div key={index} className="dashboard-card">
            <div>
              <div className="card-header-top">
                <span className="card-header-icon">{card.icon}</span>
                <span className={`card-tag ${card.tag.toLowerCase().includes('hook') ? 'hook' : 'lifecycle'}`}>{card.tag}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <Link to={card.path} className="card-btn">
              Explore Demo &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
