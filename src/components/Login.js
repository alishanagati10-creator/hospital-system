import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  // 🔹 State variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Navigation hook (IMPORTANT FIX)
  const navigate = useNavigate();

  // 🔹 Handle Login
  const handleLogin = async () => {
    console.log("Button clicked");

    try {
      const res = await fetch("http://localhost:8080/users");

      // 🔹 Check response
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      console.log("Users:", data);

      // 🔹 Find matching user
      const user = data.find(
        (u) => u.username === username && u.password === password,
      );

      if (user) {
        alert("Login successful ✅");

        // 🔹 Store login info (optional but useful)
        localStorage.setItem("user", JSON.stringify(user));

        // 🔹 Navigate to problems page (FIXED)
        navigate("/problems");
      } else {
        alert("Invalid credentials ❌");
      }
    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to connect backend ❌");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>

      {/* Username */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      {/* Login Button */}
      <button onClick={handleLogin}>Login</button>

      <br />
      <br />
      

      {/* Register Link */}
      <Link to="/register">Don't have an account? Register</Link>
    </div>
  );
}

export default Login;
