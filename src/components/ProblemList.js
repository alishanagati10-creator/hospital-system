import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProblemList() {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate(); // ✅ ADD THIS

  useEffect(() => {
    fetch("http://localhost:8080/problems")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProblems(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Problem List</h2>

      {problems.length === 0 ? (
        <p>No problems found</p>
      ) : (
        problems.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/submit", { state: p })} // ✅ CLICK FIX
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))
      )}

      <br />
      <Link to="/leaderboard">Leaderboard</Link>
      
    </div>
  );
}

export default ProblemList;
