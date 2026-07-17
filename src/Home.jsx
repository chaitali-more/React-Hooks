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
      title: "forwardRef & useImperativeHandle",
      description: "Expose child component functions (like focus and clear inputs) up to parent components using custom refs.",
      tag: "Hook",
      path: "/forward-ref",
      icon: "🔑",
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
              <span className="card-header-icon">{card.icon}</span>
              <div className={`card-tag ${card.tag.toLowerCase()}`}>{card.tag}</div>
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
