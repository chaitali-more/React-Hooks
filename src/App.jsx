import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import FunctionLifecycleDemo from "./components/FunctionLifecycleDemo";
import MyClassComponent from "./ReactLifeCycle/MyClassComponent";
import MyStateComponent from "./Hooks/MyStateComponent";
import MyUseEffect from "./Hooks/MyUseEffect";
import MyUseRef from "./Hooks/MyUseRef";
import Parent from "./Hooks/UseRef/Parent";
import { userContext, UserContextProvider  } from "./context/UserContext";
import Counter from "./Hooks/UseReducer/Counter";
import User from "./Hooks/UseReducer/User";
import MyUseMemo from "./Hooks/UseMemo/MyUseMemo";
import MyUseID, { MyUseIDNotes } from "./Hooks/UseID/MyUseID";
import MyUseTranslation from "./Hooks/UseTranslation/MyUseTranslation";

// Helper component to provide consistent layout wrapper around each demo component
const DemoPageWrapper = ({ title, category, notes, children }) => {
  return (
    <div className="demo-page">
      <div className="back-btn-container">
        <Link to="/" className="back-btn">
          &larr; Back to Dashboard
        </Link>
      </div>
      <div className="demo-title-section">
        <div className={`card-tag ${category.toLowerCase().includes('hook') ? 'hook' : 'lifecycle'}`}>{category}</div>
        <h1>{title}</h1>
      </div>
      <div className="demo-card-container">
        {children}
      </div>
      {notes && (
        <div className="demo-notes-card">
          <h3>💡 Quick Summary & Notes</h3>
          <p>{notes.summary}</p>
          {notes.points && (
            <ul>
              {notes.points.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [name,setName] = useState("Chaitali More")

  return (
    <div className="app-container">
      {/* Premium Glassmorphic Navigation */}
      <nav className="navbar">
        <Link to="/" className="nav-brand">
          <svg width="24" height="24" viewBox="-11.5 -10.23175 23 20.4635" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2.05" fill="#818cf8"/>
            <g stroke="#818cf8" strokeWidth="1">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
          <span className="brand-text-desktop">React Hooks & Lifecycle Lab</span>
          <span className="brand-text-mobile">React Lab</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Dashboard
          </NavLink>
          
          {/* Hooks Dropdown */}
          <div className="nav-dropdown-container">
            <span className="nav-dropdown-trigger">
              Hooks <span className="dropdown-arrow">▼</span>
            </span>
            <div className="nav-dropdown-menu">
              <NavLink to="/use-state" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                useState
              </NavLink>
              <NavLink to="/use-effect" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                useEffect
              </NavLink>
              <NavLink to="/use-ref" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                useRef
              </NavLink>
              <NavLink to="/forward-ref" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                forwardRef
              </NavLink>
               <NavLink to="/use-reducer-counter" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                useReducer Counter
              </NavLink>
              <NavLink to="/use-reducer-form" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                useReducer Form
              </NavLink>
               <NavLink to="/use-memo" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
               useMemo
              </NavLink>
              <NavLink to="/use-id" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
               useID
              </NavLink>
              <NavLink to="/use-translation" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
               useTranslation
              </NavLink>
            </div>
          </div>

          <NavLink to="/class-component" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Class Component
          </NavLink>
          <NavLink to="/function-component" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Function Lifecycle
          </NavLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Off-Canvas Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="offcanvas-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Off-Canvas Menu Drawer */}
      <div className={`offcanvas-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <Link to="/" className="nav-brand" onClick={() => setIsMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="-11.5 -10.23175 23 20.4635" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="0" cy="0" r="2.05" fill="#818cf8"/>
              <g stroke="#818cf8" strokeWidth="1">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
            <span className="brand-text-sidebar">React Lab</span>
          </Link>
          <button className="offcanvas-close" onClick={() => setIsMobileMenuOpen(false)}>
            ✕
          </button>
        </div>
        
        <div className="offcanvas-body">
          <NavLink to="/" end className="offcanvas-link" onClick={() => setIsMobileMenuOpen(false)}>
            Dashboard
          </NavLink>
          
          <div className="offcanvas-section">
            <span className="offcanvas-section-title">Hooks</span>
            <div className="offcanvas-section-links">
              <NavLink to="/use-state" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                useState
              </NavLink>
              <NavLink to="/use-effect" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                useEffect
              </NavLink>
              <NavLink to="/use-ref" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                useRef
              </NavLink>
              <NavLink to="/forward-ref" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                forwardRef & Context
              </NavLink>
              <NavLink to="/use-reducer-counter" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                useReducer Counter
              </NavLink>
              <NavLink to="/use-reducer-form" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                useReducer Form
              </NavLink>
              <NavLink to="/use-memo" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                useMemo
              </NavLink>
              <NavLink to="/use-id" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                useID
              </NavLink>
              <NavLink to="/use-translation" className="offcanvas-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                useTranslation
              </NavLink>
            </div>
          </div>

          <div className="offcanvas-divider"></div>

          <NavLink to="/class-component" className="offcanvas-link" onClick={() => setIsMobileMenuOpen(false)}>
            Class Component
          </NavLink>
          <NavLink to="/function-component" className="offcanvas-link" onClick={() => setIsMobileMenuOpen(false)}>
            Function Lifecycle
          </NavLink>
        </div>
      </div>
      
      {/* Main Content Area */}
      <main className="main-content">
        {/* <userContext.Provider value={{name,setName}}> */}
        <UserContextProvider  userDetails = {{name, setName}}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route 
            path="/use-state" 
            element={
              <DemoPageWrapper 
                title="useState Hook Demo" 
                category="Hook"
                notes={{
                  summary: "useState is a core React hook that enables functional components to store and manage local state data.",
                  points: [
                    "Updating state triggers React to automatically re-render the component with updated data.",
                    "State updates are asynchronous and batched together for optimal UI performance.",
                    "Use functional state updates like setCount(prev => prev + 1) when the next value depends on the previous state."
                  ]
                }}
              >
                <MyStateComponent />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/use-effect" 
            element={
              <DemoPageWrapper 
                title="useEffect & useLayoutEffect Hook Demo" 
                category="Hook"
                notes={{
                  summary: "useEffect handles side-effects like fetching API data, setting up timers, or DOM subscriptions after render.",
                  points: [
                    "An empty dependency array [] runs the effect only once when the component mounts.",
                    "Specifying dependencies [value] re-runs the effect whenever those specific values change.",
                    "Returning a cleanup function cancels timers or subscriptions before the component unmounts."
                  ]
                }}
              >
                <MyUseEffect />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/use-ref" 
            element={
              <DemoPageWrapper 
                title="useRef & DOM Access Demo" 
                category="Hook"
                notes={{
                  summary: "useRef creates a mutable reference object (.current) that persists across re-renders without triggering a re-render when changed.",
                  points: [
                    "Ideal for directly accessing or manipulating DOM elements (e.g. focusing an input element).",
                    "Perfect for storing mutable variables like timer IDs or previous values quietly."
                  ]
                }}
              >
                <MyUseRef />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/forward-ref" 
            element={
              <DemoPageWrapper 
                title="forwardRef & Context API Demo" 
                category="Hook & Context"
                notes={{
                  summary: "forwardRef passes DOM refs to child components, while Context API shares global data cleanly without prop drilling.",
                  points: [
                    "useImperativeHandle exposes custom child functions (e.g. focusInput, clearInput) up to parent components.",
                    "UserContextProvider shares user state across deep component trees using custom useUserDetails() hook."
                  ]
                }}
              >
                <Parent />
              </DemoPageWrapper>
            } 
          />
          <Route 
            path="/use-reducer-counter" 
            element={
              <DemoPageWrapper 
                title="useReducer Counter Demo" 
                category="Hook"
                notes={{
                  summary: "useReducer is an alternative to useState designed for complex state logic driven by pure reducer functions.",
                  points: [
                    "The reducer function accepts (state, action) and returns the updated next state object.",
                    "Dispatching actions like dispatch({ type: 'increment' }) triggers clear, predictable state updates."
                  ]
                }}
              >
                <Counter />
              </DemoPageWrapper>
            } 
          />
           <Route 
            path="/use-reducer-form" 
            element={
              <DemoPageWrapper 
                title="useReducer Form Demo" 
                category="Hook"
                notes={{
                  summary: "useReducer simplifies managing multi-field form inputs with a single centralized action handler.",
                  points: [
                    "Consolidates form inputs (name, email, age) into one unified state object.",
                    "Resets all form fields back to initial values in a single dispatch operation."
                  ]
                }}
              >
                <User />
              </DemoPageWrapper>
            } 
          />
            <Route 
            path="/use-memo" 
            element={
              <DemoPageWrapper 
                title="useMemo & useCallback Demo" 
                category="Hook"
                notes={{
                  summary: "useMemo and useCallback optimize performance by preventing wasteful recalculations and re-renders.",
                  points: [
                    "useMemo caches the result of an expensive calculation until specified dependencies change.",
                    "useCallback memoizes function instances so child components don't re-render needlessly."
                  ]
                }}
              >
                <MyUseMemo />
              </DemoPageWrapper>
            } 
          />
            <Route 
            path="/use-id" 
            element={
              <DemoPageWrapper 
                title="useID Hook Demo" 
                category="Hook"
                notes={{
                  summary: "useId generates unique, stable accessibility IDs for linking HTML labels to form controls.",
                  points: [
                    "Ensures form controls stay correctly connected via id and htmlFor attributes.",
                    "Guarantees unique ID generation even when the component is reused multiple times on the same page."
                  ]
                }}
              >
                <MyUseID />
                <MyUseID />
                <MyUseIDNotes />
              </DemoPageWrapper>
            } 
          />
            <Route 
            path="/use-translation" 
            element={
              <DemoPageWrapper 
                title="useTranslation & useTransition Hook Demo" 
                category="Hook"
                notes={{
                  summary: "useTranslation provides i18n support for multi-language apps, while useTransition optimizes non-urgent background rendering.",
                  points: [
                    "t('welcome') dynamically looks up and renders translations based on active language setting.",
                    "useTransition marks non-urgent state updates to run in the background without freezing the UI."
                  ]
                }}
              >
                <MyUseTranslation/>
              </DemoPageWrapper>
            } 
          />
          <Route 
            path="/use-transition" 
            element={
              <DemoPageWrapper 
                title="useTransition Hook Demo & Revision Guide" 
                category="Hook"
                notes={{
                  summary: "useTransition is a React Hook that allows non-urgent state updates to be performed in the background without blocking the UI.",
                  points: [
                    "Keeps the UI interactive during expensive renders.",
                    "Returns [isPending, startTransition] to show loading indicators smoothly."
                  ]
                }}
              >
                <MyUseTranslation/>
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/class-component" 
            element={
              <DemoPageWrapper 
                title="Class Component Lifecycle Demo" 
                category="Lifecycle"
                notes={{
                  summary: "Class components handle lifecycle events using explicit lifecycle methods.",
                  points: [
                    "componentDidMount: Runs once after component is inserted into the DOM.",
                    "componentDidUpdate: Runs after state or prop updates occur.",
                    "componentWillUnmount: Runs right before component is removed for cleanup."
                  ]
                }}
              >
                <MyClassComponent />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/function-component" 
            element={
              <DemoPageWrapper 
                title="Function Component Lifecycle Demo" 
                category="Lifecycle"
                notes={{
                  summary: "Functional components express all lifecycle phases cleanly using useEffect hooks.",
                  points: [
                    "Mounting = Initial useEffect body execution.",
                    "Updating = Re-running useEffect when dependency items change.",
                    "Unmounting = Executing the returned cleanup function."
                  ]
                }}
              >
                <FunctionLifecycleDemo />
              </DemoPageWrapper>
            } 
          />
        </Routes>
        </UserContextProvider >
        {/* </userContext.Provider> */}
      </main>
    </div>
  );
}

export default App;
