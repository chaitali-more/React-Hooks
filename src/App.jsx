import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import FunctionLifecycleDemo from "./components/FunctionLifecycleDemo";
import MyClassComponent from "./ReactLifeCycle/MyClassComponent";
import MyStateComponent from "./Hooks/MyStateComponent";
import MyUseEffect from "./Hooks/MyUseEffect";
import MyUseRef from "./Hooks/MyUseRef";
import Parent from "./Hooks/UseRef/Parent";

// Helper component to provide consistent layout wrapper around each demo component
const DemoPageWrapper = ({ title, category, children }) => {
  return (
    <div className="demo-page">
      <div className="back-btn-container">
        <Link to="/" className="back-btn">
          &larr; Back to Dashboard
        </Link>
      </div>
      <div className="demo-title-section">
        <div className={`card-tag ${category.toLowerCase()}`}>{category}</div>
        <h1>{title}</h1>
      </div>
      <div className="demo-card-container">
        {children}
      </div>
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                forwardRef
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
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route 
            path="/use-state" 
            element={
              <DemoPageWrapper title="useState Hook Demo" category="Hook">
                <MyStateComponent />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/use-effect" 
            element={
              <DemoPageWrapper title="useEffect & useLayoutEffect Hook Demo" category="Hook">
                <MyUseEffect />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/use-ref" 
            element={
              <DemoPageWrapper title="useRef & DOM Access Demo" category="Hook">
                <MyUseRef />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/forward-ref" 
            element={
              <DemoPageWrapper title="forwardRef & useImperativeHandle Demo" category="Hook">
                <Parent />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/class-component" 
            element={
              <DemoPageWrapper title="Class Component Lifecycle Demo" category="Lifecycle">
                <MyClassComponent />
              </DemoPageWrapper>
            } 
          />
          
          <Route 
            path="/function-component" 
            element={
              <DemoPageWrapper title="Function Component Lifecycle Demo" category="Lifecycle">
                <FunctionLifecycleDemo />
              </DemoPageWrapper>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
