import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <p>Welcome to the Multi-Page React Application.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h3>About Page</h3>
      <p>This page provides information about the application.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h3>Contact Page</h3>
      <p>Email: example@email.com</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", fontFamily: "Arial" }}>
        <h2>Multi Page React App</h2>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;