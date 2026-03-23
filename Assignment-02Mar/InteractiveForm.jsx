import React, { useState } from "react";

function InteractiveForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      setMessage("❌ Please fill all fields");
    } 
    else if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email");
    } 
    else {
      setMessage("✅ Form submitted successfully!");
    }
  };

  return (
    <div style={{textAlign:"center", fontFamily:"Arial"}}>
      <h2>Interactive Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br/>

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br/>

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default InteractiveForm;