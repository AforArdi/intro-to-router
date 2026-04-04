# React Internals & Modern React Router v6

Welcome to Day 98 of my 180-Day MERN Stack Journey! This repository contains my practice code and notes for understanding React's internal mechanisms and modern routing using React Router v6.

## 🧠 React Core Concepts

### The Virtual DOM & The Diffing Algorithm
React uses a Virtual DOM (a lightweight JavaScript representation of the actual DOM) to optimize UI updates. When state or props change, React creates a new Virtual DOM tree. 

Instead of blindly replacing the entire real DOM, React uses a **diffing algorithm** (Reconciliation) to compare the *new* Virtual DOM with the *old* one. It follows two main rules for speed:
1. **Different Elements:** If a node's type changes (e.g., `<div>` to `<span>`), React tears down the old tree and builds the new one from scratch.
2. **Keys in Lists:** When rendering lists (like `posts.map()`), React uses the `key` prop to identify which items have changed, been added, or been removed. This prevents React from re-rendering the entire list when only one item changes.

### Reactivity & Rendering
* **Reactivity:** React automatically updates the UI when the underlying data (state) changes. State is the single source of truth.
* **Rendering:** The initial process where React calls the component, creates the Virtual DOM, and mounts it to the real DOM.
* **Re-rendering:** Subsequent updates where React recalculates the Virtual DOM and applies only the necessary changes to the real DOM.

## 🛣️ React Router v6

### `createBrowserRouter` & Loaders
Modern React Router uses `createBrowserRouter` to enable data APIs. 
* **Loaders:** Instead of fetching data inside a `useEffect` (which causes a waterfall effect and blank screens), `loader` functions fetch data *before* the component even renders.
* **`useLoaderData`:** This hook accesses the data returned by the loader directly inside the component.
* *Note:* When returning a `fetch` promise directly in a loader, React Router automatically resolves the `.json()` response!

### Dynamic Routing
* **Params:** We can create dynamic paths using a colon (e.g., `/users/:userId`). 
* **`useParams`:** A hook used inside the component to extract the dynamic URL parameters (e.g., `const { userId } = useParams()`). This is crucial for rendering specific data, like a single post detail page.

## 🧭 Navigation & Pending UI

### Hooks for Navigation
* **`useNavigate`:** Returns a function to programmatically navigate users (e.g., `navigate(-1)` to go back, or `navigate('/')` after a form submission).
* **`useNavigation`:** Tells us the current state of the router (`"idle"`, `"loading"`, or `"submitting"`). Useful for showing a global loading spinner.

### UI Best Practices
* **Pending UI:** By checking `navigation.state === 'loading'`, we can display a fallback UI while data is being fetched.
* **`NavLink`:** Always prefer `NavLink` over `Link` in navigation bars. It automatically adds an `active` class to the currently visited route, making it easy to style the active tab.

## 🔍 Advanced Route Handling

* **Catch-All Route (\`*\`)**: Setting a route path to \`*\` acts as a wildcard. If the user navigates to a URL that doesn't exist, this route catches it, allowing us to display a custom 404 Error page.
* **`useLocation`**: Returns the current location object. Useful for tracking the current URL pathname or search queries.
