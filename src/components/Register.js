import React, { useState, useEffect } from "react";

function Register() {
  // 🔹 State
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  // 🔹 Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/users");

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 🔹 Load users on page load
  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔹 Handle Register
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      alert("User Registered Successfully ✅");

      // 🔹 Clear form
      setUsername("");
      setEmail("");
      setPassword("");

      // 🔹 Refresh users list
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert("Registration failed ❌");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Register</button>
      </form>

      {/* 🔹 Display Users */}
      <h3>Registered Users</h3>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user, index) => (
          <div key={index}>
            <p>
              {user.username} - {user.email}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Register;
