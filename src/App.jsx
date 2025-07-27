import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";

const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const About = React.lazy(() => import("./pages/About/About"));
const MyTeam = React.lazy(() => import("./pages/MyTeam/MyTeam"));
const PrivateRoute = React.lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const Loading = React.lazy(() => import("./components/Loader/Loading"));
const Layout = React.lazy(() => import("./components/Layout/Layout"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<MyTeam />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
