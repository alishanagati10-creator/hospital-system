import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import ProblemList from "./components/ProblemList";
import Submit from "./components/SubmitSolution"; // ✅ make sure name matches
import Admin from "./components/Admin";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <div className="app-container">{/* Your whole app content */}</div>

        <h1>Coding Platform</h1>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/problems" element={<ProblemList />} />
          <Route path="/submit" element={<Submit />} /> {/* ✅ fixed */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
