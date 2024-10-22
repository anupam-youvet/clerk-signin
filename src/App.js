import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthenticateComponent from "./pages/AuthenticateComponent";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sso-callback" element={<AuthenticateComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
