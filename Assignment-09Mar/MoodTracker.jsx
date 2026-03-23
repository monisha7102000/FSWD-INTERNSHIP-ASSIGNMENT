import React, { useState } from "react";

function MoodTracker() {

  const [mood, setMood] = useState("😊");

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>Mood Tracker</h2>

      <h3>Your Mood: {mood}</h3>

      <button onClick={() => setMood("😊 Happy")}>Happy</button>
      <button onClick={() => setMood("😢 Sad")}>Sad</button>
      <button onClick={() => setMood("😡 Angry")}>Angry</button>
      <button onClick={() => setMood("😴 Tired")}>Tired</button>
      <button onClick={() => setMood("😎 Excited")}>Excited</button>

    </div>
  );
}

export default MoodTracker;