import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Submit() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [recentSubmission, setRecentSubmission] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const problem = location.state;

  // 🔹 Fetch latest submission

  const fetchLatestSubmission = async () => {
    try {
      const res = await fetch("http://localhost:8080/submissions");
      const data = await res.json();

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) return;

      // 🔥 filter + sort in ONE step
      const latest = data
        .filter((s) => s.user?.id === user.id)
        .sort((a, b) => b.id - a.id)[0];

      console.log("LATEST:", latest);

      setRecentSubmission(latest);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❌ prevent double click
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await fetch("http://localhost:8080/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user?.id,
          problemId: problem?.id,
          code: code,
          language: "Java",
          input: input,
        }),
      });

      const data = await res.json(); // ✅ ONLY THIS

      console.log("RESPONSE:", data); // ✅ FIXED

      if (!res.ok) throw new Error("Submission failed");

      alert("Submitted Successfully ✅");

      setTimeout(() => {
        fetchLatestSubmission();
      }, 500);

      setCode("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false); // ✅ reset
    }
  };

  // 🔹 Load latest submission on page load
  useEffect(() => {
    fetchLatestSubmission();
  }, []);

  return (
    <div>
      <h2>Submit Solution</h2>

      {problem && <h3>{problem.title}</h3>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter input (-------)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "300px", marginBottom: "10px" }}
        />
        <br />
        

        <textarea
          placeholder="Write your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {/* 🔥 SHOW RECENT SUBMISSION */}
      {recentSubmission && (
        <div
          style={{
            border: "2px solid green",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          <h3>Latest Submission</h3>

          <p>
            <b>Problem:</b> {recentSubmission.problem?.title}
          </p>
          <p>
            <b>User:</b> {recentSubmission.user?.username}
          </p>
          <p>
            <b>Status:</b>{" "}
            {recentSubmission.status === "Passed"
              ? "Accepted"
              : recentSubmission.status}
          </p>

          <p>
            <b>Output:</b>
          </p>

          <pre
            style={{
              
              padding: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {recentSubmission.output}
          </pre>

          <pre style={{  padding: "10px" }}>
            {recentSubmission.code}
          </pre>
          <pre
            style={{
              
              padding: "10px",
              whiteSpace: "pre-wrap",
            }}
          >
            {recentSubmission.code}
          </pre>
        </div>
      )}
    </div>
  );
}

export default Submit;
