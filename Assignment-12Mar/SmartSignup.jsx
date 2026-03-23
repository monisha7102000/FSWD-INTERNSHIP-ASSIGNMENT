import React, { useState } from "react";

function SmartSignupForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("❌ Invalid Email Format");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ Password must be at least 6 characters");
      return;
    }

    setMessage("✅ Signup Successful!");
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>Smart Signup Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Signup</button>

      </form>

      <p>{message}</p>
    </div>
  );
}

export default SmartSignupForm;