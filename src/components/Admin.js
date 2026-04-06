import { useState } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addProblem = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/problems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    }).then(() => alert("Problem Added"));
  };

  return (
    <div>
      <h2>Admin - Add Problem</h2>
      <form onSubmit={addProblem}>
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
        
      </form>
    </div>
  );
}

export default Admin;
