import { useEffect, useState } from "react";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/submissions/leaderboard") // ✅ FIXED
      .then((res) => res.json())
      .then((data) => {
        console.log("Leaderboard:", data); // 🔥 debug
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h2>🏆 Leaderboard</h2>
      <ul>
        {users.map((u, index) => (
          <li key={index}>
            {index + 1}. {u.username} - Score: {u.score}
          </li>
        ))}
        <div style={{ minHeight: "100vh", backgroundColor: "#0f172a" }}></div>
      </ul>
    </div>
  );
}

export default Leaderboard;
