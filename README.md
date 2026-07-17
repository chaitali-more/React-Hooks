# React Hooks & Component Lifecycle Lab ⚛️

An interactive, responsive playground designed to demonstrate and explore React mechanisms, hooks state transitions, rendering cycles, and custom ref handles. Styled with a premium, glassmorphic dark-mode interface.

## 🚀 Live Features & Demos

### 1. React Hooks Showcase
- **`useState`**: Deep dive into managing state variables of different types (Numbers, Strings, Booleans, Arrays, and Objects), asynchronous batching, and functional state updates.
- **`useEffect` & `useLayoutEffect`**: Learn the difference between pre-paint layout measurements and standard post-paint side-effects.
- **`useRef`**: Create mutable variables that persist across renders without causing re-renders, and target, focus, or style DOM nodes directly.
- **`forwardRef` & `useImperativeHandle`**: Expose custom imperative child component functions (like inputs focusing and clearing) directly up to parent components.

### 2. Component Lifecycles
- **Class Lifecycle**: Classic lifecycle phases in action featuring standard constructor initializations, mounting, state change updates, and unmount cleanup logs.
- **Function Lifecycle**: Modern React lifecycle demonstration showcasing how cleanup returns inside `useEffect` run when unmounting or dependency state updates trigger.

---

## 🛠️ Tech Stack
- **Core**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite
- **Routing**: React Router (client-side route mapping)
- **Styling**: Vanilla CSS (Modern Dark Mode with glassmorphic cards and responsive flex structures)

---

## 💻 Local Setup & Development

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/chaitali-more/React-Hooks.git
   cd React-Hooks
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Dev Server:**
   ```bash
   npm run dev
   ```

4. **Build Production Assets:**
   ```bash
   npm run build
   ```
