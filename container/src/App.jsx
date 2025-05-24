import styles from "./assets/scss/App.module.scss";
import React, { useState } from "react";
const DashboardApp = React.lazy(() => import("dashboard/App"));

const App = () => {
  const [module, setModule] = useState("dashboard");
  return (
    <>
      <div>
        <h1 className={styles.title}>Hello with SCSS Modules!</h1>
        <p>API URL: {process.env.REACT_APP_API_URL}</p>
        <button onClick={() => setModule(!module)}>Toggle Micro Frontend</button>
      </div>
      <React.Suspense fallback="Loading...">
        {module === "dashboard" && <DashboardApp />}
      </React.Suspense>
    </>
  );
};

export default App;
