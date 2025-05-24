import styles from "./assets/scss/App.module.scss";
import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./errorBoundary";
const RemoteDashboard = React.lazy(() => import("dashboard/App"));
const RemoteUser = React.lazy(() => import("user/App"));

const App = () => {
  const [module, setModule] = useState(true);
  console.log(module, "module");
  return (
    <>
      <Router>
        <nav style={{ padding: "1rem", background: "#eee" }}>
          <Link to="/" style={{ marginRight: 10 }}>
            Home
          </Link>
          <Link to="/dashboard" style={{ marginRight: 10 }}>
            Dashboard
          </Link>
          <Link to="/user" style={{ marginRight: 10 }}>User</Link>
          <Link to="/overview" style={{ marginRight: 10 }}>Overview</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loading Dashboard...</div>}>
                  <RemoteDashboard />
                </Suspense>
              </ErrorBoundary>
            }
          />

          <Route
            path="/user"
            element={
              <ErrorBoundary>
                <Suspense fallback={<div>Loading User Module...</div>}>
                  <RemoteUser />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/overview"
            element={
              <>
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading Dashboard...</div>}>
                    <RemoteDashboard />
                  </Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading User Module...</div>}>
                    <RemoteUser />
                  </Suspense>
                </ErrorBoundary>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <h1 className={styles.containerTitle}>Hello with SCSS Modules!</h1>
      <p>API URL: {process.env.REACT_APP_API_URL}</p>
      <button onClick={() => setModule(!module)}>Toggle Micro Frontend</button>
    </div>
  );
};
export default App;
